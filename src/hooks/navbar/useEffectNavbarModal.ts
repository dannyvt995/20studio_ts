"use client"

import gsap from 'gsap';
import { useEffect, useRef } from 'react';
import { removeSplash } from '@/utils/removeSplash'
import { usePathname,useRouter } from 'next/navigation'
import useStoreZustand from '../useStoreZustand';


const propsGsap = {
    props_openNav: {
        duration: 1,
        ease: "power3.inOut"
    },
    props_CloseNav: {
        duration: 1,
        ease: "power3.out"
    },
    props_Filter_Light: {
        '-webkit-filter': 'brightness(100%)',
        filter: 'brightness(100%)',
    },
    props_Filter_Shadow: {
        '-webkit-filter': 'brightness(16%)',
        filter: 'brightness(16%)',
    }
}

interface Props {
    btnMenu?: any;
    stateTransition?: string;
    SectionRef: any;
    MaskRef: any;
    DomEffect: any;
    SliderImage: any;
    pathNameFormat?: string;
    listBtnRedirect: any,

}
export const useEffectActive_NavbarModal = (
    { btnMenu, listBtnRedirect, SectionRef, MaskRef, DomEffect, SliderImage }: Props
) => {
    const pathName = usePathname()
    const pathNameFormat = removeSplash({ pathName: pathName })
    const router = useRouter()
    const {stateTransition} = useStoreZustand()

    console.log("HOOK NAVBAR MODAL...")
    let Timeline: any = null
    let NavbarDeskop: any = null
    let ButtonMenu: any = null
    let DomContent: any = null


 
   
    useEffect(() => {
        if(stateTransition !== 'entered') return
        console.log("NEED 1 time ++++++HOOK NAVBAR MODAL...")
        // update DomContent when path change
        NavbarDeskop = document.getElementById(`navbar`)
        DomContent = document.getElementById(`${pathNameFormat}page`)
        
      /*   ButtonMenu = document.getElementById(`button_menu`)
        if (ButtonMenu) ButtonMenu.addEventListener("click", handleClickMenu); */
        Timeline = gsap.timeline({
            paused: true,
            onComplete: () => {
                gsap.set(SectionRef, { pointerEvents: 'auto' })
            }
        });
        Timeline.set(SectionRef, { zIndex: 500, pointerEvents: 'none' })
            .set(MaskRef, { clipPath: 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)' })
            .set(DomEffect, {
                rotate: -5,
                scale: 1.72,
                y: -window.innerHeight / 2,
            })
            .to(DomContent, {
                rotate: 5,
                scale: 1.1,
                y: window.innerHeight / 3,
                ...propsGsap.props_openNav
            }, '<')
            .to(MaskRef, {
                clipPath: 'polygon(0% 0%, 100% 0%, 100% 110%, 0% 100%)',
                ...propsGsap.props_openNav
            }, '<')
            .to(DomEffect, {
                rotate: 0,
                scale: 1,   
                y: 0,
                ...propsGsap.props_openNav
            }, '<').reverse();
            window.timelineNavbar = Timeline
            return () => {
             /*    ButtonMenu.removeEventListener("click", handleClickMenu);
                ButtonMenu = null */
            }
    }, [pathName,SliderImage,SectionRef,MaskRef,DomEffect])

    // listBtnRedirect.forEach((item:any) => {
    //     item.addEventListener('click', (e:any) => {
    //         e.preventDefault();
    //         const linkTarget = (e.currentTarget as HTMLAnchorElement).dataset.link;
    
    //         if (linkTarget === pathNameFormat) return;
      
    //         if(window.timelineNavbar) window.timelineNavbar.reversed(!window.timelineNavbar.reversed());
    //         router.push(`${linkTarget}`);
    //     });
    // });



   
    /* const handleClickMenu = () => {
        if(window.timelineNavbar) window.timelineNavbar.reversed(!window.timelineNavbar.reversed());
    
    }; */

   
    return () => {
        Timeline.kill()
        Timeline = null
        NavbarDeskop = null
       
        DomContent = null
    };



}
