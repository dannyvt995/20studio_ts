"use client"
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import s from './style.module.css'
import Image from 'next/image'

export default function GridImage1({ propsForGsap }: { propsForGsap?: any }) {
    const triggleSection = useRef(null)
    const domEffectTop = useRef(null)
    const domEffectBot = useRef(null)
    useGSAP(() => {
        gsap.registerPlugin(ScrollTrigger)
        gsap.timeline({
            scrollTrigger: {
                scroller: propsForGsap.scrollerRef,
                trigger: triggleSection.current,
                start: "top bottom",
                end: "bottom top",
                scrub: true
            }
        })
            .set(domEffectBot.current, { x: -500 })
            .to(domEffectTop.current, {
                x: -200
            }).to(domEffectBot.current, {
                x: 0
            }, "<")
    })
    return (
        <section className={s.GridImage1} ref={triggleSection}>
            <div className={s.container}>
                <div className={s.row} ref={domEffectTop}>
                    <div className={s.media}>
                        <Image alt="alt" src="/clone/detail-work-page/grid11.webp" width={0} height={0} sizes="100vw" style={{ width: "100%", height: "auto" }} />
                    </div>
                    <div className={s.media}>
                        <Image alt="alt" src="/clone/detail-work-page/grid12.webp" width={0} height={0} sizes="100vw" style={{ width: "100%", height: "auto" }} />
                    </div>
                    <div className={s.media}>
                        <video
                            autoPlay
                            playsInline
                            loop
                            muted
                            disablePictureInPicture
                            disableRemotePlayback
                            controls // Optional: Add controls if you want to show video controls
                            width="100%" // Optional: Add any other styling you need
                        >
                            <source src="https://a.storyblok.com/f/133769/x/996bf1f53a/columbia-pictures-grid-03-superbad.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                    <div className={s.media}>
                        <Image alt="alt" src="/clone/detail-work-page/grid14.webp" width={0} height={0} sizes="100vw" style={{ width: "100%", height: "auto" }} />
                    </div>
                </div>
                <div className={s.row} ref={domEffectBot}>
                    <div className={s.media}>
                        <Image alt="alt" src="/clone/detail-work-page/grid15.webp" width={0} height={0} sizes="100vw" style={{ width: "100%", height: "auto" }} />
                    </div>

                    <div className={s.media}>
                        <video
                            autoPlay
                            playsInline
                            loop
                            muted
                            disablePictureInPicture
                            disableRemotePlayback
                            controls // Optional: Add controls if you want to show video controls
                            width="100%" // Optional: Add any other styling you need
                        >
                            <source src="https://a.storyblok.com/f/133769/x/61193bb86f/columbia-pictures-grid-06-spiderman.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                    <div className={s.media}>
                        <Image alt="alt" src="/clone/detail-work-page/grid17.webp" width={0} height={0} sizes="100vw" style={{ width: "100%", height: "auto" }} />
                    </div>
                    <div className={s.media}>
                        <Image alt="alt" src="/clone/detail-work-page/grid18.webp" width={0} height={0} sizes="100vw" style={{ width: "100%", height: "auto" }} />
                    </div>
                </div>
            </div>
        </section>
    )
}
