"use client"

import Lenis from '@studio-freight/lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger'
export function useInitLenis({ pathName }: { pathName: string }) {
    console.log("INIT LENIS---")
    let timeoutId: NodeJS.Timeout;
    let lenisRef : Lenis | null
    let domScroll: HTMLElement | null;
    let ButtonNavbar: HTMLElement | null;
    let NavbarDeskop: HTMLElement | null;
    const flag = 1220;
    domScroll = document.getElementById(`${pathName}page`)
    ButtonNavbar= document.getElementById("button_menu")
    NavbarDeskop  = document.getElementById("navbar_deskop")

    if (!domScroll) return
    if (!NavbarDeskop || !ButtonNavbar) {
        console.error('PageTransition>>Menu references are not correct');
        return;
    }
 
    
    NavbarDeskop.style.display = `block`;
    ButtonNavbar.style.display = `none`;
    gsap.registerPlugin(ScrollTrigger)
    lenisRef = new Lenis({
        wrapper: domScroll as HTMLElement,
        lerp:0.05,
        // easing: (t: number) => 1 - Math.pow(1 - t, 2)
    })
    lenisRef.stop()
    lenisRef.on('scroll',({ scroll }:{scroll:number}) => {
     
        if (NavbarDeskop && ButtonNavbar) {
          if (scroll > flag) {
            NavbarDeskop.style.display = `none`;
            ButtonNavbar.style.display = `flex`;
          } else if (scroll < flag) {
            NavbarDeskop.style.display = `block`;
            ButtonNavbar.style.display = `none`;
          }
        }
      });
 

    function update(time: number) {
        lenisRef?.raf(time * 1420);

    }

    gsap.ticker.add(update)
    ScrollTrigger.defaults({ scroller: domScroll });

  
    timeoutId = setTimeout(() => {
        window.lenis = lenisRef;
        lenisRef?.start()
        ScrollTrigger.refresh()
    }, 1000)

    return () => {
        lenisRef?.destroy()
        lenisRef = null
        window.lenis = null
        gsap.ticker.remove(update)
        clearTimeout(timeoutId)
        domScroll = null
        NavbarDeskop = null
        NavbarDeskop = null
    
    }
}
