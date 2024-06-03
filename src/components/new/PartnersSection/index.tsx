import React from 'react'
import s from './style.module.css'
import cn from 'classnames'
export default function PartnersSection() {
  return (
    <section className={cn(s.white_bg ,s.partners_section,s.has_padding_top_and_bottom)}>
      <div className={s.container}>
        <h2 className={cn(s.title ,s.is_normal)}>
          <div className={s.title_line}>Đối tác</div>
          <div className={s.title_line}>đồng hành</div>
        </h2>

        <h2 className={s.label}>
          <svg viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" className={s.icon}><path data-v-669b4a84="" d="M7.41908 4.56679L6.13722 0L4.85418 4.92566L0 6L4.85418 7.25435L6.13722 12L7.3276 7.25435L12 6L7.41908 4.56679Z" fill="currentColor"></path></svg>
          <div className={s.text}>Đối tác</div>
        </h2>
  

      </div>
      <div className={s.dif}>

      </div>
    </section>
  )
}
