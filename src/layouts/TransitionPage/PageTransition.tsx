"use client"
import React, { memo, useEffect, useRef } from 'react';
import { Transition, TransitionGroup } from 'react-transition-group';

import PageTransitionGroup from './PageTransitionGroup';
import PageTransitionWrapper from './PageTransitionWrapper';


import { usePathname } from 'next/navigation';
import HomePage from '@Modules/HomePage';
import AboutPage from '@Modules/AboutPage';
import ContactPage from '@Modules/ContactPage';
import WorkPage from '@Modules/WorkPage';
import Project1 from '@Modules/Project1';
import { listPathAndIdDom } from '@Constants/data_noname';
import { removeSplash } from '@Utils/removeSplash'
import { isMobile } from '@Utils/responsive';
import useStoreZustand from '@Hooks/useStoreZustand';
import { useInitLenis } from '@Hooks/lenis/useInitLenis';
import { useAnimEnterPage } from '@Hooks/gsap/useAnimEnterPage';
import { useAnimExitPage } from '@Hooks/gsap/useAnimExitPage';
import { useEnterDetailProject } from '@/hooks/gsap/useEnterDetailProject';
import { useExitWorkPage } from '@/hooks/gsap/useExitWorkPage';


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
  const pathNameFormat = removeSplash({pathName:pathName})

  const timeTransition = 1.5
  const indexRef = useRef(100)
  const scopeRef = useRef(null)

  const targetParentDom = useRef<HTMLDivElement | null>();
  const targetDom = useRef<HTMLDivElement | null>();


  const { setStateTransition } = useStoreZustand()
  const transitionKeyRef = useRef<string | null>(null)
  const isWorkPage = useRef<boolean>(false)

  useEffect(() => {
    targetDom.current = document.getElementById(`${pathNameFormat}page`) as HTMLDivElement
    targetParentDom.current = targetDom.current?.parentNode as HTMLDivElement
    useAnimEnterPage({
      node: targetParentDom.current as HTMLDivElement,
      indexRef: 2
    })
    if(!isMobile()) {
      useInitLenis({
        pathName: pathNameFormat
      })
    }
    return () => {
      targetParentDom.current = null
      targetDom.current = null
    }
  }, [])

  useEffect(() => {
    const check = Number(listPathAndIdDom.pagesWork.includes(transitionKeyRef.current as string))
    if (check) isWorkPage.current = true
  }, [transitionKeyRef.current])

  return (
    <div ref={scopeRef}>
      <PageTransitionGroup>
        <TransitionGroup component={null}>
          <Transition
            key={transitionKey}
            timeout={timeTransition * 1000}
            unmountOnExit={true}
            onEnter={(node: any) => {
              transitionKeyRef.current = transitionKey
              setStateTransition('enter')
              if (listPathAndIdDom.pagesWork.includes(transitionKey)) {
                useEnterDetailProject({
                  node: node.children[0]
                })
              } else {
                useAnimEnterPage({
                  node: node.children[0],
                  indexRef: indexRef.current++
                })
              }
            }}

            onEntered={() => {
              setStateTransition('entered')
              if(!isMobile()) {
                if (pathName === '/work' || pathName === '/3d') return
                useInitLenis({
                  pathName: pathNameFormat
                })
              }
              
              
            }}


            onExit={(node: any) => {
              setStateTransition('exit')
              if (pathName === "/work" && listPathAndIdDom.pagesWork.includes(transitionKeyRef.current as string)) {
                let activeItemOnWorkPage = localStorage.getItem('activeItemOnWorkPage')

                useExitWorkPage({
                  node: node.children[0],
                  indexWork: Number(activeItemOnWorkPage)
                })
              } else {
                useAnimExitPage({
                  node: node.children[0]
                })
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
                  contentDomReference = <Project1 stateTransition={state} />;

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