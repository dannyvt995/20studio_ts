import React from 'react'
import s from './style.module.css'
import cn from 'classnames'
export default function FAQSection() {
  return (
    <section className={cn(s.faq_section,s.has_padding_top_and_bottom,s.white_bg)}>
         <div className={s.container}>
         <h2 className={cn(s.title ,s.is_normal)}>
            <div className={s.title_line}>FAQ’S</div>
          {/*   <div className={s.title_line}>thường gặp</div> */}
          </h2>

        <h2 className={s.label}>
          <svg viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" className={s.icon}><path data-v-669b4a84="" d="M7.41908 4.56679L6.13722 0L4.85418 4.92566L0 6L4.85418 7.25435L6.13722 12L7.3276 7.25435L12 6L7.41908 4.56679Z" fill="currentColor"></path></svg>
          <div className={s.text}>FAQs</div>
        </h2>
        <div className={s.dif}>
            <ul className={s.list_item}>
                <li className={s.item}>
                    <span><p>What is the lead time of sample develop?</p></span>
                    <span><p>Thời gian lên mẫu sẽ phụ thuộc vào độ phức tạp của mẫu, nhưng thông thường sẽ kéo dài từ 2 đến 5 ngày</p></span>
                </li>
                <li className={s.item}>
                    <span><p>What is the production leadtime?</p></span>
                    <span><p>It depend on the quantity and complexity of the order. Normally takes 5 to 14 working days to be done.</p></span>
                </li>
                <li className={s.item}>
                    <span><p>What information do I need to provide?</p></span>
                    <span><p>You will be provide a form to fill in, the information will be on quality, quantity, specs and construction details.</p></span>
                </li>
                <li className={s.item}>
                    <span><p>What are services that 20Studio provide?</p></span>
                    <span><p>We focus on providing fashion design, fashion mass production, image production, website development, marketing strategies and fashion business solutions.</p></span>
                </li>
            </ul>
        </div>

      </div>
    </section>
  )
}
