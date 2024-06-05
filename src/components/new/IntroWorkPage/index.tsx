"use client"
import {useRef, useEffect, memo } from 'react'
import gsap from 'gsap'
import s from './style.module.css'
import Image from 'next/image'
import { useGSAP } from '@gsap/react';
import { isMobile } from '@/utils/responsive';
interface IIntroWorkPage {
    propsForGsap: any,
    backgroundImage: any
}

function IntroWorkPage({ propsForGsap, backgroundImage }: IIntroWorkPage) {
    const triggleSection = useRef<HTMLUListElement>(null)

     useGSAP(() => {
        if (isMobile()) return
        if (propsForGsap.stateTransitionPage === 'entered') {
          gsap.to(`.${s.iii}`, { y: 0, duration: 1, ease: "power3.out" });
        }
      }, { dependencies: [propsForGsap.stateTransitionPage] })


    return (
        <section className={s.IntroWorkPage} ref={triggleSection}>
            <div className={s.background}>
                <Image alt="d" src={backgroundImage} width={0} height={0} sizes="100vw" style={{ width: "100%", height: "auto" }} className={s.project_image} />
            </div>
            <div className={s.container}>
                <div className={s.text_1}>
                    <h1 className={s.title}>
                        <span className={s.ii}><span className={s.iii}>100 Years</span></span>
                        <span className={s.ii}><span className={s.iii}>Columbia</span></span>
                        <span className={s.ii}><span className={s.iii}>Pictures</span></span>
                    </h1>
                    <h2 className={s.subtitle}>
                        <div className={s.text_line}>
                            <span className={s.iii}>Celebrating a Century of Cinema</span>
                        </div>
                    </h2>

                </div>
                <div className={s.text_2}>
                    <p className={s.intro}>In honor of Columbia Pictures&quot; 100th anniversary, we teamed up with Watson Design Group to create a century-filled digital experience and quiz. This took visitors through entertainment history and a personalized journey of self-discovery, revealing their most influential films and TV shows.</p>
                    <div className={s.info}><span className={s.client}>Watson Design Group</span> <ul className="services"><li className={s.service}>
                        Visual Design
                    </li><li className={s.service}>
                            UI &amp; UX Design
                        </li><li className={s.service}>
                            Web Development
                        </li></ul> <ul className={s.industries}><li className={s.industry}>
                            Entertainment
                        </li></ul> <time className={s.date}>February ‘2024</time></div>
                </div>
            </div>
        </section>
    )
}
export default memo(IntroWorkPage)
