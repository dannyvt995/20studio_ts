"use client"
import Image from 'next/image'
import React, { MutableRefObject, memo, useEffect, useRef } from 'react'
import s from './style.module.css'
import gsap from 'gsap'
import cn from 'classnames';
import useStoreZustand from "@/hooks/useStoreZustand";
import { listPathAndIdDom } from "@Constants/data_noname"
import { usePathname,useRouter } from 'next/navigation'
import Link from 'next/link'

interface IGsapSlider {
    nextState: number,
    prevState: number,
    navbarModalImages: Element[],
    indexOfSlider: MutableRefObject<number>
}
function gsapSlider({ nextState, prevState, navbarModalImages, indexOfSlider }: IGsapSlider) {

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
function removeSplash(target: string) {
    let value
    if (listPathAndIdDom.pagesWork.includes(target)) {
        value = target.replace(/\/work\//g, "");

    } else {
        value = target.replace(/\//g, "");
        if (value == '') value = "home"
    }

    return value
}
interface IToggleOpenMenu {
    DomMask: any,
    Section: any,
    Menu: any,
    DomPageTrans: any
}
function NavbarModalSection({ }) {

    const router = useRouter()
    const menuRuning = useRef(false)
    const menuActive = useRef(false)
    const indexOfSlider = useRef<number>(5)
    const sliderImage = useRef<HTMLUListElement>(null)
    const navbarModalImages = useRef<Element[]>([])
    const { indexItemNavbar, prevIndexItemNavbar } = useStoreZustand();


    let navbarDeskop = null
    let buttonOpenMenu: any = null
    let domContent: any = null
    const DomEffect = useRef<HTMLDivElement>(null)
    const MaskRef = useRef<HTMLDivElement>(null)
    const SectionRef = useRef<HTMLElement>(null)

    const propsGsap = {
        props_openNav: {
            duration: 1.6,
            ease: "power3.out"
        },
        props_CloseNav: {
            duration: 1.6,
            ease: "power3.out"
        },
        props_Filter_Light: {
            '-webkit-filter': 'brightness(100%)',
            filter: 'brightness(100%)',
        },
        props_Filter_Shadow: {
            '-webkit-filter': 'brightness(16%)',
            filter: 'brightness(16%)',
        }
    }


    const tlMenu = useRef<any>(null)
    const { stateTransition } = useStoreZustand()
    const pathName = usePathname()
    const pathNameFormat = removeSplash(pathName)

    useEffect(() => {
        if (stateTransition === 'entered')
            gsap.set(SectionRef.current, { zIndex: -1 })
            console.log("rujliahsjldnlij")
        navbarDeskop = document.getElementById(`navbar`)
        buttonOpenMenu = document.getElementById(`button_menu`)
        domContent = document.getElementById(`${pathNameFormat}page`)
        /*   if (navbarDeskop) navbarDeskop.style.display = 'flex';
          if (buttonOpenMenu) buttonOpenMenu.style.display = 'none'; */

        if (sliderImage.current) navbarModalImages.current = Array.from(sliderImage.current.children)
        tlMenu.current = gsap.timeline({
            paused: true
        });

        tlMenu.current.set(SectionRef.current, { zIndex: 500 })
            .set(MaskRef.current, { opacity: 1, clipPath: 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)' })
            .set(DomEffect.current, {
                rotate: -7,
                scale: 1.72,
                y: -window.innerHeight / 2,
            })
            .to(domContent, {
                rotate: 7,
                scale: 1.2,
                ...propsGsap.props_openNav
            }, '<')
            .to(MaskRef.current, {
                clipPath: 'polygon(0% 0%, 100% 0%, 100% 111%, 0% 100%)',
                ...propsGsap.props_openNav
            }, '<')
            .to(DomEffect.current, {
                rotate: 0,
                scale: 1,
                y: 0,
                ...propsGsap.props_openNav
            }, '<').reverse();



        const handleClickMenu = () => {
            tlMenu.current.reversed(!tlMenu.current.reversed());
        };


        if (buttonOpenMenu) buttonOpenMenu.addEventListener("click", handleClickMenu);

        return () => {
            tlMenu.current.kill()
            tlMenu.current = null
            navbarDeskop = null
            buttonOpenMenu.removeEventListener("click", handleClickMenu);
            buttonOpenMenu = null
            domContent = null

        };
    }, [stateTransition, pathName]);
        // const OpenMenu = ({ DomMask, Section, Menu, DomPageTrans }: IToggleOpenMenu) => {
    //     if (menuActive.current) {
    //         gsap.timeline({
    //             onComplete: () => {

    //                 menuActive.current = false
    //                 menuRuning.current = false
    //                 localStorage.setItem("menuRuning", "false")
    //                 gsap.set([DomMask, Section], { zIndex: -1 })
    //             }
    //         })
    //             /*  .to(buttonOpenMenu.current.children[1], {
    //                  rotate: 45,
    //                  ...propsGsap.props_CloseNav
    //              }, '<') */
    //             .to(DomMask, {
    //                 clipPath: 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)',
    //                 ...propsGsap.props_CloseNav
    //             }, '<')
    //             .to(Menu, {
    //                 rotate: -4,
    //                 scale: 1.72,
    //                 y: -window.innerHeight / 2,
    //                 /*  ...propsGsap.props_Filter_Shadow, */
    //                 ...propsGsap.props_CloseNav
    //             }, '<')
    //             /*  .to(elContent__backgroundHero,{
    //                  y : elContent__backgroundHero_currentY - elContent__backgroundHero_distance,
    //                    ...propsGsap.props_CloseNav
    //              }, '<') */
    //             .to(DomPageTrans, {
    //                 rotate: 0,
    //                 scale: 1,
    //                 y: 0,
    //                 /*  ...propsGsap.props_Filter_Shadow, */
    //                 ...propsGsap.props_CloseNav
    //             }, "<")
    //     } else {

    //         gsap.timeline({
    //             onComplete: () => {
    //                 menuActive.current = true
    //                 menuRuning.current = false

    //             }
    //         })
    //             /*  .set(DomPageTrans, {
    //                          ...propsGsap.props_Filter_Shadow,
    //              }) */
    //             .set(Section, { zIndex: 500 })
    //             .set(DomMask, { opacity: 1, clipPath: 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)' })
    //             .set(Menu, {
    //                 rotate: -7,
    //                 scale: 1.72,
    //                 y: -window.innerHeight / 2,
    //             })
    //             .to(DomPageTrans, {
    //                 rotate: 7,
    //                 scale: 1.2,
    //                 /*   y: scrollDistanceAuto, */
    //                 /*    ...props_filter_shadow, */
    //                 ...propsGsap.props_openNav
    //             }, '<')
    //             /*  .to(elContent__backgroundHero , {
    //                  y : elContent__backgroundHero_currentY + elContent__backgroundHero_distance,
    //                  ...props_openNav
    //               }, '<') */
    //             .to(DomMask, {
    //                 clipPath: 'polygon(0% 0%, 100% 0%, 100% 111%, 0% 100%)',
    //                 ...propsGsap.props_openNav
    //             }, '<')
    //             .to(Menu, {
    //                 rotate: 0,
    //                 scale: 1,
    //                 y: 0,

    //                 ...propsGsap.props_openNav
    //             }, '<')
    //         /* .to(buttonOpenMenu.current.children[1], {
    //             rotate: 0,
    //         ...props_openNav
    //         }, '<') */
    //     }
    // }



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
    }, [indexItemNavbar, prevIndexItemNavbar])



    
    
    const handleRedirect = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        e.preventDefault();
        const linkTarget = (e.currentTarget as HTMLAnchorElement).dataset.link;

        if(linkTarget ===  pathName) return
        router.push(`${linkTarget}`)
        gsap.timeline()
        .to(MaskRef.current, {
            clipPath: 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)',
            ...propsGsap.props_openNav
        })
        .to(DomEffect.current, {
            rotate: -7,
            scale: 1.2,
            y: -window.innerHeight / 2,
            ...propsGsap.props_openNav
        }, '<')
    }

    return (
        <section className={s.navbar_modal_section} ref={SectionRef}>
            <div className={s.wrapper} id="w_navbarModal" ref={MaskRef}>
                <div className={s.container} ref={DomEffect} style={{ willChange: "transform" }}>
                    <div className={s.logo}>
                        20 STUDIO
                    </div>
                    <ul className={s.images} ref={sliderImage}>
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
                            <a  onClick={handleRedirect} data-link="/contact" className={s.main_line}>Liên hệ</a>
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