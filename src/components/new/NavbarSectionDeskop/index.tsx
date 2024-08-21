import React, { memo, useEffect, useRef, useState } from 'react'
import s from './style.module.css'

import gsap from 'gsap'
import { useGSAP } from '@gsap/react';
import ButtonHoverNew from '../ButtonHoverNew';
import { usePathname } from 'next/navigation';
import IconSVG from '@/components/Icon/IconSVG';
import useStoreZustand from '@/hooks/useStoreZustand';
gsap.registerPlugin(useGSAP)

function NavbarSectionDeskop() {

    console.log("%cNavbarDeskop_render", "color:green;font-weight:bold")

    const container = useRef<any>()
    const buttonMenuRef = useRef<any>()
    const timelineBtnMenu = useRef<gsap.core.Timeline>()
    const timelineNavbarItem = useRef<gsap.core.Timeline>()
    const mainNavbar = useRef<any>(null)
    const pathName = usePathname()
    const { stateEnterPage } = useStoreZustand()

    const unit = useRef<number>(0)
    const target = useRef<number>(0)
    const [isEnterPage, setIsEnterPage] = useState(true)
    useEffect(() => {

        unit.current = window.innerWidth / 100 * 6

        switch (pathName) {
            case '/home':
            case '/':
                target.current = 0;
                break;
            case '/work':
                target.current = unit.current;
                break;
            case '/about':
                target.current = unit.current * 2;
                break;
            case '/service':
                target.current = unit.current * 3;
                break;
            case '/contact':
                target.current = unit.current * 4;
                break;
            default:
                target.current = unit.current;
        }


    }, [])





    useEffect(() => {
        if (!stateEnterPage) return
        console.log("%cInit Navbar Timeline !!", "color:green")
        timelineBtnMenu.current = gsap.timeline({paused:true})
          
            .fromTo(`.${s.icon}`, {
                rotate: 45,
            }, {
                rotate: 180,
                ease: "power3.inOut",
                duration: .5
            })
        
            .fromTo(`.${s.lableMenu}`, {
                y: 0
            }, {
                y: "-100%",
                ease: "power3.inOut",
                duration: .5
            },"<")
     
            .fromTo(`.${s.lableClose}`, {
                y: "100%"
            }, {
                y: 0,
                ease: "power3.inOut",
                duration: .5
            },"<").reverse()
        window.timelineBtnNavbar = timelineBtnMenu.current
        
        return () => {
            window.timelineBtnNavbar = null
            if (timelineBtnMenu.current) timelineBtnMenu.current.kill()
        }
    }, [buttonMenuRef, stateEnterPage])

    useGSAP(() => {
        if (isEnterPage) {
            console.log("Chạy lại à ??")
            timelineNavbarItem.current = gsap.timeline({ defaults: {},paused:true })
                .fromTo(`.${s.nav_item}`,
                    {
                        y: '100%',
                    },
                    {
                        y: 0,
                        duration: 1, ease: "power3.out",
                        stagger: .1
                    })
            window.timelineNavbarItem = timelineNavbarItem.current

            setTimeout(() => {
                if (window.timelineNavbarItem) {
                    window.timelineNavbarItem.play()
                } else {
                    alert("window.timelineNavbarItem err on NavbarSectionDeskop")
                }
            }, 1000)
        }

    }, { scope: container })

    useGSAP(() => {
        if (isEnterPage && stateEnterPage) {
            console.log("%cFire Anim Navbar First Time !!", "color:green")
            gsap.timeline({
                onComplete: () => {
                    setIsEnterPage(false)
                }
            }).set(`.${s.this_icon}`, {
                x: target.current,
                scale: 0,
                rotate: 0,
            })
                .to(`.${s.this_icon}`, {
                    opacity: 1,
                    scale: 1,
                    rotate: 90,
                    duration: 1,
                }, '<')

        }
    }, { scope: container, dependencies: [isEnterPage, stateEnterPage] })

    useGSAP(() => {

        if (!isEnterPage) {
            console.log("%cToggle Anim Icon !!", "color:green")
            switch (pathName) {
                case '/home':
                case '/':
                    target.current = 0;
                    break;
                case '/work':
                    target.current = unit.current;
                    break;
                case '/about':
                    target.current = unit.current * 2;
                    break;
                case '/service':
                    target.current = unit.current * 3;
                    break;
                case '/contact':
                    target.current = unit.current * 4;
                    break;
                default:
                    target.current = unit.current;
            }
            gsap.to(`.${s.this_icon}`, {
                x: target.current,
                rotate: (target.current / unit.current) * 90,
                ease: "power3.out",
                duration: 1,
            })


        }






    }, { dependencies: [pathName, isEnterPage] })

    const { contextSafe } = useGSAP({ scope: buttonMenuRef })
    // set triggle từ hero section và lấy state từ đó

    useEffect(() => {
        mainNavbar.current = document.getElementById("main_navbar")
    }, [])

    const handleClickMenu = contextSafe(() => {
        if (window.timelineNavbarModal && window.timelineBtnNavbar && window.timelineNavbarItem) {
            mainNavbar.current.style.pointerEvents = 'auto'
            window.timelineNavbarModal.reversed(!window.timelineNavbarModal.reversed());
         window.timelineBtnNavbar.reversed(!window.timelineBtnNavbar.reversed());
        // window.timelineBtnNavbar.reverse();
            window.timelineNavbarItem.reversed(!window.timelineNavbarItem.reversed())
        } else {
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
                <span className={s.this_icon}>
                    <IconSVG src='/icon/star.svg' />
                </span>
                <ul className={s.nav_list}>

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
                        <ButtonHoverNew isActive={pathName === '/about'} targetRedirect='/about'>
                            About us
                        </ButtonHoverNew>
                    </li>
                    <li className={s.nav_item}>
                        <ButtonHoverNew isActive={pathName === '/service'} targetRedirect='/service'>
                            Service
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

export default memo(NavbarSectionDeskop)