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



  useGSAP(() => {
    if (stateEnterPage) return
    console.log('%cFire anim loading page', 'color: red;font-weight:bold;text-decoration: underline')

    gsap.timeline({
      onComplete: () => {
        setTimeout(() => {
          setStateEnterPage()
        }, 700);

        setTimeout(() => {
          gsap.set(container.current, { delay: 1.2, opacity: 0 })
          console.log('%c///// END anim loading page, disable this', 'color: red;font-weight:bold;text-decoration: underline')
        }, 1200)
      }
    })/* .to(`.${s.progressBar}`, {
      x: `100%`,
      duration: 1
    },"<") */.to(`.${s.logo}`, {
  
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      duration: 1
    },"<")
  }, { scope: container })


  return (
    <div className={s.loadingPage} ref={container}>
  {/*     <div className={s.progressBar} /> */}
      <div className={s.logo}>20 Studio</div>
    </div>
  )
}

export default memo(LoadingPage);
