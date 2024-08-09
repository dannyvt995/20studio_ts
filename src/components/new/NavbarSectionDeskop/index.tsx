import React, { useRef } from 'react'
import s from './style.module.css'
import Link from 'next/link';
import gsap from 'gsap'
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP)

export default function NavbarSectionDeskop() {
    const container = useRef<any>()
    const buttonMenuRef = useRef<any>()
    useGSAP(() => {
        gsap.to(`.${s.nav_item}`,{
            delay:.5,
            y: 0,
            duration:1,
            stagger:.1
        })
    },{scope:container})
    // set triggle từ hero section và lấy state từ đó
   
    return (
        <>
          <button ref={buttonMenuRef} className={s.button_menu} id="button_menu" >
                <div className={s.lable}>
                    Menu
                </div>
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
                    <Link href={"/home"} >Home</Link>
                </li>
                <li className={s.nav_item}>
                    <Link href={"/work"} >Dự án</Link>
                </li>
                <li className={s.nav_item}>
                    <Link href={"/about"} >About</Link>
                </li>
                <li className={s.nav_item}>
                    <Link href={"/contact"} >Contact</Link>
                </li>
            </ul>
        </nav>
        
        </>
       
    )
}
