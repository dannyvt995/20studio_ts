"use client"

import gsap from 'gsap';
import { useEffect, useRef } from 'react';
import { removeSplash } from '@/utils/removeSplash'
import { usePathname,useRouter } from 'next/navigation'
import useStoreZustand from '../useStoreZustand';
import { propsGsapNavbar } from '@/constants/gsap_props';




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

    // --^^ console.log("%cHOOK NAVBAR MODAL Running","color:orange")
    let Timeline: any = null
   // let NavbarDeskop: any = null
   // let ButtonMenu: any = null
    let DomContent: any = null


 
    
    // có vấn đề ở d09a6y ,
    // hook này luôn phải chạy khi path change vì phải có dom content
    // => timeline và window ko dc clean
    useEffect(() => {
   
        if(stateTransition !== 'entered') return
        if(!stateEnterPage) return
        // --^^ console.log("%c=>>HOOK NAVBAR Running Update!!!!!","color:orange;font-weight:bold")
        // update DomContent when path change
       // NavbarDeskop = document.getElementById(`navbar`)
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
                        // --^^ console.log("KILL IT NOW====))))))))))")
                        this.kill(); 
                    }
                }, */
                rotate: 7,
                scale: 1.1,
                y: window.innerHeight / 3,
                ...propsGsapNavbar.props_openNav
            }, '<')
            .to(MaskRef, {
                clipPath: 'polygon(0% 0%, 100% 0%, 100% 110%, 0% 100%)',
                ...propsGsapNavbar.props_openNav
            }, '<')
            .to(DomEffect, {
                rotate: 0,
                scale: 1,   
                y: 0,
              
                ...propsGsapNavbar.props_openNav
            }, '<')
            Timeline.reverse();
            window.timelineNavbarModal = Timeline
            return () => {

                DomContent = null
            }
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
    };



}
