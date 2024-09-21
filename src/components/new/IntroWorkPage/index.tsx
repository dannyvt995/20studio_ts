"use client"
import { useRef, useEffect, memo } from 'react'
import gsap from 'gsap'
import s from './style.module.css'
import Image from 'next/image'
import { useGSAP } from '@gsap/react';
import { isMobile } from '@/utils/responsive';
import useStoreZustand from '@/hooks/useStoreZustand'

interface IIntroWorkPage {
    state?: string,
    propsForGsap?: any,
    content: any

}

function IntroWorkPage({ content}: IIntroWorkPage) {
    const triggleSection = useRef<HTMLUListElement>(null)
    const {stateTransition} = useStoreZustand()
    useGSAP(() => {
        if(!isMobile()) {
            gsap.to(`.${s.iii}`, { delay: 1.5, y: 0, duration: 1, ease: "power3.out" });
        } else {
            gsap.set(`.${s.iii}`, {y: 0});
        }
    }, { scope: triggleSection })

    useGSAP(() => {
        
        if (stateTransition === 'entered' && !isMobile()) {
            gsap.timeline({
                scrollTrigger: {
                    scroller:content.scrollerRef,
                    trigger: triggleSection.current,
                    start:"top top ",
                    end:"bottom 0%",
                    
                  //  markers:true,
                    scrub:true,
                }
            }).fromTo(`.${s.background}`,
                {
                    "--bg-y": "0%",
                    "--bright": "100%",
                
                }, {
                "--bg-y": "100%",
                "--bright": "50.0202%",
            });
        }

    }, {dependencies:[stateTransition]});
    return (
        <section className={s.IntroWorkPage} ref={triggleSection} >
            <div className={s.background} style={{backgroundImage: `url(${content.img[0]})`}}>
                {/* <Image  quality={100} alt={content.img[1]} src={content.img[0]} width={0} height={0} sizes='100vw' style={{ width: "100%", height: "auto" }} className={s.project_image} /> */}
            </div>
            <div className={s.container}>
                <div className={s.text_1}>
                    <h1 className={s.title}>
                        <span className={s.ii}><span className={s.iii}>{content.name[0]}</span></span>
                        <span className={s.ii}><span className={s.iii}>{content.name[1]}</span></span>

                    </h1>
                    {/*        <h2 className={s.subtitle}>
                        <div className={s.text_line}>
                            <span className={s.iii}>Celebrating a Century of Cinema</span>
                        </div>
                    </h2> */}

                </div>
                <div className={s.text_2}>
                    <p className={s.intro}>{content.des}</p>
                    <div className={s.info}>
                        <span className={s.client}>{content.challenge}</span>
                        <ul className={s.services} >
                            <li className={s.service}>
                                {content.role[0]}
                            </li>
                            <li className={s.service}>
                            {content.role[1]}
                            </li>
                            <li className={s.service}>
                            {content.role[2]}
                            </li>
                            <li className={s.service}>
                            {content.role[4]}
                            </li>
                        </ul>
                        <ul className={s.industries}>
                            <li className={s.industry}>
                            {content.client}
                            </li>
                        </ul>
                        <time className={s.date}> {content.date}</time>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default memo(IntroWorkPage)
