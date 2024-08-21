"use client"
import { useRef, useEffect, memo } from 'react'
import React from 'react'

import s from './style.module.css'
import cn from 'classnames'
import Image from 'next/image'
import Link from 'next/link'
import ButtonHoverUnderLineNew from '../ButtonHoverUnderline'
import gsap from 'gsap'
import data from '@Data/hero.json'
import { useGSAP } from '@gsap/react'
import { isMobile } from '@/utils/responsive'
import { IPropsFromTransition } from '@/types/common';
import { ScrollTrigger } from 'gsap/all'
import useStoreZustand from '@Hooks/useStoreZustand';
import { usePathname } from 'next/navigation'
import { removeSplash } from '@/utils/removeSplash'
import ButtonHoverNew2 from '../ButtonHoverNew2'
import IconSVG from '@Components/Icon/IconSVG'
import ButtonHoverNew from '../ButtonHoverNew'
gsap.registerPlugin(ScrollTrigger)

interface IHeroSection {
    pageName: string,
    state?: string,
    propsForGsap?: any,
    content: any,
}

function HeroSection({ pageName, content }: IHeroSection) {
    const triggleSection = useRef<HTMLDivElement>(null)
    const backgroundImg = useRef<HTMLDivElement>(null)
    const pathName = usePathname()
    const pathNameFormat = removeSplash({ pathName: pathName })

    useGSAP(() => {

        //  if (isMobile()) return
        const tl1 = gsap.timeline({ delay: .1, paused: true })
        tl1.to(`.${s.ip}`, {
            y: 0,
            opacity: 1,
            rotateZ: 0,
            stagger: .1,
            duration: 1
        }).to(`.${s.tp}`, {
            y: 0,
            opacity: 1,
            rotateZ: 0,
            stagger: .1,
            duration: 1
        }, '<')
        // const tl2 = gsap.timeline({paused:true})
        // tl2.to(`.${s.background}`, {
        //     y: window.innerHeight * .64, // calc(100vh * -1.2)
        //     scrollTrigger: {
        //         scroller: propsForGsap.scrollerRef,
        //         trigger: triggleSection.current,
        //         start: "top top",
        //         end: "bottom top",
        //         scrub: .95,
        //     }
        // });
        if (pathNameFormat === pageName) {
            console.log("useGSAP running...")
            tl1.play()
            //tl2.play()
        }
    }, []);

    if (pageName === 'home') {
        return (
            <section className={cn(s.hero_section, content.classAdd)} id="hero_section" ref={triggleSection}>
                <div className="container">
                    <div className={s.text_1}>
                        <p className={s.intro}>
                            <span><span className={s.ip}>We are a global creative fashion studio base</span></span>
                            <span><span className={s.ip}>in Ho Chi Minh city. We work with artist, designer and manufactures</span></span>
                            <span><span className={s.ip}>on clients projectsto produce outstanding works.</span></span>
                        </p>
                        <h1 className={s.title}>
                            <span><span className={s.tp}>Fashion</span></span>
                            <span><span className={s.tp}>Creative</span></span>
                            <span><span className={s.tp}>Production</span></span>
                        </h1>
                    </div>


                    <div className={s.text_2}>
                        <div className={s.body}>
                            <p><span className="">Beside designing and fashion production, 20Studio work on projects of all types including brand and product development, digital experience design, social media design, production management and fashion business solutions.</span></p>

                        </div>

                        <ButtonHoverNew2 icon={<IconSVG src='/icon/arrow-right.svg' />} targetRedirect='/about' classAdd={s.link}>
                            Explore our services
                        </ButtonHoverNew2>

                        <ul className={s.list1}>
                            <li className={s.list_item}>

                                <ButtonHoverNew classAdd={s.list_link} targetRedirect='/service'>
                                    Service
                                </ButtonHoverNew>

                            </li>
                            <li className={s.list_item}>

                                <ButtonHoverNew classAdd={s.list_link} targetRedirect='/work'>
                                    Project
                                </ButtonHoverNew>

                            </li>
                            <li className={s.list_item}>
                                <ButtonHoverNew classAdd={s.list_link} targetRedirect='/about'>
                                    About us
                                </ButtonHoverNew>

                            </li>
                            <li className={s.list_item}>

                                <ButtonHoverNew classAdd={s.list_link} targetRedirect='/contact'>
                                    Contact
                                </ButtonHoverNew>



                            </li>
                        </ul>
                        <ul className="list2">
                            <li className={s.list_item}>
                                <a href="mailto:creatiflow.danny@gmail.com" className={s.list_link}>
                                    vphcm@20studio.vn
                                </a>
                            </li>
                            <li className={s.list_item}>
                                <a href="tel:+389984639" className={s.list_link}>
                                    0123.456.789
                                </a>
                            </li>

                        </ul>
                    </div>
                </div>
                <div className={s.background} ref={backgroundImg}>

                    <Image priority src={`${content.backgroundImage}`} alt="image_cache_banner_home" width={0} height={0} sizes="100vw" style={content.backgroundSize} />
                </div>
            </section>
        )
    } else if (pageName === 'about') {
        return (
            <section className={cn(s.hero_section, content.classAdd)} id="hero_section" ref={triggleSection}>
                <div className="container" style={{ paddingTop: '55vh' }}>
                    <div className={s.text_1}>
                        {/*     <p className={s.intro}>
                            <span><span className={s.ip}>20studio là một công ty thời trang toàn cầu</span></span>
                            <span><span className={s.ip}>chuyên tạo ra sản phẩm độc đáo và phong cách</span></span>
                            <span><span className={s.ip}>mang lại trải nghiệm đặc biệt và tinh tế cho khách hàng của mình.</span></span>
                        </p> */}
                        <h1 className={s.title}>
                            <span><span className={s.tp}>Design</span></span>
                            <span><span className={s.tp}>Fashion</span></span>
                            <span><span className={s.tp}>Digital Exp</span></span>
                        </h1>
                    </div>


                    <div className={s.text_2}>
                        <div className={s.body}>
                            <p><span className="">Beside designing and fashion production, 20Studio work on projects of all types including brand and product development, digital experience design, social media design, production management and fashion business solutions.</span></p>

                        </div>


                        <ButtonHoverNew2 icon={<IconSVG src='/icon/arrow-right.svg' />} targetRedirect='/about' classAdd={s.link}>
                            Our mission
                        </ButtonHoverNew2>
                        <ul className={s.list1}>

                            <li className={s.list_item}>

                                <ButtonHoverNew classAdd={s.list_link} targetRedirect='/work'>
                                    Project
                                </ButtonHoverNew>

                            </li>

                            <li className={s.list_item}>

                                <ButtonHoverNew classAdd={s.list_link} targetRedirect='/contact'>
                                    Contact
                                </ButtonHoverNew>



                            </li>
                            <li className={s.list_item}>

                                <ButtonHoverNew classAdd={s.list_link} targetRedirect='/service'>
                                    Service
                                </ButtonHoverNew>
                            </li>
                            <li className={s.list_item}>

                                <ButtonHoverNew classAdd={s.list_link} targetRedirect='/home'>
                                    Home
                                </ButtonHoverNew>

                            </li>
                        </ul>
                        <ul className="list2">
                            <li className={s.list_item}>
                                <a href="mailto:creatiflow.danny@gmail.com" className={s.list_link}>
                                    vphcm@20studio.vn
                                </a>
                            </li>
                            <li className={s.list_item}>
                                <a href="tel:+389984639" className={s.list_link}>
                                    0123.456.789
                                </a>
                            </li>

                        </ul>
                    </div>
                </div>
                <div className={s.background} ref={backgroundImg}>

                    <Image priority src={`${content.backgroundImage}`} alt="image_cache_banner_about" width={0} height={0} sizes="100vw" style={content.backgroundSize} />
                </div>
            </section>
        )
    }

}

export default memo(HeroSection)