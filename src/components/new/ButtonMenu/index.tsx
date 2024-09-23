"use client"
import React, { memo, useEffect, useRef, useState } from 'react'
import s from './style.module.css'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react';
import useStoreTimeline from '@/hooks/useStoreTimeline';
import { isMobile } from '@/utils/responsive';

function ButtonMenu() {
  const buttonMenuRef = useRef<any>(null)
  const { contextSafe } = useGSAP({ scope: buttonMenuRef })
  const isMenuOpen = useRef<boolean>(false)
  const timelineStore = useStoreTimeline((state) => state.timelines);
  const setTimeline = useStoreTimeline((state) => state.setTimeline);

  const [isMobi, setIsMobi] = useState(false)
  const mainNavbar = useRef<any>(null)

  const iconburgerRef = useRef<SVGSVGElement>(null)
  const iconcloseRef = useRef<SVGSVGElement>(null)
  

  const listOnIconBurger = useRef<any>([])
  const listOnIconClose =  useRef<any>([])
  const lableOpen = useRef<HTMLSpanElement>(null)
  const lableClose = useRef<HTMLSpanElement>(null)

  const timelineOpen = useRef<gsap.core.Timeline>()
  const timelineClose = useRef<gsap.core.Timeline>()



  useEffect(() => {
  
    if (isMobile()) setIsMobi(true)
    
    mainNavbar.current = document.getElementById("main_navbar")

    listOnIconBurger.current = Array.from(iconburgerRef.current?.children  as HTMLCollection)
    listOnIconClose.current = Array.from(iconcloseRef.current?.children  as HTMLCollection)

    timelineOpen.current = gsap.timeline({paused:true,onComplete:() => console.log("timelineOpen COmplete")})
    timelineClose.current = gsap.timeline({paused:true})

    timelineOpen.current.fromTo(lableOpen.current,{
      y:0,
      opacity:1,
      rotate:0
       
      },{
        
        y:'-50%',
        opacity:0,
        rotate:-10,
        duration:.42
      }
    ).to(listOnIconBurger.current, { attr: { x2: 20 } , stagger:.1 },"<");
    
    timelineClose.current
    .set(lableClose.current,{visibility:'visible'})
    .fromTo(lableClose.current,{

      y:'50%',
      opacity:0,
      rotate:10,

      },{
        
        y:0,
        opacity:1,
        rotate:0,
        duration:.42
      }
   )
    .to(listOnIconClose.current, {  strokeDasharray: 0, strokeDashoffset:0, ease: "power2.inOut", stagger:.1  } ,"<");
   
    timelineOpen.current?.reverse()
    timelineClose.current?.reverse()

    setTimeline('btnNavbarOpen',timelineOpen.current)
    setTimeline('btnNavbarClose',timelineClose.current)
  }, [])



  const handleClickMenu = contextSafe(() => {

    isMenuOpen.current = !isMenuOpen.current
    timelineStore['btnNavbarOpen']?.reversed(!timelineStore['btnNavbarOpen'].reversed())
    timelineStore['btnNavbarClose']?.reversed(!timelineStore['btnNavbarClose'].reversed())



    mainNavbar.current.style.pointerEvents = 'auto'
    timelineStore['navbarModal']?.reversed(!timelineStore['navbarModal'].reversed());

    if (isMobile()) return
    if (isMenuOpen.current === true) {
      //    setStateCursor({ isLock: true })

      timelineStore['navbarDesListOff']?.restart().play(0)


    } else {
      //   setStateCursor({ isLock: false })
      timelineStore['navbarDesListOn']?.restart().play(0)

    }

  })


  return (
    <button onClick={handleClickMenu} ref={buttonMenuRef} className={s.button_menu} id="button_menu" >
      <h3 className={s.lable}>
        <span className={s.lable_item} ref={lableOpen}>Menu</span>
        <span className={s.lable_item} ref={lableClose}>Close</span>
      </h3>
      <div className={s.icon}>
        <svg viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg" className={s.icon_burger} ref={iconburgerRef}>
          <line x1="18" y1="0.6" y2="0.6" stroke="currentColor" strokeWidth="1.2"></line>
          <line x1="18" y1="5.7167" y2="5.7167" stroke="currentColor" strokeWidth="1.2"></line>
          <line x1="18" y1="10.8334" y2="10.8334" stroke="currentColor" strokeWidth="1.2"></line>
        </svg>
        <svg viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className={s.icon_close} ref={iconcloseRef}>
          <line x1="13.788" y1="1.28816" x2="1.06011" y2="14.0161" stroke="currentColor" strokeWidth="1.2" style={{ strokeDashoffset: 19, strokeDasharray: 19 }}></line>
          <line x1="1.06049" y1="1.43963" x2="13.7884" y2="14.1675" stroke="currentColor" strokeWidth="1.2" style={{ strokeDashoffset: 19, strokeDasharray: 19 }}></line>
        </svg>
      </div>
    </button>

  )
}

export default ButtonMenu