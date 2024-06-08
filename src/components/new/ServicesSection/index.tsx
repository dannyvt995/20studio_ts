import React from 'react'
import cn from 'classnames'
import s from './style.module.css'
import Image from 'next/image'


import StarIcon from '@/components/Icon/StarIcon'
export default function ServicesSection() {
    return (
        <section className={cn(s.servcies_section,s.light_background)} id="servcies_section">
            <div className={s.container}>
                <div className={s.text}>
                    <h2 className={s.lable}>
                        <StarIcon src='/icon/star.svg' className={s.icon}/>
                        Danh mục sản phẩm</h2>
                    <h3 className={s.title}>Dự án</h3>
                    <div className={s.body}>
                        <p>Các dự án hân hạnh được đồng hành cùng khách hàng trong năm qua</p>
                    </div>
                </div>
            </div>
            <div className={s.services}>
                <a className={s.service}>
                    <div className={s.block}>
                        <Image src="/clone/ser1.jpg" width={0} height={0} sizes="100vw" style={{ width: "100%", height: "auto" }} alt="services1" />
                    </div>
                    <p className={s.info}>
                        <span><strong>Chinh’s Major Project - </strong>Phát triển mẫu</span>
                    </p>
                </a>
                <a className={s.service}>
                    <div className={s.block}>
                    <Image src="/clone/ser2.jpg" width={0} height={0} sizes="100vw" style={{ width: "100%", height: "auto" }} alt="services1" />
                    </div>
                    <p className={s.info}>
                        <span><strong>Nét Project - </strong>Phát triển mẫu</span>
                    </p>
                </a>
                <a className={s.service}>
                    <div className={s.block}>
                    <Image src="/clone/ser3.jpg" width={0} height={0} sizes="100vw" style={{ width: "100%", height: "auto" }} alt="services1" />
                    </div>
                    <p className={s.info}>
                        <span><strong>Lung Tung - </strong>Quản lí sản xuất</span>
                    </p>
                </a>
                <a className={s.service}>
                    <div className={s.block}>
                        <Image
                            src="/clone/services1.webp"
                            width={0} height={0} sizes="100vw" style={{ width: "100%", height: "auto" }} alt="services1"
                        />
                    </div>
                    <p className={s.info}>
                        <span><strong>20Project -</strong>Thiết kế đồ hoạ</span>
                    </p>
                </a>
            </div>
        </section>
    )
}
