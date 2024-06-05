import React from 'react'
import s from './style.module.css'
import cn from 'classnames'
import Image from 'next/image'
export default function Layout_2() {
  return (
    <section className={cn(s.POST_layout2,"has_padding_top_and_bottom")}>
        <div className={s.container}>
            <h2 className={s.title}>
                <div className={s.title_mask}>
                    <span className={s.title_line}>Stellar</span>
                    </div>
                    <div className={s.title_mask}>
                    <span className={s.title_line}>Partnership</span>
            </div>
            </h2>
            <h2 className={s.label}>
                <svg  viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" className={s.icon}><path  d="M7.41908 4.56679L6.13722 0L4.85418 4.92566L0 6L4.85418 7.25435L6.13722 12L7.3276 7.25435L12 6L7.41908 4.56679Z" fill="currentColor"></path></svg>
                <div  className={s.text}>From the client</div>
            </h2>
            <blockquote className={s.blockquote}><div className={s.body}><p>When I discovered Exo Ape’s website, I knew these guys were perfect fit. We were considering options with a few agencies, but these guys stood out head and shoulders. Their attention to design, motion, and user experience is unlike anything I had seen before, and we feel honored to have partnered with them. The results speak for themselves - we’re ecstatic.</p></div></blockquote>
            <div className={s.author}>
            <Image className={s.avatar} src={"/clone/layout_component2__1.webp"} width={0} height={0} sizes="100vw" style={{ width: "100%", height: "auto" }} alt="alt" />
                <p className={s.details}>
        Marvin Nooitgedacht<br/> <span>CEO</span></p></div>
        </div>
    </section>
  )
}
