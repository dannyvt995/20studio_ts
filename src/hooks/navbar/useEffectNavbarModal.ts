"use client"

import gsap from 'gsap';
import { useEffect, useRef } from 'react';
import { removeSplash } from '@/utils/removeSplash'
import { usePathname,useRouter } from 'next/navigation'
import useStoreZustand from '../useStoreZustand';
import { propsGsapNavbar } from '@/constants/gsap_props';
import useStoreTimeline from '../useStoreTimeline';




interface Props {
    btnMenu?: any;
    stateTransition?: string;
    SectionRef: any;
    MaskRef: any;
    DomEffect: any;
    SliderImage?: any;
    pathNameFormat?: string;
    listBtnRedirect?: any,
    listItemNavbarModal:any

}
export const useEffectActive_NavbarModal = (
    { btnMenu, listItemNavbarModal, SectionRef, MaskRef, DomEffect, SliderImage }: Props
) => {
    const pathName = usePathname()
    const pathNameFormat = removeSplash({ pathName: pathName })
    const setTimeline = useStoreTimeline((state) => state.setTimeline);
    const {stateTransition,stateEnterPage} = useStoreZustand()

    // --^^ console.log("%cHOOK NAVBAR MODAL Running","color:orange")
    let timelineNavbarModal: any = null
    let DomContent: any = null
    let TargetList: any = []
    let TargetListChild: any = []

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
        TargetList  =  Array.from(listItemNavbarModal.children).slice(0,5)
        for (let i = 0; i < TargetList.length; i++) {
            TargetListChild.push(TargetList[i].children[0]) 
        }
        TargetListChild = [...TargetListChild].reverse();
        timelineNavbarModal = gsap.timeline({
            paused: true,
            onComplete: () => {
                gsap.set(SectionRef, { pointerEvents: 'auto' })
            }
        });
        timelineNavbarModal.set(SectionRef, { zIndex: 500, pointerEvents: 'none' })
            .set(MaskRef, { clipPath: 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)' })
            .set(DomEffect, {
                rotate: -5,
                scale: 1.72,
                y: -window.innerHeight / 2,
            })
            .to(DomContent, {
                
         /*        onStart: function() {
                 
                    if (timelineNavbarModal.reversed() === true) {
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
            // .fromTo(TargetListChild,{
            //     delay: 4.7,
            //     y : "120%"
            // },{delay: .5,y:0,stagger:0.036,ease:"power3.inOut"},"<")
            timelineNavbarModal.reverse();
            setTimeline('navbarModal', timelineNavbarModal);
            return () => {
                DomContent = null
                TargetList = []
            }
    }, [pathName,SliderImage,SectionRef,MaskRef,DomEffect,stateEnterPage,stateTransition])
    return () => {
        timelineNavbarModal.kill()
        timelineNavbarModal = null
    }
}
