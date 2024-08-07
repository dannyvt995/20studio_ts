"use client"
import { useEffect, useRef } from 'react'
import s from './style.module.css'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react';
import { isMobile } from '@/utils/responsive';

interface ISectionTitleBlend {
    state?:string,
    propsForGsap: any
}

export default function SectionTitleBlend({ state,propsForGsap }: ISectionTitleBlend) {
    const TriggerSection = useRef(null)
    const DomEffect = useRef(null)

    useGSAP(() => {
        if (isMobile()) return

        if (state === 'entered') {
            gsap.timeline({
                scrollTrigger: {
                    scroller: propsForGsap.scrollerRef,
                    trigger: TriggerSection.current,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: true
                }
            }).fromTo(DomEffect.current, {x: "60%"},{x: "-60%"})
        }
    }, { dependencies: [state] })


    return (
        <div className={s.section_title_blend} ref={TriggerSection}>
            <div className={s.warpper_title}>
                <div className={s.title} ref={DomEffect}>
                    Forever Upwards Fover Alone
                </div>
            </div>
        </div>
    )
}
