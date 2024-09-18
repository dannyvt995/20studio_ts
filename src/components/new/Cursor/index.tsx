"use client"
import React, { useEffect, useRef } from 'react'
import s from './style.module.css'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import useStoreZustand from '@/hooks/useStoreZustand';

export default function Cursor() {
    const cursorRef = useRef<HTMLDivElement>(null)
    const {stateCursor,stateEnterPage} = useStoreZustand()
    const { contextSafe } = useGSAP({ scope: cursorRef }); 

    const timelineDisplayCursor = useRef<gsap.core.Timeline>()
   
    useEffect(() => {
        let xTo = gsap.quickTo(cursorRef.current, "x", { duration: 0.4, ease: "power3" }),
        yTo = gsap.quickTo(cursorRef.current, "y", { duration: 0.4, ease: "power3" });
        const onMouseMove = contextSafe((e:any) => {
            
            xTo(e.pageX);
            yTo(e.pageY);
        });

        if(cursorRef.current)  window.addEventListener('mousemove', onMouseMove);
        return () => {
            if(cursorRef.current)  window.removeEventListener('mousemove', onMouseMove);

        }
    },[])
    



    useGSAP(() => {
        if(stateEnterPage) {
            if(stateCursor) {
                gsap.to(cursorRef.current,{
                    scale:0,
                      duration : .7,
                    ease: "expo.out"
                })
            }else{  
                gsap.to(cursorRef.current,{
                    scale:1,
                      duration : .7,
                    ease: "expo.out"
                })
            }

        }
       

    },{dependencies:[stateCursor,stateEnterPage]})

    return (
        <div id='cursor' className={s.cursor} ref={cursorRef}>
            <div className={s.inner}>Scroll</div>
        </div>
    )
}
