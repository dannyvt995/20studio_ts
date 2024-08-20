'use client';
import { useEffect, useRef } from 'react'
import cn from 'classnames'
import s from './style.module.css'
import Image from 'next/image'

import IconSVG from '@/components/Icon/IconSVG'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import Link from 'next/link';
gsap.registerPlugin(useGSAP)
export default function ServicesSection() {
    const container = useRef<any>()
    const listItemRef = useRef<any>()
    const { contextSafe } = useGSAP({ scope: listItemRef })
    const timelines = useRef<Record<number, gsap.core.Timeline>>({});

    useGSAP(() => {
        const items = listItemRef.current.children;
        for (let i = 0; i < items.length; i++) {
            const infoElement = items[i].querySelector(`.${s.info}`);
            const imgElement = items[i].querySelector(`.${s.block} img`);
            timelines.current[i] = gsap.timeline({ paused: true })
                .fromTo(infoElement, {
                    y: '100%',
                }, {
                    y: 0,
                    duration: 0.5,
                    ease: "power3.out"
                }).to(imgElement,{
                    scale:1.1,
                      duration:1,
                    ease: "power3.inOut"
                },"<")

        }
    }, { scope: container })


    const actionGsap = contextSafe((e: any) => {
        const id = e.currentTarget.getAttribute('data-id');
        timelines.current[id].play(0);
    })

    const disableGsap = contextSafe((e: any) => {
        const id = e.currentTarget.getAttribute('data-id');
        timelines.current[id].reverse();
    })
    return (
        <section ref={container} className={cn(s.servcies_section, s.light_background)} id="servcies_section">
            <div className={s.container}>
                <div className={s.text}>
                    <h2 className={s.lable}>
                        <IconSVG src='/icon/star.svg' className={s.icon} />
                        Project list</h2>
                    <h3 className={s.title}>Project</h3>
                    <div className={s.body}>
                        <p>Projects are pleased to accompany customers in the past year.</p>
                    </div>
                </div>
            </div>
            <div className={s.services} ref={listItemRef}>
               
                <Link className={s.service}
                    data-id="0"
                    onMouseEnter={(e) => actionGsap(e)}
                    onMouseLeave={(e) => disableGsap(e)}
                    href='/work/work1'
                >
                    <div className={s.block}>
                        <Image  src="/clone/services1.webp" width={0} height={0} sizes="100vw" style={{ width: "100%", height: "auto" }} alt="image_cache_services1" />
                    </div>
                    <div className={s.w_info}>
                        <p className={s.info}>
                            <span className={s.nameprj}>Chinh’s Major Project - </span>
                            <span className={s.jobdes}>Sample Development</span>
                        </p>
                    </div>
                   
                </Link>
                <Link className={s.service}
                    data-id="1"
                    onMouseEnter={(e) => actionGsap(e)}
                    onMouseLeave={(e) => disableGsap(e)}
                         href='/work/work2'
                >
                    <div className={s.block}>
                        <Image  src="/clone/services2.webp" width={0} height={0} sizes="100vw" style={{ width: "100%", height: "auto" }} alt="image_cache_services2" />
                    </div>
                    <div className={s.w_info}>
                    <p className={s.info}>
                        <span className={s.nameprj}>Nét Project - </span>
                        <span className={s.jobdes}>Sample Development</span>
                    </p>
                    </div>
                   
                </Link>
                <Link className={s.service}
                    data-id="2"
                    onMouseEnter={(e) => actionGsap(e)}
                    onMouseLeave={(e) => disableGsap(e)}
                         href='/work/work3'
                >
                    <div className={s.block}>
                        <Image  src="/clone/services3.webp" width={0} height={0} sizes="100vw" style={{ width: "100%", height: "auto" }} alt="image_cache_services3" />
                    </div>
                    <div className={s.w_info}>
                    <p className={s.info}>
                        <span className={s.nameprj}>Lung Tung - </span>
                        <span className={s.jobdes}>Fashion Design</span>

                    </p>
                    </div>
                    
                </Link>
                <Link className={s.service}
                    data-id="3"
                    onMouseEnter={(e) => actionGsap(e)}
                    onMouseLeave={(e) => disableGsap(e)}
                         href='/work/work4'
                >
                    <div className={s.block}>
                        <Image
                            
                            src="/clone/services4.webp"
                            width={0} height={0} sizes="100vw" style={{ width: "100%", height: "auto" }} alt="image_cache_services4"
                        />
                    </div>
                    <div className={s.w_info}>
                        <p className={s.info}>
                            <span className={s.nameprj}>20Studio - </span>
                            <span className={s.jobdes}>Website Development</span>
                        </p>

                    </div>
                   
                </Link>
            </div>
        </section>
    )
}
