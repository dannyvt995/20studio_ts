import React from 'react'
import s from './style.module.css'
import cn from 'classnames'
export default function ProjectText({ disableTitle }:{disableTitle:boolean}) {
  
  return (
    <section className={cn(s.project_text,"has_padding_top_and_bottom")}>
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
          <svg viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" className={s.icon}><path data-v-669b4a84="" d="M7.41908 4.56679L6.13722 0L4.85418 4.92566L0 6L4.85418 7.25435L6.13722 12L7.3276 7.25435L12 6L7.41908 4.56679Z" fill="currentColor"></path></svg>
          <div className={s.text}>Shows</div>
        </h3>
        <div className={s.body}>
          <p>
            <span><span>To leave a lasting impression, we have created a custom horizontal scroll</span></span>
            <span><span>page that allows visitors to scroll through the shows while </span></span>
            <span><span>they are tantalized by beautiful visuals,</span></span>
            <span><span>encouraging them to explore further.</span></span>
          </p>
          </div>
      </div>
    </section>
  )
}
