import React from 'react'
import s from './style.module.css'
import cn from 'classnames'
export default function FAQSection() {
  return (
    <section className={cn(s.faq_section,s.has_padding_top_and_bottom,s.white_bg)}>
         <div className={s.container}>
         <h2 className={cn(s.title ,s.is_normal)}>
            <div className={s.title_line}>Câu hỏi</div>
            <div className={s.title_line}>thường gặp</div>
          </h2>

        <h2 className={s.label}>
          <svg viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" className={s.icon}><path data-v-669b4a84="" d="M7.41908 4.56679L6.13722 0L4.85418 4.92566L0 6L4.85418 7.25435L6.13722 12L7.3276 7.25435L12 6L7.41908 4.56679Z" fill="currentColor"></path></svg>
          <div className={s.text}>FAQs</div>
        </h2>
        <div className={s.dif}>
            <ul className={s.list_item}>
                <li className={s.item}>
                    <span><p>Thời gian lên mẫu kéo dài bao lâu?</p></span>
                    <span><p>Thời gian lên mẫu sẽ phụ thuộc vào độ phức tạp của mẫu, nhưng thông thường sẽ kéo dài từ 2 đến 5 ngày</p></span>
                </li>
                <li className={s.item}>
                    <span><p>Thời gian sản xuất kéo dài bao lâu?</p></span>
                    <span><p>Thời gian sản xuất sẽ phụ thuộc vào số lượng và thông tin đơn hàng, thông thường cho số lượng 200 đơn vị sản phẩm đơn giản như áo thun sẽ cần 5 ngày để hoàn thành</p></span>
                </li>
                <li className={s.item}>
                    <span><p>Tôi cần cung cấp những thông tin gì cho 20Studio?</p></span>
                    <span><p>Bạn sẽ cần cung cấp các thông tin liên quan tới mẫu mã, số lượng và các yêu cầu đặc biệt liên quan đến đơn hàng, những thông tin sẽ được trao đổi kỹ lưỡng ở các cuộc họp giữa khách hàng và 20Studio</p></span>
                </li>
                <li className={s.item}>
                    <span><p>20Studio cung cấp những dịch vụ nào?</p></span>
                    <span><p>Chúng tôi có khả năng cung cấp các dịch vụ từ thiết kế, phát triển sản phẩm, sản xuất, xây dựng hệ thống, website, quản lí hình ảnh, quản lí sản xuất...</p></span>
                </li>
            </ul>
        </div>

      </div>
    </section>
  )
}
