"use client"

import  {  memo, useEffect, useRef, useState } from 'react'
import s from './style.module.css'
import gsap from 'gsap'
import cn from 'classnames';
import useStoreZustand from "@/hooks/useStoreZustand";

import { usePathname } from 'next/navigation'

import { useEffectActive_NavbarModal } from '@/hooks/navbar/useEffectNavbarModal'

import { removeSplash } from '@/utils/removeSplash'
import ButtonHoverNew from '../ButtonHoverNew'

import { propsGsapNavbar } from '@/constants/gsap_props';
import { isMobile } from '@/utils/responsive'
import WrapperTrackMouse from '../WrapperTrackMouse'

import { useGSAP } from '@gsap/react'
import ViewImgHoverNavbarModal from '../ViewImgHoverNavbarModal'
import useStoreTimeline from '@/hooks/useStoreTimeline'


function NavbarModalSection({ }) {
    const buttonMenuRef = useRef<HTMLButtonElement>(null)
   

   
    const listItemNavbarModal = useRef<HTMLUListElement>(null)
    const navbarModalImages = useRef<Element[]>([])
    const DomEffect = useRef<HTMLDivElement>(null)
    const MaskRef = useRef<HTMLDivElement>(null)
    const SectionRef = useRef<HTMLElement>(null)
    const listBtnRedirectRef = useRef<any>([])
    // const [stateToggle,setStateToggle] = useState<boolean>(false)
    const pathName = usePathname()
    const pathNameFormat = removeSplash({ pathName: pathName })
    const setTimeline = useStoreTimeline((state) => state.setTimeline);
    const {stateTransition,stateEnterPage,stateUrl} = useStoreZustand()

  

    console.log('render')

    useEffectActive_NavbarModal({
        btnMenu: buttonMenuRef.current,
        SectionRef: SectionRef.current,
        MaskRef: MaskRef.current,
        DomEffect: DomEffect.current,
        listItemNavbarModal:listItemNavbarModal.current,
        pathNameFormat: pathNameFormat,
       
    })


    // const DomContentRef = useRef<any>()
    // const timelineNavbarModal = useRef<gsap.core.Timeline>()


    // useEffect(() => {
    //     console.log(stateUrl)
    //     if(stateUrl.isCurrent === stateUrl.isTarget) return
     
    //     console.log(" DomContentRef.current Run exacly 1 time")
    //     // let TargetListChild = []
     
    //     // let TargetList  =  Array.from(listItemNavbarModal.current.children).slice(0,5)
    //     // for (let i = 0; i < TargetList.length; i++) {
    //     //     TargetListChild.push(TargetList[i].children[0]) 
    //     // }
    //     // TargetListChild = [...TargetListChild].reverse();

    // },[pathNameFormat,stateUrl])


    // useEffect(() => {
   
    //     if(stateTransition !== 'entered') return
    //     if(!stateEnterPage) return
    //     if(!SectionRef.current || !MaskRef.current || !DomEffect.current || !DomContentRef.current) return
   
    //     if(stateUrl.isCurrent === stateUrl.isTarget || stateUrl.isTarget === 'none') return
    //     console.log(" timelineNavbarModal Run exacly 1 time")
    //     DomContentRef.current = document.getElementById(`${pathNameFormat}page`)
    //     timelineNavbarModal.current = gsap.timeline({
    //         paused: true,
    //         onComplete: () => {
    //             gsap.set(SectionRef.current, { pointerEvents: 'auto' })
    //         }
    //     }).set(SectionRef.current, { zIndex: 500, pointerEvents: 'none' })
    //         .set(MaskRef.current, { clipPath: 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)' })
    //         .set(DomEffect.current, {
    //             rotate: -5,
    //             scale: 1.72,
    //             y: -window.innerHeight / 2,
    //         })
    //         .to(DomContentRef.current, {
    //             rotate: 4.2,
    //             scale: 1.36,
    //             y: window.innerHeight / 2,
    //             '-webkit-filter': 'brightness(16%)',
    //             filter: 'brightness(16%)',
    //             ...propsGsapNavbar.props_openNav
    //         }, '<')
    //         .to(MaskRef.current, {
    //             clipPath: 'polygon(0% 0%, 100% 0%, 100% 110%, 0% 100%)',
    //             ...propsGsapNavbar.props_openNav
    //         }, '<')
    //         .to(DomEffect.current, {
    //             rotate: 0,
    //             scale: 1,   
    //             y: 0,
    //             '-webkit-filter': 'brightness(100%)',
    //             filter: 'brightness(100%)',
    //             ...propsGsapNavbar.props_openNav
    //         }, '<')
    //         // .fromTo(TargetListChild,{
    //         //     delay: 4.7,
    //         //     y : "120%"
    //         // },{delay: .5,y:0,stagger:0.036,ease:"power3.inOut"},"<")
    //         timelineNavbarModal.current.reverse();
    //         setTimeline('navbarModal', timelineNavbarModal.current);
    //         return () => {
    //             if(timelineNavbarModal.current) timelineNavbarModal.current.kill()
    //         }
    // }, [pathName,stateUrl,SectionRef.current,MaskRef.current,DomEffect.current,DomContentRef.current,stateEnterPage,stateTransition])

    return (
   

            <section className={s.navbar_modal_section} ref={SectionRef}>
                <div className={s.wrapper} ref={MaskRef}>
              
                
                    <div className={s.container} ref={DomEffect}>
                   
                        <div className={s.logo}>
                            20 STUDIO
                        </div>
                       {/*  {isMobi ? <></> : <ViewImgHoverNavbarModal classAdd={s.images}/>} */}
                        <ul className={s.main} id='main_navbar' ref={listItemNavbarModal}>
                            <li className={s.main_link}>
                                <ButtonHoverNew btnNavbar={true} data_id={0} targetRedirect='/home' classAdd={s.main_line}>
                                    Home
                                </ButtonHoverNew>

                            </li>
                            <li className={s.main_link}>
                                <ButtonHoverNew btnNavbar={true} data_id={1} targetRedirect='/work' classAdd={s.main_line}>
                                    Project
                                </ButtonHoverNew>

                            </li>
                            <li className={s.main_link}>
                                <ButtonHoverNew btnNavbar={true} data_id={2} targetRedirect='/about' classAdd={s.main_line}>
                                    About us
                                </ButtonHoverNew>

                            </li>
                            <li className={s.main_link}>
                                <ButtonHoverNew btnNavbar={true} data_id={3} targetRedirect='/service' classAdd={s.main_line}>
                                    Service
                                </ButtonHoverNew>

                            </li>
                            <li className={s.main_link}>
                                <ButtonHoverNew btnNavbar={true} data_id={4} targetRedirect='/contact' classAdd={s.main_line}>
                                    Contact
                                </ButtonHoverNew>

                            </li>
                            <li className={s.social_link}>
                                <a className={s.link_item}>Linked</a>
                            </li>
                            <li className={s.social_link}>
                                <a className={s.link_item}>Facebook</a>
                            </li>
                            <li className={s.social_link}>
                                <a className={s.link_item}>Instagram</a>
                            </li>
                        </ul>
                        <ul className={s.social}>
                            <li className={s.social_link}>
                               
                                {/*   <ButtonHoverUnderLineNew eventPass={handleClick} data_type="outsite" noName={"var(--font-lh-p)"} data_link="/" classStyle="link-item">Facebook</ButtonHoverUnderLineNew> */}
                            </li>
                            <li className={s.social_link}>
                                {/* <ButtonHoverUnderLineNew eventPass={handleClick} data_type="outsite" noName={"var(--font-lh-p)"} data_link="/" classStyle="link-item">Instagram</ButtonHoverUnderLineNew> */}
                            </li>
                            <li className={s.social_link}>
                                {/*  <ButtonHoverUnderLineNew eventPass={handleClick} data_type="outsite" noName={"var(--font-lh-p)"} data_link="/" classStyle="link-item">Linked</ButtonHoverUnderLineNew> */}
                            </li>
                        </ul>
                        <ul className={s.sub}>
                            <li className={s.sub_link}>
                                <span className={cn(s.link_item, s.is_reel)}>
                                    Made by 20 Team
                                </span>
                            </li>
                            <li className={s.sub_link}>
                                {/*    <ButtonHoverUnderLineNew eventPass={handleClick} data_type="outsite" noName={"var(--font-lh-p)"} data_link="/about" classStyle="link-item">Về chúng tôi</ButtonHoverUnderLineNew> */}
                            </li>
                        </ul>
{/*                         <div className={s.link_about}>

                            <ButtonHoverNew2 icon={<IconSVG src='/icon/arrow-right.svg' />} targetRedirect='/about' classAdd={s.link}>
                                Our mission
                            </ButtonHoverNew2>
                        </div> */}
                    </div>

                </div>
            </section>


    )
}
export default memo(NavbarModalSection)