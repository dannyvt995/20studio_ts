import React from 'react'

import s from './style.module.css'
import Image from 'next/image'
export default function Layout_4() {
    return (
        <section className='POST_layout4 has_padding_top_and_bottom greendam_background'>
            <div className={s.container}>
                <div className={s.media}>
                    <video
                        className={s.image}
                        autoPlay
                        playsInline
                        loop
                        muted
                        disablePictureInPicture
                        disableRemotePlayback
                        controls // Optional: Add controls if you want to show video controls
                        width="100%" // Optional: Add any other styling you need
                    >
                        <source src="https://a.storyblok.com/f/133769/x/257ba51f4f/studio-d-mockup-01.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
                <div  className="media">
                <Image alt="alt" src={"/clone/layout_component1__5.webp"} width={0} height={0} sizes="100vw" style={{ width: "100%", height: "auto" }} className={s.project_image} />
         
                </div>
                <h2   className={s.label}>
                        <svg  viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" className={s.icon}>
                            <path  d="M7.41908 4.56679L6.13722 0L4.85418 4.92566L0 6L4.85418 7.25435L6.13722 12L7.3276 7.25435L12 6L7.41908 4.56679Z" fill="currentColor"></path></svg>
                            360° Experience
                    </h2>
                    <div  className={s.body}>
                        <p>A 360° experience allows visitors to delve into Studio D’s work, offering a comprehensive view of 3D environments from every angle. This module was created so visitors can intimately experience the agency&apos;s high-end capabilities and fine details of their work.</p>
                        </div>
            </div>
        </section>
    )
}
