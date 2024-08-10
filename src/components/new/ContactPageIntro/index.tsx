import React from 'react'
import cn from 'classnames'
import s from './style.module.css'


import Link from 'next/link'
import Image from 'next/image'
import ButtonHoverNew2 from '../ButtonHoverNew2'
import IconSVG from '@/components/Icon/IconSVG'
export default function ContactPageIntro() {
    return (
        <section className={s.ContactPageIntro}>
            <div className={s.container}>
                <div className={s.image}>
                   
                <Image  src="/home/banner.png" width={0} height={0} sizes='100vw'  style={{width:'auto',height:'100%',    position: 'absolute',left:'50%',transform: 'translateX(-50%)'}} alt="image_cache_banner_home" />
                </div>
              
                <h1 className={s.h1}>Contact</h1>
                <h2 className={s.title}>
                    <div className={s.marquee}>
                        <div className={s.line}>Get in touch · 保持联系 · Ponerse en contacto · Neem contact op · </div>
                    </div>
                </h2>
                <div className={s.left}>
                    <div className={s.body}><p>Sẵn sàng để cất cánh? Mess, tweet, tin nhắn và chúng tôi sẽ liên hệ lại sớm nhất có thể.</p></div>
                    <ul className={s.contact}>
                        <li className={s.contact_item}>
                        <ButtonHoverNew2 
                            icon={<IconSVG src='/icon/arrow-right.svg' />} 
                            targetRedirect='mailto:vphcm@studio.vn' 
                            classAdd={cn(s.link,s.is_dark)}>
                            vphcm@20studio.com
                        </ButtonHoverNew2>
                           
                        </li>
                        <li className={s.contact_item}>
                        <ButtonHoverNew2 
                            icon={<IconSVG src='/icon/arrow-right.svg' />} 
                            targetRedirect='0902706605' 
                            classAdd={cn(s.link,s.is_dark)}>
                            090.270.6605
                        </ButtonHoverNew2>
                           
                        </li>
                    </ul>
                </div>
                <div className={s.right}>
                    <a className={s.address}>
                        30 Lý Chính Thắng,<br/>
                        Quận 3,<br/>
                        Hồ Chí Minh
                    </a>

                    <ButtonHoverNew2 
                            icon={<IconSVG src='/icon/arrow-right.svg' />} 
                            targetRedirect='0902706605' 
                            classAdd={cn(s.link,s.is_dark)}>
                            Xem bản đồ
                        </ButtonHoverNew2>

                   
                </div>
            </div>
        </section>
    )
}
