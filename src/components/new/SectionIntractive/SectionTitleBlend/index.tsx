"use client"
import { useEffect, useRef } from 'react'
import s from './style.module.css'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger';

interface ISectionTitleBlend {
    propsForGsap:any
}

export default function SectionTitleBlend({ propsForGsap }:ISectionTitleBlend) {
    const WrapperTitleBlendRed = useRef(null)
    const timelineRef = useRef(null)
    // x 0% > 20%
/*     useEffect(() => {
        if (propsForGsap.stateTransitionPage === 'entered') {
            if (window.innerWidth < 620) return
            gsap.registerPlugin(ScrollTrigger)
            console.log("\t\t=>Reinit/init scrolltriggle on component SectionTitleBlend")

            const ctx = gsap.context(() => {
                timelineRef.current = gsap.timeline({
                    scrollTrigger: {
                        scroller: propsForGsap.scrollerRef,
                        trigger: WrapperTitleBlendRed.current,
                        start: "top bottom",
                        end: "bottom top",
                        scrub: .95
                    }
                })
                timelineRef.current.fromTo(WrapperTitleBlendRed.current.children[0].children[0],{
                    x:"60%"
                },
                {
                    x: "-60%"
                })
                return () => {
                    ctx.revert();
                   
                }
            });

        }else{
            console.log("\t\t=>Lock Gsap until onEnterd",propsForGsap.scrollerRef)
        }
       
        return () => {
            timelineRef.current?.kill()
            timelineRef.current = null
        }
    }, [propsForGsap]) */
    return (
        <div className={s.section_title_blend} ref={WrapperTitleBlendRed}>
             <div className={s.warpper_title}>
                <div className={s.title} >
                        Forever Upwards Fover Alone
                </div>
             </div>
        </div>
    )
}
