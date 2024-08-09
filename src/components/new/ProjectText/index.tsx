"use client"
import {useRef} from 'react'
import s from './style.module.css'
import cn from 'classnames'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger,useGSAP)
export default function ProjectText({ scroller,randomID,disableTitle }:{scroller:string,randomID:string,disableTitle:boolean}) {

  const container = useRef<any>()
  useGSAP(() => {
   
    const tl_title = gsap.timeline({
      scrollTrigger: {
        scroller: scroller,
        trigger: `#${randomID}`,
        start: "top 80%",
        end: "bottom 42%",
        scrub: .85,
 
      }
    });
    const tl_tag = gsap.timeline({
      scrollTrigger: {
        scroller: scroller,
        trigger:  `#${randomID} .${s.label}`,
        start: "top 80%",
        toggleActions: "play none none reverse",
      }
    });
    const tl_para = gsap.timeline({
      scrollTrigger: {
        scroller: scroller,
        trigger: `#${randomID} .${s.body}`,
        start: 'top 86%',
        end: 'bottom 42%',
        scrub: .85
      }
    });

    tl_title
    .set(`#${randomID} .${s.title_line}`, { y: '-130%', rotateZ: -10 })
    .to(`#${randomID} .${s.title_line}`, { y: 0, rotateZ: 0});
 
    tl_tag
      .set(`#${randomID} .${s.text}`, { scale: 0.5 })
      .set(`#${randomID} .${s.icon}`, { rotate: 72 })
      .to(`#${randomID} .${s.label}`, { opacity: 1 })
      .to(`#${randomID} .${s.text}`, { scale: 1 }, "<")
      .to(`#${randomID} .${s.icon}`, { rotate: 0 }, "<");
 


      
      tl_para
        .set(`#${randomID} .${s.para}`, { rotateZ: 4.2 })
        .to(`#${randomID} .${s.para}`, { 
          y: 0, 
          rotateZ: 0,
          rotateX: 0
        });
   
  },[])
  return (
    <section className={cn(s.project_text,"has_padding_top_and_bottom")} id={randomID} ref={container}>
      <div className={s.container}>
        {/* {disableTitle ? null : (
          <h2 className={cn(s.title ,s.is_normal)}>
            <span><span className={s.title_line}>Immersive</span></span>
            <span><span className={s.title_line}>Impression</span></span>
            <span><span className={s.title_line}>Encouraging</span></span>
          </h2>
        )} */}
          <h2 className={cn(s.title ,s.is_normal)}>
            <span><span className={s.title_line}>Immersive</span></span>
            <span><span className={s.title_line}>Impression</span></span>
            <span><span className={s.title_line}>Encouraging</span></span>
          </h2>
        <h3 className={s.label}>
          <svg  className={s.icon} viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path data-v-669b4a84="" d="M7.41908 4.56679L6.13722 0L4.85418 4.92566L0 6L4.85418 7.25435L6.13722 12L7.3276 7.25435L12 6L7.41908 4.56679Z" fill="currentColor"></path></svg>
          <div className={s.text}>Shows</div>
        </h3>
        <div className={s.body}>
          <p>
            <span><span className={s.para}>dsdsTo leave a lasting impression, we have created a custom horizontal scroll</span></span>
            <span><span className={s.para}>page that allows visitors to scroll through the shows while </span></span>
            <span><span className={s.para}>they are tantalized by beautiful visuals,</span></span>
            <span><span className={s.para}>encouraging them to explore further.</span></span>
          </p>
          </div>
      </div>
    </section>
  )
}
