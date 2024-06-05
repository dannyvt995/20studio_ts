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
import Project1 from '@Modules/Project1';
import { listPathAndIdDom } from '@Constants/data_noname';
import { removeSplash } from '@Utils/removeSplash'
import { isMobile } from '@/utils/responsive';
import Lenis from '@studio-freight/lenis';
import useStoreZustand from '@/hooks/useStoreZustand';




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

  let targetButtonNavbar: HTMLElement | null;
  let targetNavbarDeskop: HTMLElement | null;

  const lenisRef = React.useRef<Lenis>();
  const targetId = removeSplash(pathName, listPathAndIdDom)
  const {setStateTransition} = useStoreZustand()
  const condition_Disable = pathName === '/work' || pathName === '/3d' || isMobile();
  const transitionKeyRef = useRef<string|null>(null)
  const isWorkPage = useRef<boolean>(false)
  const propsGsap = {
    props_enterAnim: {

      duration: timeTransition,
      ease: easeTransition
    },
    props_exitAnim: {

      duration: timeTransition,
      ease: easeTransition
    },
    props_Filter_Light: {
      '-webkit-filter': 'brightness(100%)',
      filter: 'brightness(100%)',
    },
    props_Filter_Shadow: {
      '-webkit-filter': 'brightness(16%)',
      filter: 'brightness(16%)',
    }
  }



  function update(time: number) {
    lenisRef.current?.raf(time * 1420);

  }
  function reInitLenis(pathNameFormat: string) {
    domScroll = document.getElementById(`${pathNameFormat}page`)
    targetButtonNavbar = document.getElementById("button_menu")
    targetNavbarDeskop = document.getElementById("navbar_deskop")

    if (!domScroll) return
    if (!targetNavbarDeskop || !targetButtonNavbar) {
      console.error('PageTransition>>Menu references are not correct');
      return;
    }
    gsap.registerPlugin(ScrollTrigger)
    lenisRef.current = new Lenis({
      wrapper: domScroll as HTMLElement,
      duration: 1.2,
      easing: (t: number) => 1 - Math.pow(1 - t, 3.6)
    })

    lenisRef.current?.stop()



    gsap.ticker.add(update)
    ScrollTrigger.defaults({ scroller: domScroll });

    window.lenis = lenisRef.current;
    setTimeout(() => {
      lenisRef.current?.start()
      ScrollTrigger.refresh()
    }, 1000)
    return () => {
      lenisRef.current = undefined
      window.lenis = null
      gsap.ticker.remove(update)
      domScroll = null
    }
  }


  useEffect(() => {
    if (matches.length > 0) {
      targetDom = document.getElementById(`${targetId}page`)
      targetParentDom = targetDom?.parentNode as HTMLElement
      enterAnim(targetParentDom)
      reInitLenis(pathNameFormat)
    } else {
      console.log('No matches found');
    }
    return () => {
      targetParentDom = null
      targetDom = null
      targetButtonNavbar = null
      targetNavbarDeskop = null
    }
  }, [])



  const enterDetailProject = (dom: HTMLElement) => {
    gsap.set(dom, {
      clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
    })
  }
  const enterAnim = (dom: HTMLElement) => {

    gsap.timeline()
      .set(dom.parentNode as HTMLElement, { zIndex: indexRef.current++ })
      .set(dom, { clipPath: 'polygon(0% 100%, 100% 110%, 100% 100%, 0% 100%)' })
      .set(dom.children[0] as HTMLElement, {
        rotate: 0,
        y: 0,
        x: 0,
        scale: 1,
        ...propsGsap.props_Filter_Light,
      })
      .set(dom.children[0] as HTMLElement, {
        rotate: 7,
        y: window.innerHeight / 2,
        scale: 1.2,
        ...propsGsap.props_Filter_Light,
      })
      .to(dom as HTMLElement, {
        clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
        ...propsGsap.props_enterAnim
      })
      .to(dom.children[0] as HTMLElement, {
        rotate: 0,
        y: 0,
        x: 0,
        scale: 1,
        ...propsGsap.props_Filter_Light,
        ...propsGsap.props_enterAnim
      }, '<')
  }

  const exitAnim = (dom: HTMLElement) => {
    gsap.timeline().set(dom.children[0] as HTMLElement, {
      ...propsGsap.props_Filter_Light,
    })
      .to(dom.children[0] as HTMLElement, {
        rotate: -7,
        y: -window.innerHeight / 2,
        scale: 1.2,
        ...propsGsap.props_Filter_Shadow,
        ...propsGsap.props_exitAnim
      })
  }
  const exitWorkPage = (dom:HTMLElement, item_project_active:number) => {
    // always is #work page
    // Now we have 4 item dom
    // .heading , .indicator, .thumbnail , .projects // 0,1,2,3
    let titleProject = dom.children[0].children[0].children[0].children[0].children[Number(item_project_active)]
    let subtitleProject = dom.children[0].children[0].children[0].children[1].children[Number(item_project_active)]
    let thumbnailProject = dom.children[0].children[0].children[2]
    let backgroundProject = dom.children[0].children[0].children[3].children[Number(item_project_active)].children[0].children[0]


    gsap.timeline()
      .set(thumbnailProject, {
        clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
      }).to(
        backgroundProject, {
        scale: 1,
        ...propsGsap.props_exitAnim
      }
      ).to(
        thumbnailProject, {
        clipPath: 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)',
        ...propsGsap.props_exitAnim
      }, "<")
      .to(
        [titleProject, subtitleProject], {
        opacity: 0,
        ...propsGsap.props_exitAnim
      }, "<")

  }
  useEffect(() => {
    const check = Number(listPathAndIdDom.pagesWork.includes(transitionKeyRef.current as string))
    if(check)isWorkPage.current = true
  },[transitionKeyRef.current])
  return (
    <div ref={scopeRef}>
           {children}
      <PageTransitionGroup>
        <TransitionGroup component={null}>

          <Transition

            key={transitionKey}
            timeout={timeTransition * 1000}

            unmountOnExit={true}
            onEnter={(node: any) => {
              transitionKeyRef.current = transitionKey
              setStateTransition('enter')
              console.log(transitionKey)
              if (listPathAndIdDom.pagesWork.includes(transitionKey)) {
                enterDetailProject(node.children[0])
              } else {
                enterAnim(node.children[0]);
              }

      
           
            }}
            onEntered={() => {
              setStateTransition('entered')
              if (pathName === '/work' || pathName === '/3d' || isMobile()) return
              reInitLenis(pathNameFormat)
            }}


            onExit={(node: any) => {
              setStateTransition('exit')
              if (pathName==="/work" && listPathAndIdDom.pagesWork.includes(transitionKeyRef.current as string)) {
                let activeItemOnWorkPage = localStorage.getItem('activeItemOnWorkPage')
                exitWorkPage(node.children[0], Number(activeItemOnWorkPage))
              } else {
                exitAnim(node.children[0]);
              }
            }}
          >
            {state => {
              let contentDomReference = null

              switch (pathName) {
                case '/':
                case '/home':
                  contentDomReference = <HomePage stateTransition={state} />;

                  break;
                case '/about':
                  contentDomReference = <AboutPage stateTransition={state} />;

                  break;
                case '/contact':
                  contentDomReference = <ContactPage stateTransition={state} />;

                  break;
                case '/work':
                  contentDomReference = <WorkPage stateTransition={state} />;

                  break;
                  case '/work/work1':
                    contentDomReference = <Project1 stateTransition={state}/>;
  
                    break;
                default:
                  return null
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