
"use client"

import s from './style.module.css'
import ButtonHoverUnderLineNew from '../ButtonHoverUnderline';

interface IFooterSection {
    propsForGsap?:any
}
export default function FooterSection({ propsForGsap }:IFooterSection) {

    return (
        <section className={s.footer_section} id="footer_section">
            <div className={s.container}>
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
                        <ButtonHoverUnderLineNew noName="var(--font-lh-p)" auto_link="/work" >Dự án</ButtonHoverUnderLineNew>
                    </li>
                    <li className={s.item}>
                        <ButtonHoverUnderLineNew noName="var(--font-lh-p)" auto_link="/about" classStyle="list-link">20 Studio</ButtonHoverUnderLineNew>
                    </li>
                    <li className={s.item}>
                        <ButtonHoverUnderLineNew noName="var(--font-lh-p)" auto_link="/home" classStyle="list-link">Dịch vụ</ButtonHoverUnderLineNew>
                    </li>
                    <li className={s.item}>
                        <ButtonHoverUnderLineNew noName="var(--font-lh-p)" auto_link="/contact" classStyle="list-link">Liên hệ</ButtonHoverUnderLineNew>
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
                <a className={s.link}>
                    <div className={s.wrap}>
                        <div className={s.circle} >
                            Về chúng tôi
                        </div>
                    </div>
                </a>
            </div>
        </section>
    )
}
