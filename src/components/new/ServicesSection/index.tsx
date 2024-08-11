'use client';
import { useEffect, useRef } from 'react'
import cn from 'classnames'
import s from './style.module.css'
import Image from 'next/image'

import IconSVG from '@/components/Icon/IconSVG'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
gsap.registerPlugin(useGSAP)
export default function ServicesSection() {
    const container = useRef<any>()
    const listItemRef = useRef<any>()
    const { contextSafe } = useGSAP({ scope: container })
    const timelines = useRef<Record<number, gsap.core.Timeline>>({});

    useGSAP(() => {
        const items = listItemRef.current.children;
        for (let i = 0; i < items.length; i++) {
            const infoElement = items[i].querySelector(`.${s.info}`);
            timelines.current[i] = gsap.timeline({ paused: true })
                .fromTo(infoElement, {
                    y: '100%',
                }, {
                    y: 0,
                    duration: 0.5,
                    ease: "power3.out"
                })

        }
    }, { scope: container })


    const actionGsap = contextSafe((e: any) => {
        const id = e.currentTarget.getAttribute('data-id');
        timelines.current[id].play(0);
    })

    const disableGsap = ((e: any) => {
        const id = e.currentTarget.getAttribute('data-id');
        timelines.current[id].reverse();
    })
    return (
        <section ref={container} className={cn(s.servcies_section, s.light_background)} id="servcies_section">
            <div className={s.container}>
                <div className={s.text}>
                    <h2 className={s.lable}>
                        <IconSVG src='/icon/star.svg' className={s.icon} />
                        Danh mục sản phẩm</h2>
                    <h3 className={s.title}>Dự án</h3>
                    <div className={s.body}>
                        <p>Các dự án hân hạnh được đồng hành cùng khách hàng trong năm qua</p>
                    </div>
                </div>
            </div>
            <div className={s.services} ref={listItemRef}>
                <a className={s.service}
                    data-id="0"
                    onMouseEnter={(e) => actionGsap(e)}
                    onMouseLeave={(e) => disableGsap(e)}
                >
                    <div className={s.block}>
                        <Image priority src="/clone/ser1.jpg" width={0} height={0} sizes="100vw" style={{ width: "100%", height: "auto" }} alt="services1" />
                    </div>
                    <div className={s.w_info}>
                        <p className={s.info}>
                            <span className={s.nameprj}>Chinh’s Major Project - </span>
                            <span className={s.jobdes}>Phát triển mẫu</span>
                        </p>
                    </div>
                   
                </a>
                <a className={s.service}
                    data-id="1"
                    onMouseEnter={(e) => actionGsap(e)}
                    onMouseLeave={(e) => disableGsap(e)}
                >
                    <div className={s.block}>
                        <Image priority src="/clone/ser2.jpg" width={0} height={0} sizes="100vw" style={{ width: "100%", height: "auto" }} alt="services1" />
                    </div>
                    <div className={s.w_info}>
                    <p className={s.info}>
                        <span className={s.nameprj}>Nét Project - </span>
                        <span className={s.jobdes}>Phát triển mẫu</span>
                    </p>
                    </div>
                   
                </a>
                <a className={s.service}
                    data-id="2"
                    onMouseEnter={(e) => actionGsap(e)}
                    onMouseLeave={(e) => disableGsap(e)}
                >
                    <div className={s.block}>
                        <Image priority src="/clone/ser3.jpg" width={0} height={0} sizes="100vw" style={{ width: "100%", height: "auto" }} alt="services1" />
                    </div>
                    <div className={s.w_info}>
                    <p className={s.info}>
                        <span className={s.nameprj}>Lung Tung - </span>
                        <span className={s.jobdes}>Quản lí sản xuất</span>

                    </p>
                    </div>
                    
                </a>
                <a className={s.service}
                    data-id="3"
                    onMouseEnter={(e) => actionGsap(e)}
                    onMouseLeave={(e) => disableGsap(e)}
                >
                    <div className={s.block}>
                        <Image
                            priority
                            src="/clone/services1.webp"
                            width={0} height={0} sizes="100vw" style={{ width: "100%", height: "auto" }} alt="services1"
                        />
                    </div>
                    <div className={s.w_info}>
                        <p className={s.info}>
                            <span className={s.nameprj}>20 Project - </span>
                            <span className={s.jobdes}>Thiết kế đồ hoạ</span>
                        </p>

                    </div>
                   
                </a>
            </div>
        </section>
    )
}
