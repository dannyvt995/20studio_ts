import { memo, useRef } from 'react'
import s from './style.module.css'
import cn from 'classnames'
import Image from 'next/image'

import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import useStoreZustand from '@Hooks/useStoreZustand';

function Minded({ propsForGsap }: { propsForGsap: any }) {
    const container = useRef<HTMLDivElement>(null)
    const { stateTransition } = useStoreZustand()
    useGSAP(() => {
        let timeoutId: NodeJS.Timeout;


        if (stateTransition === 'entered') {
            // --^^ console.log("FooterSection re-render")
            timeoutId = setTimeout(() => {
                gsap.timeline({
                    scrollTrigger: {
                        scroller: propsForGsap.scrollerRef,
                        trigger: container.current,
                        start: "top bottom",
                        end: "bottom top",

                        scrub: true,
                    }
                }).to(`.${s.image}`,{
                    clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)"
                }).to(`.${s.w_img}`,{scale:1.2},"<")
            }, propsForGsap.delayForBehindComponent)
        }

        return () => clearTimeout(timeoutId);
    }, { dependencies: [stateTransition] });
    return (
        <section  className={cn(s.aboutus_minded, s.light_background)}>
            <div className={s.container}>
                <h2 className={s.label}>
                    <svg viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" className={s.icon}>
                        <path d="M7.41908 4.56679L6.13722 0L4.85418 4.92566L0 6L4.85418 7.25435L6.13722 12L7.3276 7.25435L12 6L7.41908 4.56679Z" fill="currentColor"></path>
                    </svg>
                    <div className={s.text}>How we work</div>
                </h2>
                <h2 className={s.title}>
                    <div className={s.title_mask}>
                        <div className={s.title_line}>A Fashion</div>
                    </div>
                    <div className={s.title_mask}>
                        <div className={s.title_line}>Agency</div>
                    </div>
                    {/*   <div className={s.title_mask}>
                        <div className={s.title_line}>ngành thời trang</div>
                    </div> */}

                </h2>
                <div className={s.body}>
                    <p>We’ve assembled a bespoke team of designers, innovators, manufactures and suppliers to work with teams across a client’s organization to help them find new sources of growth, whether that’s repositioning for new target audiences, innovating to create new products and services, improving the core product or removing the barriers to growth that stand in way of long-term success.</p>
                    <p>Partnering with clients on their journey to develop fashion brands, we assist in creating and producing collections as well as supporting brand image management, business, and production.</p>
                </div>
                <blockquote className={s.quote}>
                    “With our market expertise and technology application, we can help clients turn their designs into reality”
                </blockquote>
            </div>
            <div className={s.imgBox} ref={container}>
                <div className={s.image}>
                    <div className={s.w_img}>
                    <Image
                        src="/about/minded.png"
                        width={0}
                        height={0}
                        sizes="100vw"
                        style={{ width: "100%", height: "100%" }}
                        alt="intro_aboutus 2"
                    />
                    </div>
                </div>
                <div className={s.background}>
                    <div className={s.dark}></div>
                    <div className={s.light}></div>
                </div>
            </div>

        </section>
    )
}
export default memo(Minded)