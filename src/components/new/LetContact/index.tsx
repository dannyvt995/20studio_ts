
"use client"

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import cn from 'classnames'
import s from './style.module.css'
import Image from 'next/image'
import ImagePreload from '@/components/ImagePreload';

interface ILetContact {
  propsForGsap:any
}
export default function LetContact({ propsForGsap }:ILetContact) {
  const triggleSection = useRef(null)
  const domEffect = useRef(null)
  const timelineRef = useRef(null)

  // useEffect(() => {
  //   if (propsForGsap.stateTransitionPage === 'entered') {
  //     if (window.innerWidth < 620) return
  //     gsap.registerPlugin(ScrollTrigger)
  //     console.log("\t\t=>Reinit/init scrolltriggle on component FooterSection")

  //     const ctx = gsap.context(() => {
  //       timelineRef.current = gsap.timeline({
  //         scrollTrigger: {
  //           scroller: propsForGsap.scrollerRef,
  //           trigger: triggleSection.current,
  //           start: "top bottom",
  //           end: "bottom top",
  //           scrub: true
  //         }
  //       })
  //       timelineRef.current.to(
  //         [triggleSection.current.children[1], triggleSection.current.children[3]], {
  //         x: -100
  //       }
  //       ).to(
  //         [triggleSection.current.children[2], triggleSection.current.children[4]], {
  //         x: 100
  //       }
  //         , "<")
  //       return () => {
  //         ctx.revert();
  //         timelineRef.current?.kill()
  //         timelineRef.current = null
  //         triggleSection.current = null
  //       }
  //     });

  //   }else{
  //     console.log("\t\t=>Lock Gsap until onEnterd",propsForGsap.scrollerRef)
  // }

  // }, [propsForGsap])
  return (
    <section className={cn(s.letcontact_section,s.light_background)} id="letcontact_section" >
      <div className={s.container}>
        <ul className={s.media_wrapper} ref={triggleSection}>
          <li className={s.media}>
     
            <ImagePreload alt="d" src="/clone/letcontact_center.webp" width={0} height={0} style={{ width: "100%", height: "auto" }} quality={42} />
          </li>
          <li className={s.media}>
            <ImagePreload alt="d" src="/clone/letcontact_top-left.webp" width={0} height={0} style={{ width: "auto", height: "100%" }} quality={42} />
          </li>

          <li className={s.media}>
            <ImagePreload alt="d" src="/clone/media1_n.webp" width={0} height={0} style={{ width: "100%", height: "auto" }} quality={42} />
          </li>
          <li className={s.media}>
            <ImagePreload alt="d" src="/clone/letcontact_bottom-right.webp" width={0} height={0} style={{ width: "100%", height: "auto" }} quality={42} /></li>
          <li className={s.media}>
            <ImagePreload alt="d" src="/clone/letcontact_bottom-left.webp" width={0} height={0} style={{ width: "100%", height: "auto" }} quality={42} />
          </li>
        </ul>
        <div className={s.text}>
          <h2 className={s.lable}>
            In the media
          </h2>
          <h1 className={s.title}>
            <div className={s.title_line}>Spread</div>
            <div className={s.title_line}>the News</div>
          </h1>
          <div className={s.body}>
            <p>Biến ý tưởng thú vị nhất thành hiện thực với nghiệp vụ và công nghệ.</p>
          </div>
          <a className={cn(s.link,s.is_dark)}>
            <div className={s.wrap}>
              Browse all news
            </div>
          </a>
        </div>
      </div>

    </section>
  )
}
