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
import ButtonHoverNew from '../ButtonHoverNew'
import ButtonHoverNew2 from '../ButtonHoverNew2'
import IconSVG from '@/components/Icon/IconSVG'
import SliderImageHover from '@/components/SliderImageHover'
import { isMobile } from '@/utils/responsive'


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

    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        if(isMobile()) setIsClient(true);
    }, []);

    // useEffect(() => {
    //     if (indexItemNavbar >= 0 && prevIndexItemNavbar >= 0) {
    //         // --^^ console.log(indexItemNavbar, prevIndexItemNavbar)
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

            <section className={s.navbar_modal_section} ref={SectionRef}>
                <div className={s.wrapper} ref={MaskRef}>
              
                
                    <div className={s.container} ref={DomEffect}>
                   
                        <div className={s.logo}>
                            20 STUDIO
                        </div>
                        <ul className={s.images} ref={SliderImage}>
                            {isClient ? <></> : <SliderImageHover type={"navbar"}/>}
                        
                       {/*      <li>
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
                            </li> */}
                        </ul>
                        <ul className={s.main} id='main_navbar'>
                            <li className={s.main_link}>
                                <ButtonHoverNew btnNavbar={true} data_id={3} targetRedirect='/home' classAdd={s.main_line}>
                                    Home
                                </ButtonHoverNew>

                            </li>
                            <li className={s.main_link}>
                                <ButtonHoverNew btnNavbar={true} data_id={0} targetRedirect='/work' classAdd={s.main_line}>
                                    Project
                                </ButtonHoverNew>

                            </li>
                            <li className={s.main_link}>
                                <ButtonHoverNew btnNavbar={true} data_id={1} targetRedirect='/about' classAdd={s.main_line}>
                                    About us
                                </ButtonHoverNew>

                            </li>
                            <li className={s.main_link}>
                                <ButtonHoverNew btnNavbar={true} data_id={2} targetRedirect='/service' classAdd={s.main_line}>
                                    Service
                                </ButtonHoverNew>

                            </li>
                            <li className={s.main_link}>
                                <ButtonHoverNew btnNavbar={true} data_id={3} targetRedirect='/contact' classAdd={s.main_line}>
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
        </>

    )
}
export default memo(NavbarModalSection)