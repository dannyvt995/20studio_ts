"use client"
import React, { memo, useEffect, useRef,useState,useCallback } from 'react';
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
import { propsGsap } from "@Constants/gsap_props"
import { gsap } from "gsap"
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
  
  const { setStateTransition } = useStoreZustand()
  const transitionKeyRef = useRef<string | null>(null)
  const isWorkPage = useRef<boolean>(false)
  const [firstLoadPage, setFirstLoadPage] = useState(false);


  useEffect(() => {
    setFirstLoadPage(true)
  },[])

  useInitLenis({
    firstLoad:firstLoadPage
  });


  const enterPage = ({node,nodeChild,nodeParent,index}:{node:any,nodeChild:any,nodeParent:any,index:number}) => {
    //gsap will be run on here
    let cloneNode: any = node
    let cloneNodeChild: any = nodeChild
    let cloneNodeParent: any = nodeParent
    let timeline: any

    timeline = gsap.timeline();
    timeline
        .set(cloneNodeParent as HTMLDivElement, { zIndex: index })
        .set(cloneNode, { ...propsGsap.pathBot })
        .set(cloneNodeChild as HTMLDivElement, {
            ...propsGsap.pageEnter_tranform,
            ...propsGsap.brightness100,
        })
        .to(cloneNode as HTMLDivElement, {
            ...propsGsap.pathOpen,
            ...propsGsap.config
        })
        .to(cloneNodeChild as HTMLDivElement, {
            ...propsGsap.pageDefault,
            ...propsGsap.brightness100,
            ...propsGsap.config
        }, '<')

    return () => {
        if (timeline) {
            timeline.kill();
            timeline = null;
        }
        if (cloneNodeParent) {
            cloneNodeParent = null
        }
        if (cloneNodeChild) {
            gsap.set(cloneNodeChild as HTMLDivElement, { clearProps: 'all' }); // Clear all applied properties
            cloneNodeChild = null;
        }
    };
  }
  
  const exitPage = ({nodeChild}:{nodeChild:HTMLDivElement}) => {
    //gsap will be run on here
    let cloneNode : any = nodeChild
    let timeline : any
    timeline = gsap.timeline();

    timeline
        .set(cloneNode as HTMLElement, {
            ...propsGsap.brightness100,
        })
        .to(cloneNode as HTMLElement, {
            ...propsGsap.pageExit_tranform,
            ...propsGsap.brightness16,
            ...propsGsap.props_exitAnim
        });

    return () => {
        if (timeline) {
            timeline.kill();
            timeline = null;
        }
        if(cloneNode) {
            gsap.set(cloneNode as HTMLDivElement, { clearProps: 'all' });
            cloneNode = null
        }
    };
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
              transitionKeyRef.current = transitionKey
              setStateTransition('enter')
              enterPage({
                node: node.children[0],
                nodeChild:node.children[0].children[0],
                nodeParent:node,
                index: indexRef.current++
              })
            }}
            onEntered={(node:any) => {
              setStateTransition('entered')
            }}
            onExit={(node: any) => {
              setStateTransition('exit')
              exitPage({nodeChild:node.children[0].children[0]})
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

export default PageTransition;