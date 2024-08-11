
import React, { useMemo, useEffect, useRef, useState, useCallback } from 'react';
import { Transition, TransitionGroup } from 'react-transition-group';

import PageTransitionGroup from './PageTransitionGroup';
import PageTransitionWrapper from './PageTransitionWrapper';


import { usePathname } from 'next/navigation';


import HomePage from '@Modules/HomePage';
import AboutPage from '@Modules/AboutPage';
import ContactPage from '@Modules/ContactPage';
import WorkPage from '@Modules/WorkPage';
import Project1 from '@Modules/Project1';
import Project2 from '@Modules/Project2';
import Project3 from '@Modules/Project3';
import Project4 from '@Modules/Project4';


import { removeSplash } from '@Utils/removeSplash'
import { isMobile } from '@Utils/responsive';
import useStoreZustand from '@Hooks/useStoreZustand';
import { useInitLenis } from '@Hooks/lenis/useInitLenis';
import { propsGsap } from "@Constants/gsap_props"
import { gsap } from "gsap"
import { useGSAP } from '@gsap/react';
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

  console.log("##############   PageTransition render")
  const pathName = usePathname()
  const pathNameFormat = removeSplash({ pathName: pathName })
  const listUrlProjects = ['/work/work1', '/work/work2', '/work/work3', '/work/work4'];
  const timeTransition = 1.5
  const indexRef = useRef(100)
  const scopeRef = useRef(null)

const { setStateTransition } = useStoreZustand()
  const transitionKeyRef = useRef<string | null>(null)
  const currentKeyRef = useRef<string | null>(null)
  const isWorkPage = useRef<boolean>(false)
  const [firstLoadPage, setFirstLoadPage] = useState(false);

  const {contextSafe} = useGSAP({scope:scopeRef})
  useEffect(() => {

    transitionFirst(pathNameFormat)
    setFirstLoadPage(true)
  }, [])

  useInitLenis({
    firstLoad: firstLoadPage
  });

  function transitionFirst(pn: string) {
    console.log("Enter page ================>")

    const this_page = document.getElementById(`${pn}page`)
    enterPage({
      node: this_page?.parentElement,
      nodeChild: this_page,
      nodeParent: this_page,
      index: 10
    })
  setStateTransition('entered')
  currentKeyRef.current = pathName
  }

  const enterPage = contextSafe(({ node, nodeChild, nodeParent, index }: { node: any, nodeChild: any, nodeParent: any, index: number }) => {
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
        gsap.set(cloneNodeChild as HTMLDivElement, { clearProps: 'all' }); 
        cloneNodeChild = null;
      }
    };
  })

  const exitPage = contextSafe(({ nodeChild }: { nodeChild: HTMLDivElement }) => {
    //gsap will be run on here
    let cloneNode: any = nodeChild
    let timeline: any
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
      if (cloneNode) {
        gsap.set(cloneNode as HTMLDivElement, { clearProps: 'all' });
        cloneNode = null
      }
    };
  })

  const getContentDomReference = useMemo(() => {
    const PageContentRef = (state: string) => {
      let contentDomReference = null;
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
        case '/work/work1':
          contentDomReference = <Project1 />;
          break;
        case '/work/work2':
          contentDomReference = <Project2 />;
          break;
        case '/work/work3':
          contentDomReference = <Project3 />;
          break;
        case '/work/work4':
          contentDomReference = <Project4 />;
          break;
        default:
          return <h1>404 Page</h1>;
      }
      return (
        <PageTransitionWrapper state={state}>
          <div id='wrapper_this'  >

            {contentDomReference}
          </div>
        </PageTransitionWrapper>
      );
    };
    PageContentRef.displayName = 'PageContentRef';
    return PageContentRef;
  }, [pathName]);

  return (
    <div ref={scopeRef}>
      <PageTransitionGroup>
        <TransitionGroup component={null}>
          <Transition
            key={transitionKey}
            timeout={timeTransition * 1000}
            unmountOnExit={true}

            onEnter={(node: any) => {
              document.body.style.pointerEvents = 'none'
              document.body.style.userSelect = 'none'
              transitionKeyRef.current = transitionKey
      
              if (!listUrlProjects.includes(transitionKey) ) {
                enterPage({
                  node: node.children[0],
                  nodeChild: node.children[0].children[0],
                  nodeParent: node,
                  index: indexRef.current++
                })
              } else {
                if(currentKeyRef.current && currentKeyRef.current !== '/work' && !listUrlProjects.includes(currentKeyRef.current)) {
                
                    enterPage({
                      node: node.children[0],
                      nodeChild: node.children[0].children[0],
                      nodeParent: node,
                      index: indexRef.current++
                    })
                 
                  
                }else{
                  //set page type 2 thành index lớn và return thành nhỏ hơn 100 trong entered
                  node.style.zIndex = 444
                  node.children[0].style.clipPath = 'none'
                }
           
              }

            }}
            onEntered={(node: any) => {
              document.body.style.pointerEvents = 'auto'
              document.body.style.userSelect = 'auto'
              // nên set 1 state tại đây , là cần thiết
              setStateTransition('entered')
              currentKeyRef.current = pathName
              // tạm thời return index < 100 với các page type 2
              if(transitionKeyRef.current) {
                if (listUrlProjects.includes(transitionKeyRef.current)) {
                  node.style.zIndex = 70
                }
              }
             
            }}
            onExit={(node: any) => {
              if(transitionKeyRef.current) {
                if (!listUrlProjects.includes(transitionKeyRef.current)) {
                  exitPage({ nodeChild: node.children[0].children[0] })
                }else{
             
                  if(currentKeyRef.current !== '/work'){
                    console.log("EXIT from page not is work")
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