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
    const { stateTransition } = useStoreZustand()
    const tl1 = useRef<gsap.core.Timeline>()
    const tlBg = useRef<gsap.core.Timeline>()
    useGSAP(() => {

        //  if (isMobile()) return
        tl1.current = gsap.timeline({ delay: .4, paused: true })
        tl1.current.to(`.${s.ip}`, {
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
       
        if (stateTransition == 'entered' || stateTransition == 'none') {
            // --^^ console.log("useGSAP running...")
            tl1.current.play()

        }
    }, {dependencies: [stateTransition]});
    useGSAP(() => {

        if (stateTransition === 'entered') {
            gsap.timeline({
                scrollTrigger: {
                    scroller:content.scrollerRef,
                    trigger: triggleSection.current,
                    start:"top top ",
                    end:"bottom 0%",
                    
                    // markers:true,
                    scrub:true,
                }
            }).fromTo(triggleSection.current,
                {
                    "--bg-y": "70%",
                
                }, {
                "--bg-y": "-100%",
            
            });
        }

    }, {dependencies:[stateTransition]});
    return (
        <section className={cn(s.hero_section, content.classAdd)} id="hero_section" ref={triggleSection} style={{backgroundImage:`url(${content.backgroundImage.url})`}}>
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
           {/*  <div className={s.background} ref={backgroundImg}>

                <Image quality={100} priority src={`${content.backgroundImage.url}`} alt="image_cache_banner_about" width={0} height={0} sizes="100vw" style={content.backgroundImage.size} />
            </div> */}
        </section>
    )
}


export default memo(HeroSection)