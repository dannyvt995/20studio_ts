"use client"
import { useEffect, useRef } from 'react'
import s from './style.module.css'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react';
import { isMobile } from '@/utils/responsive';

interface ISectionTitleBlend {
    propsForGsap: any
}

export default function SectionTitleBlend({ propsForGsap }: ISectionTitleBlend) {
    const TriggerSection = useRef(null)
    const DomEffect = useRef(null)
    // x 0% > 20%

    useGSAP(() => {
        if (isMobile()) return

        if (propsForGsap.stateTransitionPage === 'entered') {
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
    }, { dependencies: [propsForGsap.stateTransitionPage] })


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
