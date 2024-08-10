
"use client"

import s from './style.module.css'
import { useRef } from 'react';
import gsap from 'gsap'
import Link from 'next/link';
import { isMobile } from '@/utils/responsive';
import { useGSAP } from '@gsap/react';
import useStoreZustand from '@Hooks/useStoreZustand';
import ButtonHoverNew from '../ButtonHoverNew';
import ButtonHoverNew2 from '../ButtonHoverNew2';
import IconSVG from '@/components/Icon/IconSVG';
import classNames from 'classnames';

interface IFooterSection {
    state?:string,
    propsForGsap?: any
}
function FooterSection({ propsForGsap,state }: IFooterSection) {
    const triggleSection = useRef<HTMLElement>(null)
    const domEffect = useRef(null)
    const { stateTransition } = useStoreZustand()

    useGSAP(() => {
     
        if (isMobile()) return
        let timeoutId: NodeJS.Timeout;
        if (stateTransition === 'entered') {
            console.log("FooterSection re-render")
            timeoutId = setTimeout(() => {
            gsap.timeline({
                scrollTrigger:{
                    scroller: propsForGsap.scrollerRef,
                    trigger: triggleSection.current,
                    start: "top bottom",
                    end: "bottom bottom",
                    scrub:true,
                }
            })
            .set(domEffect.current, { y: -window.innerHeight * .4 })
            .fromTo(domEffect.current, {
                y: -window.innerHeight * .4, // calc(100vh * -1.2)
            }, { y: 0 })
           },500)
        }

        return () => clearTimeout(timeoutId); 
    }, {dependencies:[stateTransition]});



    return (
        <section className={s.footer_section} id="footer_section" ref={triggleSection}>
            <div className={s.container} ref={domEffect}>
                <div className={s.title}>
                    <div>Our</div>
                    <div>Story</div>
                </div>
                <p className={s.body}>20Studio mong muốn đồng hành cùng bạn và tạo ra những sản phẩm chất lượng nhất với giá thành cạnh tranh theo đúng thời hạn cam kết.</p>
                <div className={s.divider}></div>
                <ul className={s.address}>
                    <li className={s.item}>
                        <a >
                            30 Lý Chính Thắng<br />
                            P. Võ Thị Sáu<br />
                            Quận 3, HCM.

                        </a>
                    </li>
                    <li className={s.item}>
                        <a>
                            vphcm@20studio.com
                        </a>
                    </li>
                </ul>
                <ul className={s.nav_footer}>
                    <li className={s.item}>
                   
                    <ButtonHoverNew  targetRedirect='/work'>
                    Dự án
                   </ButtonHoverNew>
                    </li>
                    <li className={s.item}>
                    <ButtonHoverNew targetRedirect='/home'>
                    Dịch vụ
                   </ButtonHoverNew>
                    </li>
                    <li className={s.item}>
                    <ButtonHoverNew  targetRedirect='/about'>
                   Về chúng tôi
                   </ButtonHoverNew>
                    </li>
                    <li className={s.item}>
                    <ButtonHoverNew  targetRedirect='/contact'>
                   Liên hệ
                   </ButtonHoverNew>
                    </li>
                </ul>
                <ul className={s.social}>
                    <li className={s.item}>
                        <a>
                            Facebook
                        </a>
                    </li>
                    <li className={s.item}>
                        <a>
                            Instagram
                        </a>
                    </li>
                </ul>
       {/* lỗi */}
                <ButtonHoverNew2 
                icon={<IconSVG src='/icon/arrow-right.svg' />} 
                targetRedirect='/about' 
                classAdd={classNames(s.link,s.wrap,s.circle)}>
                    Về chúng tôi
                        </ButtonHoverNew2>
               
            </div>
        </section>
    )
}

export default FooterSection