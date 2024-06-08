
"use client"

import { memo, useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import cn from 'classnames'
import s from './style.module.css'
import Image from 'next/image'
import { useGSAP } from '@gsap/react';
import { isMobile } from '@/utils/responsive';
import { IPropsFromTransition } from '@/types/common';
gsap.registerPlugin(ScrollTrigger)
interface ILetContact {
  state:string,
  propsForGsap: any
}
function LetContact({ propsForGsap,state }: ILetContact) {
  const triggleSection = useRef<HTMLUListElement>(null)

  useGSAP(() => {
    if (isMobile()) return
    let timeoutId: NodeJS.Timeout;
    if (state === 'entered') {
      const listImg = Array.prototype.slice.call(triggleSection.current?.children)
      timeoutId = setTimeout(() => {
        gsap.timeline({
          scrollTrigger: {
            scroller: propsForGsap.scrollerRef,
            trigger: triggleSection.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          }
        })
          .to([listImg[1], listImg[3]], {
            x: -100
          }
          ).to(
            [listImg[2], listImg[4]], {
            x: 100
          }
            , "<")
      }, 500)
    }
    return () => clearTimeout(timeoutId);
  }, { dependencies: [state] })

  return (
    <section className={cn(s.letcontact_section, s.light_background)} id="letcontact_section" >
      <div className={s.container}>
        <ul className={s.media_wrapper} ref={triggleSection}>
          <li className={s.media}>

            <Image sizes="100vw" alt="d" src="/clone/letcontact_center.webp" width={0} height={0} style={{ width: "100%", height: "auto" }} quality={42} />
          </li>
          <li className={s.media}>
            <Image sizes="100vw" alt="d" src="/clone/letcontact_top-left.webp" width={0} height={0} style={{ width: "auto", height: "100%" }} quality={42} />
          </li>

          <li className={s.media}>
            <Image sizes="100vw" alt="d" src="/clone/media1_n.webp" width={0} height={0} style={{ width: "100%", height: "auto" }} quality={42} />
          </li>
          <li className={s.media}>
            <Image sizes="100vw" alt="d" src="/clone/letcontact_bottom-right.webp" width={0} height={0} style={{ width: "100%", height: "auto" }} quality={42} /></li>
          <li className={s.media}>
            <Image sizes="100vw" alt="d" src="/clone/letcontact_bottom-left.webp" width={0} height={0} style={{ width: "100%", height: "auto" }} quality={42} />
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
          <a className={cn(s.link, s.is_dark)}>
            <div className={s.wrap}>
              Browse all news
            </div>
          </a>
        </div>
      </div>

    </section>
  )
}

export default LetContact