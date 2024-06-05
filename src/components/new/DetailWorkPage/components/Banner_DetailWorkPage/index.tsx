import React from 'react'
import s from './style.module.css'
import Image from 'next/image'
export default function Banner_DetailWorkPage() {
  return (
    <section className={s.Banner_DetailWorkPage}>
        <div className={s.container}>
            <div className={s.text_1}>
                <h1 className={s.title}>
                    <span>Building</span>
                    <span>Digital</span>
                    <span>Presence</span>
                </h1>
                <h2 className={s.subtitle}>
                    <span>Digital experiences with maximum emotional impact</span>
                </h2>
              
            </div>
            <div className={s.text_2}>
                <div className={s.body}>
                    <h3>We explore and push the boundaries of digital for brands and businesses that strive to enhance people&quot;s lives through exceptional experiences.</h3>
                    <p>For over a decade, we&quot;ve been using profound design aesthetics, meticulously crafted details, and surprising interactions to create digital experiences that spark conversation, inspire action, and drive desirability.</p>
                </div>
            </div>
            <div className={s.background}>
                <Image src="/home/banner.png" 
                            alt="alt" width={0} height={0} sizes="100vw" 
                            style={{width:"100%",height:"auto"}} />
            </div>
        </div>
    </section>
  )
}
