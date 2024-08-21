"use client"

import Lenis from '@studio-freight/lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { isMobile } from '@Utils/responsive';
import { usePathname } from 'next/navigation';
import useStoreZustand from '@Hooks/useStoreZustand';
import { useEffect, useRef, useState } from 'react';
import { removeSplash } from '@Utils/removeSplash'


export function useInitLenis({ firstLoad }: { firstLoad?: boolean }) {
  console.log("useInitLenis--OutRound")
  const pathName = usePathname()
  const pathNameFormat = removeSplash({ pathName: pathName })
  const { stateTransition } = useStoreZustand()
 
  useEffect(() => {
    // some condition
    if (!firstLoad) return
    if ( pathName === '/work' || pathName === '/3d') return


    console.log("useInitLenis--OnRound!!!!")
    gsap.registerPlugin(ScrollTrigger)
    let timeoutId: NodeJS.Timeout;
    let lenisRef: Lenis | null
    let domWrapper: HTMLElement| null;
    let domScroll: HTMLElement| null;
    let ButtonNavbar: HTMLElement | null;
    let NavbarDeskop: HTMLElement | null;
    const flag = 1220;
    if (stateTransition == 'entered' || stateTransition == 'none') {
      console.log("INIT LENIS---")
      domWrapper = document.getElementById(`wrapper_this`)
      domScroll = document.getElementById(`${pathNameFormat}page`)
      ButtonNavbar = document.getElementById("button_menu")
      NavbarDeskop = document.getElementById("navbar_deskop")

      if (!domScroll) return
      if (!NavbarDeskop || !ButtonNavbar) {
        console.error('PageTransition>>Menu references are not correct');
        return;
      }

      

      // NavbarDeskop.style.display = `block`;
      // ButtonNavbar.style.display = `none`;
    
      NavbarDeskop.style.opacity = `1`;
      ButtonNavbar.style.opacity = `0`;
      NavbarDeskop.style.pointerEvents = `auto`;
      ButtonNavbar.style.pointerEvents = `none`;

      lenisRef = new Lenis({
        wrapper:domScroll as HTMLElement,
        lerp: 0.086,
        syncTouch:true,
      })


      lenisRef.stop()
      if(isMobile()) {
        NavbarDeskop.style.display = `none`;
        ButtonNavbar.style.display = `flex`;
      }
      lenisRef.on('scroll', ({ scroll }: { scroll: number }) => {
      
        if (NavbarDeskop && ButtonNavbar && !isMobile()) {
      
          if (scroll > flag) {
            NavbarDeskop.style.opacity = `0`;
            ButtonNavbar.style.opacity = `1`;
            NavbarDeskop.style.pointerEvents = `none`;
            ButtonNavbar.style.pointerEvents = `auto`;
          } else if (scroll <= flag ) {
            NavbarDeskop.style.opacity = `1`;
            ButtonNavbar.style.opacity = `0`;
            NavbarDeskop.style.pointerEvents = `auto`;
            ButtonNavbar.style.pointerEvents = `none`;
          }
        }
      });


      lenisRef.on('scroll', ScrollTrigger.update)

      gsap.ticker.add(update)
  //    ScrollTrigger.defaults({ scroller: domScroll });


      timeoutId = setTimeout(() => {
        window.lenis = lenisRef;
        window.lenis?.start()
        ScrollTrigger.refresh()
      }, 1000)

    }
    function update(time: number) {
      lenisRef?.raf(time * 1420);

    }
    gsap.ticker.lagSmoothing(0)
    return () => {
      console.log("clear ref lenis")
      if (lenisRef) {
        lenisRef.destroy()
        gsap.ticker.remove(update)

      }
      if (timeoutId) {
        clearTimeout(timeoutId)
      }
      lenisRef = null
      window.lenis = null
      domScroll = null
      NavbarDeskop = null
      NavbarDeskop = null

    }
  }, [stateTransition, firstLoad, pathName, pathNameFormat])
  return null;
}
