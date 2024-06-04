import React from 'react'
import s from './style.module.css'
import cn from 'classnames'
import Image from 'next/image'
export default function Minded() {
    return (
        <section className={cn(s.aboutus_minded, s.light_background)}>
            <div className={s.container}>
                <h2 className={s.label}>
                    <svg viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" className={s.icon}>
                        <path d="M7.41908 4.56679L6.13722 0L4.85418 4.92566L0 6L4.85418 7.25435L6.13722 12L7.3276 7.25435L12 6L7.41908 4.56679Z" fill="currentColor"></path>
                    </svg>
                    <div className={s.text}>What we believe</div>
                </h2>
                <h2 className={s.title}>
                    <div className={s.title_mask}>
                        <div className={s.title_line}>&quot;Agency&quot; </div>
                    </div>
                    <div className={s.title_mask}>
                        <div className={s.title_line}>— trong</div>
                    </div>
                    <div className={s.title_mask}>
                        <div className={s.title_line}>ngành thời trang</div>
                    </div>
                    {/*     <div className={s.title_mask}>
                        <div className={s.title_line}>Converts</div>
                    </div> */}
                </h2>
                <div className={s.body}>
                    <p>Tổ chức hoạt động như một “Agency”, 20Studio tạo ra giá trị bằng cách cung cấp các dịch vụ thiết kế, phát triển, xây dựng và quản lý cho các thương hiệu thời trang.</p>
                    <p>Sát cánh cùng khách hàng trong hành trình phát triển thượng hiệu thời trang, xây dựng và sản xuất các bộ sưu tập cũng như hỗ trợ quản lí hình ảnh thương hiệu, kinh doanh và sản xuất.</p>
                </div>
                <blockquote className={s.quote}>
                    “Với lợi thế am hiểu thị trường và ứng dụng công nghệ, chúng tôi có thể giúp khách hàng biến thiết kế của họ thành hiện thực”
                </blockquote>
            </div>
            <div className={s.image} style={{ clipPath: "polygon(6.68% 0px, 93.32% 0px, 93.32% 100%, 6.68% 100%)" }}>
                <Image
                    src="/clone/aboutus/minded_1.webp"
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: "100%", height: "auto" }}
                    alt="intro_aboutus 2"
                />
            </div>
            <div className={s.background}>
                <div className={s.dark}></div>
                <div className={s.light}></div>
            </div>
        </section>
    )
}
