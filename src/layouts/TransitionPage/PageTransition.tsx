"use client"
import React, { memo, useEffect, useRef } from 'react';
import { Transition, TransitionGroup } from 'react-transition-group';

import PageTransitionGroup from './PageTransitionGroup';
import PageTransitionWrapper from './PageTransitionWrapper';

import { ScrollTrigger } from 'gsap/ScrollTrigger'
import gsap from "gsap";


import { useGSAP } from '@gsap/react';



import { usePathname } from 'next/navigation';
import HomePage from '@Modules/HomePage';
import AboutPage from '@Modules/AboutPage';
import ContactPage from '@Modules/ContactPage';
import WorkPage from '@Modules/WorkPage';
import { listPathAndIdDom } from '@Constants/data_noname';
import { removeSplash } from '@Utils/removeSplash'
import { isMobile } from '@/utils/responsive';
import Lenis from '@studio-freight/lenis';



gsap.registerPlugin(useGSAP);
interface PageTransitionProps {
  children: React.ReactNode;
  transitionKey: string;
}
const PageTransition: React.FC<PageTransitionProps> = ({
  children,
  transitionKey,
  ...rest
}) => {

  console.log("##############   PageTransition render")
  const pathName = usePathname()
  const pathNameFormat = removeSplash(pathName, listPathAndIdDom)

  const timeTransition = 1.5
  const indexRef = useRef(100)
  const easeTransition = "power4.out"
  const allPaths = [
    ...listPathAndIdDom.pages,
    ...listPathAndIdDom.pagesWork,
  ];


  const matches = allPaths.filter(path => path === pathName);
  const scopeRef = useRef(null)
  let domScroll: HTMLElement | null;
  let targetParentDom: HTMLElement | null;
  let targetDom: HTMLElement | null;



  const lenisRef = React.useRef<Lenis>();

  function reInitLenis(pathNameFormat: string) {
    domScroll = document.getElementById(`${pathNameFormat}page`)
    // console.log(domScroll)
    lenisRef.current = new Lenis({
      syncTouch: true,
      wrapper: domScroll as HTMLElement,
      duration: 1.2,
      easing: (t: number) => 1 - Math.pow(1 - t, 3.6)
    })

    window.lenis = lenisRef.current;
    gsap.ticker.add(update)


    function update(time: number) {
      lenisRef.current?.raf(time * 1420);
    }
    return () => {
      lenisRef.current = undefined
      window.lenis = null
      gsap.ticker.remove(update)
      domScroll = null
    }
  }


  useEffect(() => {
    if (matches.length > 0) {
      let targetId = removeSplash(pathName, listPathAndIdDom)
      targetDom = document.getElementById(`${targetId}page`)
      targetParentDom = targetDom?.parentNode as HTMLElement
      enterAnim(targetParentDom)
      reInitLenis(pathName)
    } else {
      console.log('No matches found');
    }
    return () => {
      targetParentDom = null
      targetDom = null
    }
  }, [])




  const enterAnim = (dom: HTMLElement) => {

    gsap.timeline({})
      .set(dom.parentNode as HTMLElement, { zIndex: indexRef.current++ })
      .set(dom, { clipPath: 'polygon(0% 100%, 100% 110%, 100% 100%, 0% 100%)' })
      .set(dom.children[0] as HTMLElement, {

        '-webkit-filter': 'brightness(100%)',
        filter: 'brightness(100%)',
        rotate: 0,
        y: 0,
        x: 0,
        scale: 1

      })
      .set(dom.children[0] as HTMLElement, {
        '-webkit-filter': 'brightness(100%)',
        filter: 'brightness(100%)',
        rotate: 7,
        y: window.innerHeight / 2,

        scale: 1.2
      })


      .to(dom as HTMLElement, {
        clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
        duration: timeTransition,

        ease: easeTransition
      })
      .to(dom.children[0] as HTMLElement, {
        '-webkit-filter': 'brightness(100%)',
        filter: 'brightness(100%)',
        rotate: 0,
        y: 0,
        x: 0,
        scale: 1,

        duration: timeTransition,
        ease: easeTransition
      }, '<');
  }

  const exitAnim = (dom: HTMLElement) => {


    gsap.timeline().set(dom.children[0] as HTMLElement, {
      '-webkit-filter': 'brightness(100%)',
      filter: 'brightness(100%)',

    }
    )
      .to(dom.children[0] as HTMLElement, {
        '-webkit-filter': 'brightness(26%)',
        filter: 'brightness(26%)',
        rotate: -7,
        y: -window.innerHeight / 2,
        scale: 1.2,
        duration: timeTransition,

        ease: easeTransition
      });
  }

  return (
    <div ref={scopeRef}>
      <PageTransitionGroup>
        <TransitionGroup component={null}>

          <Transition

            key={transitionKey}
            timeout={timeTransition * 1000}

            unmountOnExit={true}
            onEnter={(node: any) => {
              enterAnim(node.children[0]);
            }}
            onEntered={() => {
              localStorage.setItem("onEnter", "false")
              if (pathName === '/work' || pathName === '/3d') return
              reInitLenis(pathNameFormat)
            }}


            onExit={(node: any) => {
              exitAnim(node.children[0]);

            }}
          >
            {state => {
              let contentDomReference = null

              switch (pathName) {
                case '/':
                case '/home':
                  contentDomReference = <HomePage />;

                  break;
                case '/about':
                  contentDomReference = <AboutPage />;

                  break;
                case '/contact':
                  contentDomReference = <ContactPage />;

                  break;
                case '/work':
                  contentDomReference = <WorkPage />;

                  break;

                default:
                  return contentDomReference = <HomePage />;
              }

              return (
                <PageTransitionWrapper state={state} >
                  <div id='wrapper_this'>
                    {contentDomReference}
                  </div>
                </PageTransitionWrapper>
              );
            }}
          </Transition>

        </TransitionGroup>
      </PageTransitionGroup>
    </div>



  );
}

export default memo(PageTransition);