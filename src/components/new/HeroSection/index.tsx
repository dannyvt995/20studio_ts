"use client"
import { useRef, useEffect } from 'react'
import React from 'react'

import s from './style.module.css'
import cn from 'classnames'
import Image from 'next/image'
import Link from 'next/link'
import ButtonHoverUnderLineNew from '../ButtonHoverUnderline'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { isMobile } from '@/utils/responsive'
import { IPropsFromTransition } from '@/types/common';

interface IHeroSection {
    state: string,
    propsForGsap: any,
    propsHeroSection: any,
}

export default function HeroSection({ state, propsForGsap, propsHeroSection }: IHeroSection) {
    const triggleSection = useRef(null)
    const backgroundImg = useRef(null)


    useGSAP(() => {

        if (isMobile()) return

        if (state === "entered") {

            gsap.to(backgroundImg.current, {
                y: window.innerHeight * .64, // calc(100vh * -1.2)
                scrollTrigger: {
                    scroller: propsForGsap.scrollerRef,
                    trigger: triggleSection.current,
                    start: "top top",
                    end: "bottom top",
                    scrub: true,
                }
            });
        }


    }, { dependencies: [state] });

    return (
        <section className={cn(s.hero_section, propsHeroSection.classAdd)} id="hero_section" ref={triggleSection}>
        <div className="container">
            <div className={s.text_1}>
                <p className={s.intro}>
                    <span>20studio là một công ty thời trang toàn cầu</span>
                    <span>chuyên tạo ra sản phẩm độc đáo và phong cách</span>
                    <span>mang lại trải nghiệm đặc biệt và tinh tế cho khách hàng của mình.</span>
                </p>
                <h1 className={s.title}>
                    <span>Design</span>
                    <span>Fashion</span>
                    <span>Experience</span>
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

