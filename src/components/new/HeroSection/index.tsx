"use client"
import { useRef, useEffect } from 'react'
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
gsap.registerPlugin(ScrollTrigger)

interface IHeroSection {
    pageName: string,
    state?: string,
    propsForGsap: any,
    propsHeroSection: any,
}

export default function HeroSection({ pageName, propsForGsap, propsHeroSection }: IHeroSection) {
    const triggleSection = useRef<HTMLDivElement>(null)
    const backgroundImg = useRef<HTMLDivElement>(null)
    const pathName = usePathname()
    const pathNameFormat = removeSplash({pathName:pathName})
   
   
    useGSAP(() => {

      //  if (isMobile()) return
        const tl1 = gsap.timeline({delay:.1,paused:true})
        tl1.to(`.${s.ip}`, {
            y: 0,
            opacity:1,
            rotateZ:0,
            stagger: .1,
            duration: 1
        }).to(`.${s.tp}`, {
            y: 0,
            opacity:1,
            rotateZ:0,
            stagger: .1,
            duration:1
        }, '<')
        const tl2 = gsap.timeline({paused:true})
        tl2.to(`.${s.background}`, {
            y: window.innerHeight * .64, // calc(100vh * -1.2)
            scrollTrigger: {
                scroller: propsForGsap.scrollerRef,
                trigger: triggleSection.current,
                start: "top top",
                end: "bottom top",
                scrub: .95,
            }
        });
        if (pathNameFormat === pageName) {
            console.log("useGSAP running...")
            tl1.play()
            tl2.play()
        }
    }, []);

    if (pageName === 'home') {
        return (
            <section className={cn(s.hero_section, propsHeroSection.classAdd)} id="hero_section" ref={triggleSection}>
                <div className="container">
                    <div className={s.text_1}>
                        <p className={s.intro}>
                            <span><span className={s.ip}>20studio là một công ty thời trang toàn cầu</span></span>
                            <span><span className={s.ip}>chuyên tạo ra sản phẩm độc đáo và phong cách</span></span>
                            <span><span className={s.ip}>mang lại trải nghiệm đặc biệt và tinh tế cho khách hàng của mình.</span></span>
                        </p>
                        <h1 className={s.title}>
                            <span><span className={s.tp}>Design</span></span>
                            <span><span className={s.tp}>Fashion</span></span>
                            <span><span className={s.tp}>Experience</span></span>
                        </h1>
                    </div>


                    <div className={s.text_2}>
                        <div className={s.body}>
                            <p><span className="">Tận dụng sự kết hợp giữa sự sáng tạo và kỹ thuật chuyên môn, chúng tôi cam kết mang đến những sản phẩm chất lượng cao và độc đáo, từ ý tưởng ban đầu đến sản phẩm hoàn thiện. Hãy để 20studio trở thành đối tác đáng tin cậy của bạn trong việc thúc đẩy sự thành công của thương hiệu thời trang của bạn.</span></p>

                        </div>

                        <Link className={s.link} href="/about" >Về 20 Studio</Link>
                        <ul className={s.list1}>
                            <li className={s.list_item}>
                                <Link className={s.list_link} href={"/work"}>Dự án</Link>
                            </li>
                            <li className={s.list_item}>

                                <Link className={s.list_link} href={"/about"}>20 Studio</Link>
                            </li>
                            <li className={s.list_item}>
                                <Link className={s.list_link} href={"/contact"}>Liên hệ</Link>

                            </li>
                            <li className={s.list_item}>
                                <Link className={s.list_link} href={"/"}>Dịch vụ</Link>

                            </li>
                        </ul>
                        <ul className="list2">
                            <li className={s.list_item}>
                                <a href="mailto:creatiflow.danny@gmail.com" className={s.list_link}>
                                    20stuido@gmail.com
                                </a>
                            </li>
                            <li className={s.list_item}>
                                <a href="tel:+389984639" className={s.list_link}>
                                    +012.34.6789
                                </a>
                            </li>

                        </ul>
                    </div>
                </div>
                <div className={s.background} ref={backgroundImg}>

                    <Image src={`${propsHeroSection.backgroundImage}`} alt="d" width={0} height={0} sizes="100vw" style={propsHeroSection.backgroundSize} />
                </div>
            </section>
        )
    } else if (pageName === 'about') {
        return (
            <section className={cn(s.hero_section, propsHeroSection.classAdd)} id="hero_section" ref={triggleSection}>
                <div className="container">
                    <div className={s.text_1}>
                        <p className={s.intro}>
                            <span><span className={s.ip}>20studio là một công ty thời trang toàn cầu</span></span>
                            <span><span className={s.ip}>chuyên tạo ra sản phẩm độc đáo và phong cách</span></span>
                            <span><span className={s.ip}>mang lại trải nghiệm đặc biệt và tinh tế cho khách hàng của mình.</span></span>
                        </p>
                        <h1 className={s.title}>
                            <span><span className={s.tp}>Design</span></span>
                            <span><span className={s.tp}>Fashion</span></span>
                            <span><span className={s.tp}>Experience</span></span>
                        </h1>
                    </div>


                    <div className={s.text_2}>
                        <div className={s.body}>
                            <p><span className="">Tận dụng sự kết hợp giữa sự sáng tạo và kỹ thuật chuyên môn, chúng tôi cam kết mang đến những sản phẩm chất lượng cao và độc đáo, từ ý tưởng ban đầu đến sản phẩm hoàn thiện. Hãy để 20studio trở thành đối tác đáng tin cậy của bạn trong việc thúc đẩy sự thành công của thương hiệu thời trang của bạn.</span></p>

                        </div>

                        <Link className={s.link} href="/about" >Về 20 Studio</Link>
                        <ul className={s.list1}>
                            <li className={s.list_item}>
                                <Link className={s.list_link} href={"/work"}>Dự án</Link>
                            </li>
                            <li className={s.list_item}>

                                <Link className={s.list_link} href={"/about"}>20 Studio</Link>
                            </li>
                            <li className={s.list_item}>
                                <Link className={s.list_link} href={"/contact"}>Liên hệ</Link>

                            </li>
                            <li className={s.list_item}>
                                <Link className={s.list_link} href={"/"}>Dịch vụ</Link>

                            </li>
                        </ul>
                        <ul className="list2">
                            <li className={s.list_item}>
                                <a href="mailto:creatiflow.danny@gmail.com" className={s.list_link}>
                                    20stuido@gmail.com
                                </a>
                            </li>
                            <li className={s.list_item}>
                                <a href="tel:+389984639" className={s.list_link}>
                                    +012.34.6789
                                </a>
                            </li>

                        </ul>
                    </div>
                </div>
                <div className={s.background} ref={backgroundImg}>

                    <Image src={`${propsHeroSection.backgroundImage}`} alt="d" width={0} height={0} sizes="100vw" style={propsHeroSection.backgroundSize} />
                </div>
            </section>
        )
    }

}

