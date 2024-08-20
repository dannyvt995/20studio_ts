"use client"

import React, { useRef, memo, useEffect } from 'react'
import s from './style.module.css'
import useStoreZustand from '@/hooks/useStoreZustand'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
gsap.registerPlugin(useGSAP)

function LoadingPage() {
  console.log('%cLoadingPage_Render!', 'color: red;')

  const container = useRef<HTMLDivElement>(null)
  const { stateEnterPage,setStateEnterPage } = useStoreZustand()

// const timeTransition = 1.456
// const easeTransition = "power3.inOut"

  useGSAP(() => {
    if (stateEnterPage) return
    console.log('%cFire anim loading page', 'color: red;font-weight:bold;text-decoration: underline')

    gsap.timeline({
      onComplete: () => {
       setStateEnterPage()
       gsap.to(`.${s.logo}`,{delay:.3,scale:.2,duration:1.345})
        setTimeout(() => {
          gsap.set(container.current, { delay: 1.2, opacity: 0 })
          console.log('%c///// END anim loading page, disable this', 'color: red;font-weight:bold;text-decoration: underline')
        }, 1200)
      }
    }).to(`.${s.progressBar}`, {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      duration: 1.2,
      ease:"power3.inOut"
    },"<")
  }, { scope: container })


  return (
    <div className={s.loadingPage} ref={container}>
      
      <div className={s.mask}>
        <div className={s.logo}>
          <span className={s.brand}>20 Studio</span>
          <div className={s.progressBar} />
        </div>
        <p className={s.quote}>From vision to reality</p>
      </div>
    </div>
  )
}

export default memo(LoadingPage);
