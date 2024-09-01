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
import { common } from '@Constants/page_props';
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
        const tl1 = gsap.timeline({ delay: .7, paused: true })
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
            // -+- console.log("useGSAP running...")
            tl1.play()
            //tl2.play()
        }
    }, []);

    return (
        <section className={cn(s.hero_section, content.classAdd)} id="hero_section" ref={triggleSection}>
            <div className="container" style={content.moreStyle}>
                <div className={s.text_1}>
                    {content.disableParaInro ? <></> :
                        <p className={s.intro}>
                            {content.paraIntro.map((item: any, index: any) => (
                                <span key={index}><span className={s.ip}>{item}</span></span>
                            ))}
                        </p>
                    }

                    <h1 className={s.title}>
                        {content.tit.map((item: any, index: any) => (
                            <span key={index}><span className={s.tp}>{item}</span></span>
                        ))}
                    </h1>
                </div>


                <div className={s.text_2}>
                    <div className={s.body}>
                        <p><span className="">{content.morePara}</span></p>

                    </div>


                    <ButtonHoverNew2 icon={<IconSVG src='/icon/arrow-right.svg' />} targetRedirect={content.btnMore[1]} classAdd={s.link}>
                        {content.btnMore[0]}
                    </ButtonHoverNew2>
                    <ul className={s.list1}>
                        {content.listBtn.map((item: string, index: any) => {
                           
                            return (
                                <li className={s.list_item} key={index}  >
                                    <ButtonHoverNew classAdd={s.list_link} targetRedirect={(common.listBtnUrl as any)[item]}>
                                        {item}
                                    </ButtonHoverNew>
                                </li>
                            )
                        })}


                    </ul>
                    <ul className={s.list2}>
                        <li className={s.list_item}>
                            <a href={common.infoContact.mail.href} className={s.list_link}>
                                {common.infoContact.mail.display}
                            </a>
                        </li>
                        <li className={s.list_item}>
                            <a href={common.infoContact.phone.href} className={s.list_link}>
                                {common.infoContact.phone.display}
                            </a>
                        </li>

                    </ul>
                </div>
            </div>
            <div className={s.background} ref={backgroundImg}>

                <Image quality={100} priority src={`${content.backgroundImage.url}`} alt="image_cache_banner_about" width={0} height={0} sizes="100vw" style={content.backgroundImage.size} />
            </div>
        </section>
    )
}


export default memo(HeroSection)