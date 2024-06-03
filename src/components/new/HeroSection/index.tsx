"use client"
import { useRef } from 'react'
import React from 'react'

import s from './style.module.css'
import cn from 'classnames'
import Image from 'next/image'
import Link from 'next/link'
import ButtonHoverUnderLineNew from '../ButtonHoverUnderline'


interface IHeroSection {
    propsForGsap : any,
    propsHeroSection : any,
}

export default function  HeroSection({ propsForGsap, propsHeroSection } : IHeroSection) {
    const triggleSection = useRef(null)
    const backgroundImg = useRef(null)

    return (
        <section className={cn(s.hero_section,propsHeroSection.classAdd)} id="hero_section" ref={triggleSection}>
            <div className={s.container}>
                <div className="text_1">
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

                    <Link className={s.link} href="/about">Về 20 Studio</Link>
                    <ul className={s.list1}>
                        <li className={s.list_item}>
                            <Link href={"/home"}>Dự án</Link>
                        </li>
                        <li className={s.list_item}>
                            <ButtonHoverUnderLineNew noName="var(--font-lh-p)" auto_link="/about" classStyle="list-link">20 Studio</ButtonHoverUnderLineNew>

                        </li>
                        <li className={s.list_item}>

                            <ButtonHoverUnderLineNew noName="var(--font-lh-p)" auto_link="/" classStyle="list-link">Tin tức</ButtonHoverUnderLineNew>
                        </li>
                        <li className={s.list_item}>

                            <ButtonHoverUnderLineNew noName="var(--font-lh-p)" auto_link="/contact" classStyle="list-link">Liên hệ</ButtonHoverUnderLineNew>
                        </li>
                    </ul>
                    <ul className="list2">
                        <li className={s.list_item}>
                            <a href="mailto:creatiflow.danny@gmail.com" className="list-link">
                                20stuido@gmail.com
                            </a>
                        </li>
                        <li className={s.list_item}>
                            <a href="tel:+389984639" className="list-link">
                                +012.34.6789
                            </a>
                        </li>

                    </ul>
                </div>
            </div>
            <div className={s.background} ref={backgroundImg}>
                
                <Image  src={`${propsHeroSection.backgroundImage}`}  alt="d"  width={0} height={0} sizes="100vw" style={propsHeroSection.backgroundSize} />
            </div>
        </section>
    )
}

