import React, { useEffect, useRef } from 'react'
import s from './style.module.css'

import gsap from 'gsap'
import { useGSAP } from '@gsap/react';
import ButtonHoverNew from '../ButtonHoverNew';
import { usePathname } from 'next/navigation';
import IconSVG from '@/components/Icon/IconSVG';

gsap.registerPlugin(useGSAP)

export default function NavbarSectionDeskop() {
    
    console.log("NavbarSectionDeskopNavbarSectionDeskopNavbarSectionDeskopNavbarSectionDeskopNavbarSectionDeskop")
    
    const container = useRef<any>()
    const buttonMenuRef = useRef<any>()
    const timelineBtnMenu = useRef<gsap.core.Timeline>()
    const pathName = usePathname()
    useEffect(() => {
        timelineBtnMenu.current = gsap.timeline()
        .fromTo(`.${s.icon}`,{
            rotate:45,
        },{
            rotate:180,
            ease:"power3.inOut",
            duration:.5
        })
        .fromTo(`.${s.lableMenu}`,{
            y:0
        },{
            y:"-100%",
            duration:.5
        },"<")
        .fromTo(`.${s.lableClose}`,{
            y:"100%"
        },{
            y:0,
            duration:.5
        },"<").reverse()
    },[buttonMenuRef])

    useGSAP(() => {
        gsap.to(`.${s.nav_item}`,{
            delay:.5,
            y: 0,
            ease:"power3.out",
            duration:1,
            stagger:.1
        })
    },{scope:container})

    useGSAP(() => {
        let unit = window.innerWidth /100 * 6
        let sv = 0
        let isActive = true
        if(pathName === '/home'){
            sv = 0
        }else if(pathName === '/work'){
            sv = unit
        }else if(pathName === '/about'){
            sv = unit * 2
        }else if(pathName === '/contact'){
            sv = unit * 3
        }else{
            sv = unit
        }
        gsap.to(`.${s.this_icon}`,{
            x: sv,
            rotate:(sv/unit) * 90,
            ease:"power3.out",
            duration:1,
        })
    },{dependencies:[pathName]})

    const {contextSafe} = useGSAP({scope:buttonMenuRef})
    // set triggle từ hero section và lấy state từ đó
    const handleClickMenu = contextSafe(() => {
        if(window.timelineNavbar && timelineBtnMenu.current){
            window.timelineNavbar.reversed(!window.timelineNavbar.reversed());
            timelineBtnMenu.current.reversed(!timelineBtnMenu.current.reversed());
        }else{
            alert("Err on window var global >>>>>>>>")
        }
        

    })



   
    return (
        <>
          <button onClick={handleClickMenu} ref={buttonMenuRef} className={s.button_menu} id="button_menu" >
                <h3 className={s.lable}>
                    <span className={s.lableMenu}>Menu</span>
                    <span className={s.lableClose}>Close</span>
                </h3>
                <div className={s.icon}>
                    <svg viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className={s.icon_close}>
                        <line x1="13.788" y1="1.28816" x2="1.06011" y2="14.0161" stroke="currentColor" strokeWidth="1.2" style={{ strokeDashoffset: '0', strokeDasharray: 'none' }}></line>
                        <line x1="1.06049" y1="1.43963" x2="13.7884" y2="14.1675" stroke="currentColor" strokeWidth="1.2" style={{ strokeDashoffset: '0', strokeDasharray: 'none' }}></line>
                    </svg>
                </div>
            </button>
            <nav ref={container} className={s.nav} id='navbar_deskop'>
            <ul className={s.nav_list}>
                <span className={s.this_icon}>
                    <IconSVG src='/icon/star.svg'/>
                </span>
                <li className={s.nav_item}>
                   <ButtonHoverNew isActive={pathName === '/home' || pathName === '/'} targetRedirect='/home'>
                    Home
                   </ButtonHoverNew>
                </li>
                <li className={s.nav_item}>
                   <ButtonHoverNew isActive={pathName === '/work'} targetRedirect='/work'>
                   Project
                   </ButtonHoverNew>
                </li>
                <li className={s.nav_item}>
                   <ButtonHoverNew isActive={pathName === '/about'}  targetRedirect='/about'>
                   About us
                   </ButtonHoverNew>
                </li>
                <li className={s.nav_item}>
                   <ButtonHoverNew isActive={pathName === '/contact'} targetRedirect='/contact'>
                   Contact
                   </ButtonHoverNew>
                </li>
                
            </ul>
        </nav>
        
        </>
       
    )
}
