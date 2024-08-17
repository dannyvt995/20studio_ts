import React from 'react'
import s from './style.module.css'
import Image from 'next/image'
import cn from 'classnames'

export default function Us() {
    return (
        <section  className={cn(s.aboutus_us,s.dark_background)} >
            <div  className={s.container}>
                <h2   className={s.label}>
                    <svg  viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" className={s.icon}>
                        <path  d="M7.41908 4.56679L6.13722 0L4.85418 4.92566L0 6L4.85418 7.25435L6.13722 12L7.3276 7.25435L12 6L7.41908 4.56679Z" fill="currentColor"></path>
                    </svg>
                    <div  className={s.text}>The 20?</div>
                </h2>  
                <h3 className={s.title}>
                    <div className={s.title_mask}>
                        <div className={s.title_line}>Design,</div>
                    </div>
                    <div className={s.title_mask}>
                        <div className={s.title_line}>Technology and</div>
                    </div>
                    <div className={s.title_mask}>
                        <div className={s.title_line}>Experimenttation</div>
                    </div>
                </h3>
                <div className={s.body}>
                    <p>We are a team* of like-minded design enthusiasts and tech aficionados that explore the digital frontier with grit and dedication. Intrigued by beauty, fascinated by technology and fuelled with an everlasting devotion to digital craftsmanship and meaningful aesthetics.</p>
                </div>
                <div className={s.images}>
                    <div className={s.image} >
                        <Image
                            src="/about/us1.png"
                            width={0}
                            height={0}
                            sizes="100vw"
                            style={{ width: "100%", height: "auto" }}
                            alt="intro_aboutus 2"
                        />
                    </div>
                    <div className={s.image}>
                        <Image
                            src="/about/us2.png"
                            width={0}
                            height={0}
                            sizes="100vw"
                            style={{ width: "100%", height: "auto" }}
                            alt="intro_aboutus 2"
                        />
                    </div>
                </div>
                <blockquote className={s.quote}>
                    *We believe in a fluid team approach that allows us to bring together the best designers, developers and agencies in the world in order to serve the needs of today’s clients.
                </blockquote>
            </div>
        </section>
    )
}
