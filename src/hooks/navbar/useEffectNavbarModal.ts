"use client"

import gsap from 'gsap';
import { useEffect, useRef } from 'react';
import { removeSplash } from '@/utils/removeSplash'
import { usePathname,useRouter } from 'next/navigation'
import useStoreZustand from '../useStoreZustand';


const propsGsap = {
    props_openNav: {
        duration: 1.123,
        ease: "power3.inOut"
    },
    props_CloseNav: {
        duration: 1.36,
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
    const {stateTransition,stateEnterPage} = useStoreZustand()

    console.log("%cHOOK NAVBAR MODAL Running","color:orange")
    let Timeline: any = null
    let NavbarDeskop: any = null
    let ButtonMenu: any = null
    let DomContent: any = null


 
    
    // có vấn đề ở d09a6y ,
    // hook này luôn phải chạy khi path change vì phải có dom content
    // => timeline và window ko dc clean
    useEffect(() => {
   
        if(stateTransition !== 'entered') return
        if(!stateEnterPage) return
        console.log("%cHOOK NAVBAR Running Update!!!!!","color:orange")
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
                
         /*        onStart: function() {
                 
                    if (Timeline.reversed() === true) {
                        console.log("KILL IT NOW====))))))))))")
                        this.kill(); 
                    }
                }, */
                rotate: 7,
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
            }, '<')
            Timeline.reverse();
            window.timelineNavbarModal = Timeline
           
    }, [pathName,SliderImage,SectionRef,MaskRef,DomEffect,stateEnterPage,stateTransition])

    // listBtnRedirect.forEach((item:any) => {
    //     item.addEventListener('click', (e:any) => {
    //         e.preventDefault();
    //         const linkTarget = (e.currentTarget as HTMLAnchorElement).dataset.link;
    
    //         if (linkTarget === pathNameFormat) return;
      
    //         if(window.timelineNavbarModal) window.timelineNavbarModal.reversed(!window.timelineNavbarModal.reversed());
    //         router.push(`${linkTarget}`);
    //     });
    // });



   
    /* const handleClickMenu = () => {
        if(window.timelineNavbarModal) window.timelineNavbarModal.reversed(!window.timelineNavbarModal.reversed());
    
    }; */

   
    return () => {
        Timeline.kill()
        Timeline = null
        NavbarDeskop = null
       
        DomContent = null
    };



}
