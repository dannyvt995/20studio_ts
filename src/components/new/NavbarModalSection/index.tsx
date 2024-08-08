"use client"
import Image from 'next/image'
import React, { MutableRefObject, memo, useEffect, useRef, useState } from 'react'
import s from './style.module.css'
import gsap from 'gsap'
import cn from 'classnames';
import useStoreZustand from "@/hooks/useStoreZustand";
import { listPathAndIdDom } from "@Constants/data_noname"
import { usePathname, useRouter } from 'next/navigation'
import Link from 'next/link'
import { useEffectActive_NavbarModal } from '@/hooks/navbar/useEffectNavbarModal'
import { useHoverSliderModalNav } from '@/hooks/navbar/useHoverSliderModalNav'
import { removeSplash } from '@/utils/removeSplash'


function NavbarModalSection({ }) {


    const buttonMenuRef = useRef<HTMLButtonElement>(null)
    const { indexItemNavbar, prevIndexItemNavbar } = useStoreZustand();


    const indexOfSlider = useRef<number>(5)
    const SliderImage = useRef<HTMLUListElement>(null)
    const navbarModalImages = useRef<Element[]>([])
    const DomEffect = useRef<HTMLDivElement>(null)
    const MaskRef = useRef<HTMLDivElement>(null)
    const SectionRef = useRef<HTMLElement>(null)
    const listBtnRedirectRef = useRef<any>([])
    // const [stateToggle,setStateToggle] = useState<boolean>(false)
    const pathName = usePathname()
    const pathNameFormat = removeSplash({ pathName: pathName })

    // useEffect(() => {
    //     if (indexItemNavbar >= 0 && prevIndexItemNavbar >= 0) {
    //         console.log(indexItemNavbar, prevIndexItemNavbar)
    //         indexOfSlider.current++
    // useHoverSliderModalNav({
    //     prevState: prevIndexItemNavbar,
    //     navbarModalImages: navbarModalImages.current,
    //     nextState: indexItemNavbar,
    //     indexOfSlider: indexOfSlider.current
    // })
    //     }
    // }, [indexItemNavbar, prevIndexItemNavbar])
  
    useEffect(() => {
        const listBtnRedirectNode = document.querySelectorAll(`.${s.main_line}`)
        listBtnRedirectRef.current = Array.from(listBtnRedirectNode)
    }, [])


    useEffectActive_NavbarModal({
        btnMenu: buttonMenuRef.current,
        SectionRef: SectionRef.current,
        MaskRef: MaskRef.current,
        DomEffect: DomEffect.current,
        SliderImage: SliderImage.current,
        pathNameFormat: pathNameFormat,
        listBtnRedirect: listBtnRedirectRef.current
    })


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
            <section className={s.navbar_modal_section} ref={SectionRef}>
                <div className={s.wrapper} ref={MaskRef}>
                    <div className={s.container} ref={DomEffect}>
                        <div className={s.logo}>
                            20 STUDIO
                        </div>
                        <ul className={s.images} ref={SliderImage}>
                            <li>
                                <Image src="/home/banner.png" width={0} height={0} sizes="100vw" style={{ position: 'relative', width: 'auto', height: '100%', left: '50%', transform: 'translateX(-50%)' }} alt="logo narbar modal" />
                            </li>
                            <li>
                                <Image src="/home/ser1.webp" width={0} height={0} sizes="100vw" style={{ position: 'relative', width: 'auto', height: '100%', left: '50%', transform: 'translateX(-50%)' }} alt="logo narbar modal" />
                            </li>
                            <li>
                                <Image src="/home/ser2.webp" width={0} height={0} sizes="100vw" style={{ position: 'relative', width: 'auto', height: '100%', left: '50%', transform: 'translateX(-50%)' }} alt="logo narbar modal" />
                            </li>
                            <li>
                                <Image src="/home/ser3.webp" width={0} height={0} sizes="100vw" style={{ position: 'relative', width: 'auto', height: '100%', left: '50%', transform: 'translateX(-50%)' }} alt="logo narbar modal" />
                            </li>
                        </ul>
                        <ul className={s.main}>
                            <li className={s.main_link}>
                                <a data-link="/work" className={s.main_line}>Dự án</a>
                            </li>
                            <li className={s.main_link}>
                                <a data-link="/about" className={s.main_line}>20 Studio</a>
                            </li>
                            <li className={s.main_link}>
                                <a data-link="/" className={s.main_line}>Dịch vụ</a>
                            </li>
                            <li className={s.main_link}>
                                <a data-link="/contact" className={s.main_line}>Liên hệ</a>
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
                    </div>

                </div>
            </section>
        </>

    )
}
export default memo(NavbarModalSection)