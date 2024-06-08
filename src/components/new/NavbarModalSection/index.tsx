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
import { useEffectActive_NavbarModal, useEffectRedirect_NavbarModal } from '@/hooks/navbar/useEffectNavbarModal'
import { useHoverSliderModalNav } from '@/hooks/navbar/useHoverSliderModalNav'
import { removeSplash } from '@/utils/removeSplash'


function NavbarModalSection({ }) {

    const router = useRouter()

    const { indexItemNavbar, prevIndexItemNavbar } = useStoreZustand();


    const indexOfSlider = useRef<number>(5)
    const SliderImage = useRef<HTMLUListElement>(null)
    const navbarModalImages = useRef<Element[]>([])
    const DomEffect = useRef<HTMLDivElement>(null)
    const MaskRef = useRef<HTMLDivElement>(null)
    const SectionRef = useRef<HTMLElement>(null)

    const { stateTransition } = useStoreZustand()
   // const [stateToggle,setStateToggle] = useState<boolean>(false)
    const pathName = usePathname()
    const pathNameFormat = removeSplash({ pathName: pathName })
    // useEffect(() => {
    //     localStorage.setItem("page_mount","false")
    // },[])
    // useEffect(() => {
      
    //     if (stateTransition === 'entered' && pathNameFormat)
    //         if (SectionRef.current && MaskRef.current && DomEffect.current && SliderImage.current && pathNameFormat)
    //             console.log('entered')
 
    //            // setStateToggle(!stateToggle)
    //     useEffectActive_NavbarModal({
    //        // stateActive: stateToggle,
    //         SectionRef: SectionRef.current,
    //         MaskRef: MaskRef.current,
    //         DomEffect: DomEffect.current,
    //         SliderImage: SliderImage.current,
    //         pathNameFormat: pathNameFormat,
    //     })

    // }, [pathName])

    useEffect(() => {
        if (indexItemNavbar >= 0 && prevIndexItemNavbar >= 0) {
            indexOfSlider.current++
            // useHoverSliderModalNav({
            //     prevState: prevIndexItemNavbar,
            //     navbarModalImages: navbarModalImages.current,
            //     nextState: indexItemNavbar,
            //     indexOfSlider: indexOfSlider.current
            // })
        }
    }, [indexItemNavbar, prevIndexItemNavbar])





    const handleRedirect = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        e.preventDefault();
        const linkTarget = (e.currentTarget as HTMLAnchorElement).dataset.link;

        if (linkTarget === pathName) return
        // router.push(`${linkTarget}`)
        // useEffectRedirect_NavbarModal({
        //     SectionRef: SectionRef.current,
        //     MaskRef: MaskRef.current,
        //     DomEffect: DomEffect.current,
        // })
    }

    return (
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
                            <a onClick={handleRedirect} data-link="/work" className={s.main_line}>Dự án</a>
                        </li>
                        <li className={s.main_link}>
                            <a onClick={handleRedirect} data-link="/about" className={s.main_line}>20 Studio</a>
                        </li>
                        <li className={s.main_link}>
                            <a onClick={handleRedirect} data-link="/" className={s.main_line}>Dịch vụ</a>
                        </li>
                        <li className={s.main_link}>
                            <a onClick={handleRedirect} data-link="/contact" className={s.main_line}>Liên hệ</a>
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
    )
}
export default memo(NavbarModalSection)