import React from 'react'
import cn from 'classnames'
import s from './style.module.css'

import ImagePreload from '@/components/ImagePreload'
export default function ContactPageIntro() {
    return (
        <section className={s.ContactPageIntro}>
            <div className={s.container}>
                <div className={s.image}>
                   
                <ImagePreload  src="/home/banner.webp" width={0} height={0}  style={{width:'auto',height:'100%',    position: 'absolute',left:'50%',transform: 'translateX(-50%)'}} alt="e" />
                </div>
              
                <h1 className={s.h1}>Contact</h1>
                <h2 className={s.title}>
                    <div className={s.marquee}>
                        <div className='line'>Get in touch · 保持联系 · Ponerse en contacto · Neem contact op · </div>
                    </div>
                </h2>
                <div className={s.left}>
                    <div className={s.body}><p>Sẵn sàng để cất cánh? Mess, tweet, tin nhắn và chúng tôi sẽ liên hệ lại sớm nhất có thể.</p></div>
                    <ul className={s.contact}>
                        <li className={s.contact_item}>
                            <a href="mailto:hello@exoape.com" className={cn(s.link,s.is_dark)}>
                            vphcm@20studio.com
                            </a>
                        </li>
                        <li className={s.contact_item}>
                            <a href="tel:+31 772 086 200" className={cn(s.link,s.is_dark)}>
                                +11 222 333 444
                            </a>
                        </li>
                    </ul>
                </div>
                <div className={s.right}>
                    <a className={s.address}>
                        30 Lý Chính Thắng,<br/>
                        Quận 3,<br/>
                        Hồ Chí Minh
                    </a>
                    <a className={s.link}>Xem bản đồ</a>
                </div>
            </div>
        </section>
    )
}
