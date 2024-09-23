"use client"
import { useRef, memo, useEffect } from 'react'
import React from 'react'

import s from './style.module.css'
import cn from 'classnames'
import gsap from 'gsap'

import { useGSAP } from '@gsap/react'
import { isMobile } from '@/utils/responsive'
import useStoreZustand from '@Hooks/useStoreZustand';
import { usePathname } from 'next/navigation'
import { removeSplash } from '@/utils/removeSplash'
import ButtonHoverNew2 from '../ButtonHoverNew2'
import IconSVG from '@Components/Icon/IconSVG'
import ButtonHoverNew from '../ButtonHoverNew'
import { common } from '@Constants/page_props';
import WrapperTrackMouse from '../WrapperTrackMouse'
import {delayFirstLoadAfterLoadingPage} from '@Constants/gsap_props'
interface IHeroSection {
    pageName: string,
    state?: string,
    propsForGsap?: any,
    content: any,
}

function HeroSection({ pageName, content }: IHeroSection) {
    const triggleSection = useRef<HTMLDivElement>(null)
    console.log("HeroSectionHeroSectionHeroSectionHeroSection")
    const { stateEnterPage,stateTransition } = useStoreZustand()
    const timelineTextHero = useRef<gsap.core.Timeline>()

    let timeoutId: NodeJS.Timeout;

    useGSAP(() => {
        //  if (isMobile()) return
        timelineTextHero.current = gsap.timeline({ paused: true })
        timelineTextHero.current.to(`.${s.ip}`, {
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
        
    });
    useGSAP(() => {
        if (isMobile()) return
        gsap.timeline({
            scrollTrigger: {
                scroller: content.scrollerRef,
                trigger:`#this_pick${pageName}`,
                start: "top top ",
                end: "bottom 0%",

                // markers:true,
                scrub: true,
            },
            paused: true
        }).fromTo(`#this_pick${pageName} .bg_hero_pick${pageName}`,
            {
                "--bg-y": "0%",
                "--bright": "100%",
            }, {
            "--bg-y": "100%",
            "--bright": "50.0202%",
        });
    })

    useEffect(() => {
        if(!stateEnterPage) return
        if (stateTransition == 'entered' || stateTransition == 'none') {
            timeoutId = setTimeout(() => {
                timelineTextHero.current?.play()
            }, delayFirstLoadAfterLoadingPage );
        }
        return () => {
            clearTimeout(timeoutId)
        }
    },[stateTransition,stateEnterPage])

  
    return (
        <section className={cn(s.hero_section, content.classAdd)} id={`this_pick${pageName}`} ref={triggleSection} >
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

                   
                    <ul  className={s.list1}>
                       
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
                   


                    <ul  className={s.list2}>
                      
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
            <div className={cn(s.background,`bg_hero_pick${pageName}`)} style={{ backgroundImage: `url(${content.backgroundImage.url})` }}>

                {/* <Image quality={100} priority src={`${content.backgroundImage.url}`} alt="image_cache_banner_about" width={0} height={0} sizes="100vw" style={content.backgroundImage.size} /> */}
            </div>
        </section>
    )
}


export default memo(HeroSection)