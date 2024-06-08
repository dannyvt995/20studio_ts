"use client"
import gsap from 'gsap';
import { useState } from 'react';
const propsGsap = {
    props_openNav: {
        duration: 1.2,
        ease: "power3.inOut"
    },
    props_CloseNav: {
        duration: 1.,
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

export const useEffectActive_NavbarModal = (
    { stateActive,SectionRef, MaskRef, DomEffect, SliderImage, pathNameFormat }:
        { stateActive?:boolean,SectionRef: any, MaskRef: any, DomEffect: any, SliderImage: any, pathNameFormat: string }
) => {
    console.log("useEffectActive_NavbarModal")
    let Timeline: any = null
    let Img_MenuModal: any = null
    let NavbarDeskop: any = null
    let ButtonMenu: any = null
    let DomContent: any = null

    NavbarDeskop = document.getElementById(`navbar`)
    ButtonMenu = document.getElementById(`button_menu`)
    DomContent = document.getElementById(`${pathNameFormat}page`)



    init()
    function init() {
        if (SliderImage) Img_MenuModal = Array.from(SliderImage.children)
            Timeline = gsap.timeline({
                paused: true, 
                onComplete:() => {
                  gsap.set(SectionRef, { pointerEvents: 'auto'})
                }
            });
        
            Timeline.set(SectionRef, { zIndex: 500 ,pointerEvents: 'none'})
                .set(MaskRef, { clipPath: 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)' })
                .set(DomEffect, {
                    rotate: -7,
                    scale: 1.72,
                    y: -window.innerHeight / 2,
                })
                .to(DomContent, {
                    rotate: 7,
                    scale: 1.2,
                    y:window.innerHeight / 4,
                    ...propsGsap.props_openNav
                }, '<')
                .to(MaskRef, {
                    clipPath: 'polygon(0% 0%, 100% 0%, 100% 111%, 0% 100%)',
                    ...propsGsap.props_openNav
                }, '<')
                .to(DomEffect, {
                    rotate: 0,
                    scale: 1,
                    y: 0,
                    ...propsGsap.props_openNav
                }, '<').reverse();
  
    }
   
    const handleClickMenu = () => {
        console.log(localStorage.getItem("page_mount"))
        if(localStorage.getItem("page_mount") == 'false') {
      
            localStorage.setItem("page_mount","true")
          
        }
        if(localStorage.getItem("page_mount") == 'true') {
      
            localStorage.setItem("page_mount","false")
          
        }
        Timeline.reversed(!Timeline.reversed());
    };

    if (ButtonMenu) ButtonMenu.addEventListener("click", handleClickMenu);
    return () => {
        Timeline.kill()
        Timeline = null
        NavbarDeskop = null
        ButtonMenu.removeEventListener("click", handleClickMenu);
        ButtonMenu = null
        DomContent = null
    };

}

export const useEffectRedirect_NavbarModal = (
    { MaskRef, DomEffect, SectionRef }: { MaskRef: any, DomEffect: any, SectionRef: any }
) => {
    let MaskClone: any = MaskRef
    let DomContentClone: any = DomEffect
    let Timeline: any = null
    Timeline = gsap.timeline({
        onComplete: () => {
            gsap.set([MaskClone,DomContentClone], { clearProps:"all" })
          gsap.set(SectionRef, { pointerEvents: 'none' })
        }
    })

    Timeline
        .to(MaskClone, {
            clipPath: 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)',
            ...propsGsap.props_CloseNav
        })
        .to(DomContentClone, {
            rotate: -7,
            scale: 1.2,
            y: -window.innerHeight / 2,
            ...propsGsap.props_CloseNav
        }, '<')

    return () => {
        Timeline.kill()
        Timeline = null
        MaskClone = null
        DomContentClone = null
    }
}


