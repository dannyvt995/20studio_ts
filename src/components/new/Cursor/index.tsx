"use client"
import { memo, useEffect, useRef, useState } from 'react'
import s from './style.module.css'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import useStoreZustand from '@/hooks/useStoreZustand';
import { usePathname } from 'next/navigation';
import {delayFirstLoadAfterLoadingPage} from '@Constants/gsap_props'

function Cursor() {
    const cursorRef = useRef<HTMLDivElement>(null)
    const {stateCursor,stateEnterPage,setStateCursor} = useStoreZustand()
    const { contextSafe } = useGSAP({ scope: cursorRef }); 

    const pathName = usePathname()
    const timelineCursor = useRef<gsap.core.Timeline>()
    const [isPageLoadFirst,setIsPageLoadFirst] = useState('none')

    let timeoutId: NodeJS.Timeout;


    
    useEffect(() => {
      
        timelineCursor.current = gsap.timeline({paused:true}).fromTo(
            cursorRef.current,
            {scale:0,duration:.2,ease: "expo.out"},
            {scale:1,duration:.5,ease: "expo.out"}
        ).reverse()
        return () => {
            if(timelineCursor.current) timelineCursor.current.kill()
        }
    },[])

    useGSAP(() => {
        let xTo = gsap.quickTo(cursorRef.current, "x", { duration: 0.4, ease: "power3" }),
            yTo = gsap.quickTo(cursorRef.current, "y", { duration: 0.4, ease: "power3" });
            const onMouseMove = contextSafe((e:MouseEvent) => {
                xTo(e.pageX);
                yTo(e.pageY);
            });

            window.addEventListener('mousemove', onMouseMove);
            return () => {
                window.removeEventListener('mousemove', onMouseMove);
            }
    })
    
    useEffect(() => {
        setStateCursor({isLock:false})
        if(pathName === '/work') {
            setStateCursor({label:"View"})
        }else{
            setStateCursor({label:"Scroll"})
        }
    },[pathName])

    useEffect(() => {
        if(stateEnterPage && isPageLoadFirst === 'none') {
            setIsPageLoadFirst('isFirst')
            if(isPageLoadFirst)  {
                console.log("Run exacly 1 time")
                timeoutId = setTimeout(() => {
                    timelineCursor.current?.play();
                    setIsPageLoadFirst('endFirst')
                }, delayFirstLoadAfterLoadingPage + 300);
            }
        }
        return () =>  clearTimeout(timeoutId)
    },[stateEnterPage])

    useEffect(() => {
        if(isPageLoadFirst === 'endFirst') {
            if(stateEnterPage) {
                if(stateCursor.isActive || stateCursor.isLock) {
                    timelineCursor.current?.reverse();
                } else {
                    timelineCursor.current?.play();
                }
            }
        }
    },[stateCursor,stateEnterPage,isPageLoadFirst])


    
    return (
        <div id='cursor' className={s.cursor} ref={cursorRef}>
            <div className={s.inner}>{stateCursor.label}</div>
        </div>
    )
}


export default  memo(Cursor)