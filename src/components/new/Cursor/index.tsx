"use client"
import { memo, useEffect, useRef, useState } from 'react'
import s from './style.module.css'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import useStoreZustand from '@/hooks/useStoreZustand';
import {delayFirstLoadAfterLoadingPage} from '@Constants/gsap_props'

function Cursor() {
    const cursorRef = useRef<HTMLDivElement>(null)
    const {stateEnterPage} = useStoreZustand()
    const { contextSafe } = useGSAP({ scope: cursorRef }); 


    const timelineCursor = useRef<gsap.core.Timeline>()
    const timelineCursorOn = useRef<gsap.core.Tween>()
    const timelineCursorOff = useRef<gsap.core.Tween>()
    const [isPageLoadFirst,setIsPageLoadFirst] = useState('none')

    let timeoutId: NodeJS.Timeout;

    const saveStateCursor = useRef<string>('null')
    const [labelName,setLabelName] = useState('Scroll')
    
    
    useEffect(() => {
        timelineCursorOn.current = gsap.to(cursorRef.current,{scale:1,duration:.42,  paused: true  })
        timelineCursorOff.current = gsap.to(cursorRef.current,{scale:0,duration:0.3,  paused: true  })
        timelineCursor.current = gsap.timeline({paused:true}).fromTo(
            cursorRef.current,
            {scale:0,duration:.01,ease: "expo.out"},
            {scale:1,duration:.42,ease: "expo.out"}
        ).reverse()
        return () => {
            if(timelineCursor.current) timelineCursor.current.kill()
                if(timelineCursorOff.current) timelineCursorOff.current.kill()
                    if(timelineCursorOn.current) timelineCursorOn.current.kill()
        }
    },[])

    function trackDom(stt:string,label?:string) {
        
          if(stt === 'active') {
           
            gsap.to(cursorRef.current,{scale:1,duration:.42  })
          }else {
      
            gsap.to(cursorRef.current,{scale:0,duration:.42  })
          }
     
          if(label != null) {
            setLabelName(label)
          }else{
            setLabelName('Scroll')
          }
          saveStateCursor.current = stt
           
    }
    
    useGSAP(() => {
        let xTo = gsap.quickTo(cursorRef.current, "x", { duration: 0.4, ease: "power3" }),
            yTo = gsap.quickTo(cursorRef.current, "y", { duration: 0.4, ease: "power3" });
            const onMouseMove = contextSafe((e:MouseEvent) => {
                xTo(e.pageX);
                yTo(e.pageY);
                
                let el = e.target as any
                let aa = el.getAttribute("data-cursor")
                let bb = el.getAttribute("data-cursorlabel")
                if(aa !== saveStateCursor.current) trackDom(aa,bb)
            
            });
      
      

            window.addEventListener('mousemove', onMouseMove , false);
            return () => {
                window.removeEventListener('mousemove', onMouseMove , false);
            }
    })
   

    useEffect(() => {
        if(stateEnterPage && isPageLoadFirst === 'none') {
            setIsPageLoadFirst('isFirst')
            if(isPageLoadFirst)  {
                //^^console.log("Run exacly 1 time")
                timeoutId = setTimeout(() => {
                    gsap.to(cursorRef.current,{scale:1,duration:.42  })
                    setIsPageLoadFirst('endFirst')
                }, delayFirstLoadAfterLoadingPage + 300);
            }
        }
        return () =>  clearTimeout(timeoutId)
    },[stateEnterPage])




    
    return (
        <div id='cursor' className={s.cursor} ref={cursorRef}>
            <div className={s.inner}>{labelName}</div>
        </div>
    )
}


export default  memo(Cursor)