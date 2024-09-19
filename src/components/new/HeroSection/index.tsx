"use client"
import { useRef, memo } from 'react'
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
    }, { dependencies: [stateTransition] });
    useGSAP(() => {
        if(isMobile()) return
        gsap.timeline({
            scrollTrigger: {
                scroller: content.scrollerRef,
                trigger:`#this_pick${pageName}`,
                start: "top top ",
                end: "bottom 0%",

                // markers:true,
                scrub: true,
            }
        }).fromTo(`#this_pick${pageName} .bg_hero_pick${pageName}`,
            {
                "--bg-y": "0%",
                "--bright": "100%",
            }, {
            "--bg-y": "100%",
            "--bright": "50.0202%",
        });
     
    });
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


                    <ul className={s.list1}>
                        <WrapperTrackMouse>
                            {content.listBtn.map((item: string, index: any) => {

                                return (
                                    <li className={s.list_item} key={index}  >
                                        <ButtonHoverNew classAdd={s.list_link} targetRedirect={(common.listBtnUrl as any)[item]}>
                                            {item}
                                        </ButtonHoverNew>
                                    </li>
                                )
                            })}

                        </WrapperTrackMouse>
                    </ul>



                    <ul className={s.list2}>
                        <WrapperTrackMouse>
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

                        </WrapperTrackMouse>


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