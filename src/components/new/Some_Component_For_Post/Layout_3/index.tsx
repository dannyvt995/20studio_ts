import React from 'react'

import s from './style.module.css'
import Image from 'next/image'
export default function Layout_3() {
    return (
        <section className='POST_layout3 has_padding_top_and_bottom align-text-right cream_background'>
            <div className={s.container}>
                <div className={s.text}>
                    <h2  className={s.label}>
                        <svg  viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" className={s.icon}><path  d="M7.41908 4.56679L6.13722 0L4.85418 4.92566L0 6L4.85418 7.25435L6.13722 12L7.3276 7.25435L12 6L7.41908 4.56679Z" fill="currentColor"></path></svg>
                        Stand-out Experience
                    </h2>
                    <div className={s.body}>
                        <p>With a shared vision on quality, we set out to design a stand-out digital presence that not only attracts attention but also reinforces the agency's brand values, builds trust, and differentiates it from the competition, ultimately driving business growth and success.</p>
                    </div>
                </div>
                <div className="left">
                    <div className="media">
                        <Image alt="alt" src={"/clone/layout_component2__1.webp"} width={0} height={0} sizes="100vw" style={{ width: "100%", height: "auto" }} />
                    </div>
                </div>
                <div className="right">
                    <div className="media">
                    <video
                            autoPlay
                            playsInline
                            loop
                            muted
                            disablePictureInPicture
                            disableRemotePlayback
                            controls // Optional: Add controls if you want to show video controls
                            width="100%" // Optional: Add any other styling you need
                        >
                            <source src="https://a.storyblok.com/f/133769/x/77668bcbcf/studio-d-webdesign-02.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                      
                    </div>
                    <div className="media">
                    <video
                            autoPlay
                            playsInline
                            loop
                            muted
                            disablePictureInPicture
                            disableRemotePlayback
                            controls // Optional: Add controls if you want to show video controls
                            width="100%" // Optional: Add any other styling you need
                        >
                            <source src="https://a.storyblok.com/f/133769/x/77acb98bce/studio-d-webdeisgn-03.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>

                    </div>
                </div>
            </div>
        </section>
    )
}
