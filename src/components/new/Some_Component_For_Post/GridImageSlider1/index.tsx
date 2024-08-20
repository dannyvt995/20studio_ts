"use client"
import { useRef, memo } from 'react';
import Image from 'next/image'; // hoặc thư viện Image bạn đang dùng
import s from './style.module.css'; // hoặc nơi bạn đang import CSS module
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(useGSAP,ScrollTrigger)
function GridImageSlider({ propsForGsap, content }:{propsForGsap:any, content:any }) {
    const triggleSection = useRef(null);
    const domEffectTop = useRef(null);
    const domEffectBot = useRef(null);

      
    useGSAP(() => {
        gsap.timeline({
            scrollTrigger: {
                scroller: propsForGsap.scrollerRef,
                trigger: triggleSection.current,
                start: "top bottom",
                end: "bottom top",
                scrub: true
            }
        }) .set(domEffectTop.current, { x: -50 })
            .set(domEffectBot.current, { x: 200 })
            .to(domEffectTop.current, {
                x: 50
            }).to(domEffectBot.current, {
                x: 0
            }, "<")
    })

   

    return (
        <section className={s.GridImageSlider} ref={triggleSection}>
                  <div className={s.titleProject}>
                    <h2 className={s.nameProject}>Personal Prject of Bui Quang Duy</h2>
                    <p className={s.infoProject}>Congratulations to Huyenh Anh Thu on achieving valedictorian!</p>
                  </div>
            <div className={s.container}>
                <div className={s.row} ref={domEffectTop}>
                    {content.img.slice(0, 3).map((src:string, index:number) => (
                        <div key={index} className={s.media}>
                            <Image
                                alt="image_cache_work"
                                src={src}
                                width={0}
                                height={0}
                                sizes="100vw"
                                style={{ width: "100%", height: "auto" }}
                               
                            />
                        </div>
                    ))}
                </div>
                <div className={s.row} ref={domEffectBot}>
                    {content.img.slice(3, 6).map((src:string, index:number) => (
                        <div key={index} className={s.media}>
                            <Image
                                alt="image_cache_work"
                                src={src}
                                width={0}
                                height={0}
                                sizes="100vw"
                                style={{ width: "100%", height: "auto" }}
                            
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default memo(GridImageSlider);