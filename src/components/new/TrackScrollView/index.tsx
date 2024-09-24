import React, { useEffect, useRef } from 'react'
import s from './style.module.css'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { isMobile } from '@/utils/responsive'

export default function TrackScrollView() {
    //^^console.log("TrackScrollView re-render")
    const container = useRef<HTMLDivElement>(null)
    const hasLogged = useRef<boolean>()
   
    // useGSAP(() => {
        
    //     if (isMobile()) return
    //     gsap.timeline({
    //         scrollTrigger: {
    //             scroller: mappingScroller[scroller],
    //             trigger: container.current,
    //             start: "top top ",
    //             end: "bottom 0%",
    //             onUpdate: (self) => {
    //                 const progress = self.progress;
                   
    //                 if (progress >= 0.5 && !hasLogged.current) {
                
    //                     setStateNavbarList(true)
    //                     setStateButtonNav(false)
    //                     hasLogged.current = true; 
    //                 }

            
    //                 if (progress < 0.5 && hasLogged.current) {
    //                     setStateNavbarList(false)
    //                     setStateButtonNav(true)
    //                     hasLogged.current = false; 
    //                 }
    //             },
    //             markers:true,
    //             scrub: true,
    //         },
    //         paused: true
    //     })
    // })

 
  return (
    <div className={s.track} ref={container}></div>
  )
}
