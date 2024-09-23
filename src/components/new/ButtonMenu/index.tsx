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
  const [isMobi, setIsMobi] = useState(false)
  const mainNavbar = useRef<any>(null)




  useEffect(() => {
    if (isMobile()) setIsMobi(true)
    mainNavbar.current = document.getElementById("main_navbar")

  }, [])



  const handleClickMenu = contextSafe(() => {

    isMenuOpen.current = !isMenuOpen.current

    mainNavbar.current.style.pointerEvents = 'auto'
    timelineStore['navbarModal']?.reversed(!timelineStore['navbarModal'].reversed());
    timelineStore['buttonNavbar']?.reversed(!timelineStore['buttonNavbar'].reversed());
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
        <span className={s.lable_item}>Menu</span>
        <span className={s.lable_item}>Close</span>
      </h3>
      <div className={s.icon}>
        <svg viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg" className={s.icon_burger}>
          <line x1="18" y1="0.6" y2="0.6" stroke="currentColor" stroke-width="1.2"></line>
          <line x1="18" y1="5.7167" y2="5.7167" stroke="currentColor" stroke-width="1.2"></line>
          <line x1="18" y1="10.8334" y2="10.8334" stroke="currentColor" stroke-width="1.2"></line>
        </svg>
        <svg viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className={s.icon_close}>
          <line x1="13.788" y1="1.28816" x2="1.06011" y2="14.0161" stroke="currentColor" strokeWidth="1.2" style={{ strokeDashoffset: '0', strokeDasharray: 'none' }}></line>
          <line x1="1.06049" y1="1.43963" x2="13.7884" y2="14.1675" stroke="currentColor" strokeWidth="1.2" style={{ strokeDashoffset: '0', strokeDasharray: 'none' }}></line>
        </svg>
      </div>
    </button>

  )
}

export default ButtonMenu