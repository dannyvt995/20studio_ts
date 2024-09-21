'use client'
import React, { useMemo, useEffect, useRef, useState, useCallback } from 'react';
import { Transition, TransitionGroup } from 'react-transition-group';

import PageTransitionGroup from './PageTransitionGroup';
import PageTransitionWrapper from './PageTransitionWrapper';


import { usePathname } from 'next/navigation';




// import HomePage from '@Modules/HomePage';
// import AboutPage from '@Modules/AboutPage';
// import ContactPage from '@Modules/ContactPage';
// import WorkPage from '@Modules/WorkPage';
// import ServicePage from '@/modules/ServicePage';
// import Project1 from '@Modules/Project1';
// import Project2 from '@Modules/Project2';
// import Project3 from '@Modules/Project3';
// import Project4 from '@Modules/Project4';
// import SustainabilityPage from '@Modules/SustainabilityPage';

import * as AllModules from '@Modules/AllModules';

import { removeSplash } from '@Utils/removeSplash'
import { isMobile } from '@Utils/responsive';
import useStoreZustand from '@Hooks/useStoreZustand';
import { useInitLenis } from '@Hooks/lenis/useInitLenis';
import { propsGsapTransitionPage } from "@Constants/gsap_props"
import { gsap } from "gsap"
import { useGSAP } from '@gsap/react';
import useStoreTimeline from '@/hooks/useStoreTimeline';
import {formatUrlForIconNavbar,resetIconNavbarModal} from '@Utils/utils_url'

gsap.registerPlugin(useGSAP)


interface PageTransitionProps {
  children: React.ReactNode;
  transitionKey: string;
}
const PageTransition: React.FC<PageTransitionProps> = ({
  children,
  transitionKey,
  ...rest
}) => {


  const pathName = usePathname()
  const pathNameFormat = removeSplash({ pathName: pathName })
  const listUrlProjects = ['/work/work1', '/work/work2', '/work/work3', '/work/work4'];
  const timeTransition = 1.5
  const indexRef = useRef(100)
  const scopeRef = useRef(null)
  const getAllTimelines = useStoreTimeline((state) => state.getAllTimelines)
  const { setStateTransition, stateEnterPage } = useStoreZustand()
  const targetPath = useRef<string>('/none')
  const currentPath = useRef<string>('/none')
  const targetPathFormat = useRef<string>('/none')
  const currentPathFormat = useRef<string>('/none')
  const isWorkPage = useRef<boolean>(false)
  const [firstLoadPage, setFirstLoadPage] = useState(false);

  const { contextSafe } = useGSAP({ scope: scopeRef })

  // --^^ console.log("##############   PageTransition render")

  useEffect(() => {
    if (stateEnterPage) {
      transitionFirst(pathNameFormat)
      setFirstLoadPage(true)
    }

  }, [stateEnterPage])

  useInitLenis({
    firstLoad: firstLoadPage
  });

  useEffect(() => {
    const { currentPathFormatted } = formatUrlForIconNavbar({ cur: currentPath.current, tar: targetPath.current });
    if (currentPathFormatted === '/none') return
    const timelines = getAllTimelines();

    const currentTimeline = currentPathFormatted ? timelines[currentPathFormatted] : null;
    if (currentTimeline) {
      console.log("1")
    
      currentTimeline.play()
    }
  }, [currentPath.current])


  useEffect(() => {
    const { currentPathFormatted, targetPathFormatted } = formatUrlForIconNavbar({ cur: currentPath.current, tar: targetPath.current });
    if (currentPathFormatted === '/none' || targetPathFormatted === '/none') return
    if (currentPathFormatted !== targetPathFormatted) {
      const timelines = getAllTimelines()
      console.log("2")
  //    setStateUrl({isTarget:targetPath.current,isCurrent:currentPath.current})
      resetIconNavbarModal({ cur: currentPathFormatted, tar: targetPathFormatted ,listTimeline:timelines});
    }
  }, [targetPath.current])


  

  function transitionFirst(pn: string) {
    // --^^ console.log("Enter page ================>")

    const this_page = document.getElementById(`${pn}page`)

    enterPage({
      node: this_page?.parentElement,
      nodeChild: this_page,
      nodeParent: this_page,
      index: 10
    })
    setStateTransition('entered')
    currentPath.current = pathName
  }

  const enterPage = contextSafe(({ node, nodeChild, nodeParent, index }: { node: any, nodeChild: any, nodeParent: any, index: number }) => {

    let cloneNode: any = node
    let cloneNodeChild: any = nodeChild
    let cloneNodeParent: any = nodeParent

    gsap.timeline()
      .set(cloneNodeParent as HTMLDivElement, { zIndex: index })
      .set(cloneNode, { ...propsGsapTransitionPage.pathBot })
      .set(cloneNodeChild as HTMLDivElement, {
        ...propsGsapTransitionPage.pageEnter_tranform,
        ...propsGsapTransitionPage.brightness100,
      })
      .to(cloneNode as HTMLDivElement, {
        ...propsGsapTransitionPage.pathOpen,
        ...propsGsapTransitionPage.config
      })
      .to(cloneNodeChild as HTMLDivElement, {
        ...propsGsapTransitionPage.pageDefault,
        ...propsGsapTransitionPage.brightness100,
        ...propsGsapTransitionPage.config
      }, '<')

  })

  const exitPage = contextSafe(({ nodeChild }: { nodeChild: HTMLDivElement }) => {

    let cloneNode: any = nodeChild

    gsap.timeline()
      .set(cloneNode as HTMLElement, {
        ...propsGsapTransitionPage.brightness100,
      })
      .to(cloneNode as HTMLElement, {
        ...propsGsapTransitionPage.pageExit_tranform,
        ...propsGsapTransitionPage.brightness16,
        ...propsGsapTransitionPage.props_exitAnim
      });

  })

  const getContentDomReference = useMemo(() => {
    const PageContentRef = (state: string) => {
      let ContentDomReference = null;
      switch (pathName) {
        case '/':
          case '/home':
            ContentDomReference = AllModules.HomePage;
            break;
          case '/about':
            ContentDomReference = AllModules.AboutPage;
            break;
          case '/contact':
            ContentDomReference = AllModules.ContactPage;
            break;
          case '/service':
            ContentDomReference = AllModules.ServicePage;
            break;
          case '/sustainability':
            ContentDomReference = AllModules.SustainabilityPage;
            break;
          case '/work':
            ContentDomReference = AllModules.WorkPage;
            break;
          case '/work/work1':
            ContentDomReference = AllModules.Project1;
            break;
          case '/work/work2':
            ContentDomReference = AllModules.Project2;
            break;
          case '/work/work3':
            ContentDomReference = AllModules.Project3;
            break;
          case '/work/work4':
            ContentDomReference = AllModules.Project4;
            break;
          default:
            return <h1>404 Page</h1>;
      }
      return (
        <PageTransitionWrapper state={state}>
          <div id='wrapper_this'  >

            <ContentDomReference/>
          </div>
        </PageTransitionWrapper>
      );
    };
    PageContentRef.displayName = 'PageContentRef';
    return PageContentRef;
  }, [pathName]);

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
              
              // --^^ console.log(`%c STATE ==> onEnter`,"color:black;font-weight:bold;font-weight:bold")
              document.body.style.pointerEvents = 'none'
              document.body.style.userSelect = 'none'
              targetPath.current = transitionKey
              if (!listUrlProjects.includes(transitionKey)) {
                enterPage({
                  node: node.children[0],
                  nodeChild: node.children[0].children[0],
                  nodeParent: node,
                  index: indexRef.current++
                })
              } else {
                if (currentPath.current && currentPath.current !== '/work' && !listUrlProjects.includes(currentPath.current)) {

                  enterPage({
                    node: node.children[0],
                    nodeChild: node.children[0].children[0],
                    nodeParent: node,
                    index: indexRef.current++
                  })


                } else {
                  //set page type 2 thành index lớn và return thành nhỏ hơn 100 trong entered
                  node.style.zIndex = 444
                  node.children[0].style.clipPath = 'none'
                }

              }
            }}
            onEntered={(node: any) => {
              // --^^ console.log(`%c STATE ==> onEntered`,"color:black;font-weight:bold;font-weight:bold")
              document.body.style.pointerEvents = 'auto'
              document.body.style.userSelect = 'auto'
              // nên set 1 state tại đây , là cần thiết
              setStateTransition('entered')
              currentPath.current = pathName
              // tạm thời return index < 100 với các page type 2
              if (targetPath.current) {
                if (listUrlProjects.includes(targetPath.current)) {
                  node.style.zIndex = 70
                }
              }

            }}
            onExit={(node: any) => {
              // --^^ console.log(`%c STATE ==> onExit`,"color:black;font-weight:bold;font-weight:bold")
              if (targetPath.current) {
                if (!listUrlProjects.includes(targetPath.current)) {
                  exitPage({ nodeChild: node.children[0].children[0] })
                } else {

                  if (currentPath.current !== '/work') {
                    // --^^ console.log("EXIT from page not is work")
                    exitPage({ nodeChild: node.children[0].children[0] })
                  }
                }
              }
            }}
          >
            {state => getContentDomReference(state)}
          </Transition>

        </TransitionGroup>
      </PageTransitionGroup>
    </div>



  );
}

export default PageTransition;