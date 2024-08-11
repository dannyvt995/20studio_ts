import React, { useEffect, useRef } from 'react'
import s from './style.module.css'
import Link from 'next/link';
import gsap from 'gsap'
import { useGSAP } from '@gsap/react';
import ButtonHoverNew from '../ButtonHoverNew';

gsap.registerPlugin(useGSAP)

export default function NavbarSectionDeskop() {
    const container = useRef<any>()
    const buttonMenuRef = useRef<any>()
    const timelineBtnMenu = useRef<gsap.core.Timeline>()
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
                <li className={s.nav_item}>
                   <ButtonHoverNew targetRedirect='/home'>
                    Home
                   </ButtonHoverNew>
                </li>
                <li className={s.nav_item}>
                   <ButtonHoverNew  targetRedirect='/work'>
                   Dự án
                   </ButtonHoverNew>
                </li>
                <li className={s.nav_item}>
                   <ButtonHoverNew  targetRedirect='/about'>
                   Về chúng tôi
                   </ButtonHoverNew>
                </li>
                <li className={s.nav_item}>
                   <ButtonHoverNew  targetRedirect='/contact'>
                   Liên hệ
                   </ButtonHoverNew>
                </li>
                
            </ul>
        </nav>
        
        </>
       
    )
}
