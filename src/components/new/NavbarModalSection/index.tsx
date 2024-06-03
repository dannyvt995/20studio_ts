"use client"
import Image from 'next/image'
import React, { MutableRefObject, memo, useEffect, useRef } from 'react'
import s from './style.module.css'
import gsap from 'gsap'
import cn from 'classnames';
import useStoreZustand from "@/hooks/useStoreZustand";
interface IDungTam {
    nextState: number,
    prevState: number,
    navbarModalImages: Element[],
    indexOfSlider: MutableRefObject<number>
}
function gsapSlider({ nextState, prevState, navbarModalImages, indexOfSlider }: IDungTam) {

    indexOfSlider.current++;

    gsap.timeline()
        .set(navbarModalImages[nextState], { zIndex: indexOfSlider.current++, opacity: 0, rotate: 5, scale: 1 })
        .to(
            navbarModalImages[nextState], {
            opacity: 1,
            rotate: 0,
            scale: 1.1,
            duration: .5,
            ease: "power3.out",

        }
        ).set(navbarModalImages[prevState], {
            clearProps: "opacity,rotate,scale"
        })

}
function NavbarModalSection({ }) {

    const indexOfSlider = useRef<number>(5)
    const sliderImage = useRef<HTMLUListElement>(null)
    const navbarModalImages = useRef<Element[]>([])
    const { indexItemNavbar, prevIndexItemNavbar } = useStoreZustand();


    useEffect(() => {
        console.log("this re-render!!!!!!!!!!!!!!!!!!!!!!")

        if (sliderImage.current) navbarModalImages.current = Array.from(sliderImage.current.children)

    }, [sliderImage])
    useEffect(() => {
        console.log("this re-render!!!!!!!!!!!!!!!!!!!!!!")
        if (indexItemNavbar >= 0 && prevIndexItemNavbar >= 0) {


            gsapSlider({
                prevState: prevIndexItemNavbar,
                navbarModalImages: navbarModalImages.current,
                nextState: indexItemNavbar,
                indexOfSlider: indexOfSlider
            })
        }



    }, [indexItemNavbar])
    return (
        <section className={s.navbar_modal_section}>
            <div className={s.wrapper} id="w_navbarModal">
                <div className={s.container} id="navbarModal">
                    <div className={s.logo}>
                        20 STUDIO
                    </div>
                    <ul className={s.images} ref={sliderImage}>
                        <li>
                            <Image src="/home/banner.webp" width={0} height={0} sizes="100vw" style={{ position: 'relative', width: 'auto', height: '100%', left: '50%', transform: 'translateX(-50%)' }} alt="logo narbar modal" />
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
                            {/*   <ButtonHoverUnderLineNew data_slider="0" eventPass={handleClick} data_type="outsite" noName={"var(--font-lh-h2)"} data_link="/work" classStyle="main-line">Dự án</ButtonHoverUnderLineNew> */}
                        </li>
                        <li className={s.main_link}>
                            {/*  <ButtonHoverUnderLineNew data_slider="1" eventPass={handleClick} data_type="outsite" noName={"var(--font-lh-h2)"} data_link="/about" classStyle="main-line">20 Studio</ButtonHoverUnderLineNew> */}
                        </li>
                        <li className={s.main_link}>
                            {/*  <ButtonHoverUnderLineNew data_slider="2" eventPass={handleClick} data_type="outsite" noName={"var(--font-lh-h2)"} data_link="/home" classStyle="main-line">Dịch vụ</ButtonHoverUnderLineNew> */}
                        </li>
                        <li className={s.main_link}>
                            {/* <ButtonHoverUnderLineNew data_slider="3" eventPass={handleClick} data_type="outsite" noName={"var(--font-lh-h2)"} data_link="/contact" classStyle="main-line">Liên hệ</ButtonHoverUnderLineNew> */}
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
                            <span className={cn(s.link_item,s.is_reel)}>
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