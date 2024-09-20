"use client"
import {  memo, useRef } from 'react'
import s from './style.module.css'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react';
import { isMobile } from '@/utils/responsive';
import useStoreZustand from '@Hooks/useStoreZustand';

function SectionTitleBlend({ propsForGsap }: {propsForGsap:any}) {
    const container = useRef(null)
   
    const { stateTransition } = useStoreZustand()
    useGSAP(() => {
        if (isMobile()) return

        let timeoutId: NodeJS.Timeout;
        if (stateTransition === 'entered') {
            // --^^ console.log("FooterSection re-render")
            timeoutId = setTimeout(() => {
                gsap.timeline({
                    scrollTrigger: {
                        scroller: propsForGsap.scrollerRef,
                        trigger: container.current,
                        start: "top bottom",
                        end: "bottom top",
                     //   markers:true,
                        scrub: true
                    }
                }).fromTo(`.${s.title}`, {x: "0%"},{x: "-72%"})
            }, propsForGsap.delayForBehindComponent)
        }

        return () => clearTimeout(timeoutId);
    }, { dependencies: [stateTransition] })


    return (
        <div className={s.section_title_blend} ref={container}>
            <div className={s.warpper_title}>
                <div className={s.title}>
                    Design Upwards Fashion
                </div>
            </div>
        </div>
    )
}


export default  memo(SectionTitleBlend)