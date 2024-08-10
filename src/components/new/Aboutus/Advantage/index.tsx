"use client"
import React from 'react'
import cn from 'classnames';
import s from './style.module.css'
import IconSVG from '@Components/Icon/IconSVG';
export default function Advantage(): JSX.Element {


    return (
        <section className={cn(s.aboutus_advantage, 'dark_background')}>
            <div className="container">
                <h2 className={s.label}>
                    <IconSVG src='/icon/star.svg' className={s.icon} />
                    Quy trình của 20Studio
                </h2>
                <div className={s.intro}><p>Để đảm bảo chất lượng và thời gian cho khách hàng, 20studio cung cấp quy trình làm việc đầy đủ và nhanh chóng nhất.</p></div>
                <div className={s.items}>
                    <div className={s.item}>
                        <span className={s.index}>01</span>
                        <h3 className={s.subtitle}>Nhận yêu cầu từ khách hàng</h3>
                        <div className={s.body}>
                            <p>
                                Trao đổi yêu cầu<br />
                                Điền mẫu thông tin đơn hàng<br />
                                Xét duyệt đơn hàng<br />
                                Nhận thông tin từ khách hàng bao gồm: mô tả ý tưởng, hình ảnh mẫu, ảnh thiết kế, mẫu có sẵn.
                            </p>
                        </div>
                    </div>
                    <div className={s.item}>
                        <span className={s.index}>
                            02
                        </span>
                        <h3 className={s.subtitle}>
                            Đề xuất & Báo giá
                        </h3>
                        <div className={s.body}>
                            <p>Khách hàng nhận báo giá, trao đổi và tư vấn thêm về giá thành sản phẩm
                                <br />→ Tiếp nhận thanh toán đợt 1.</p>
                        </div>
                    </div>

                    <div className={s.item}>
                        <span className={s.index}>
                            03
                        </span>
                        <h3 className={s.subtitle}>
                            Thực hiện dịch vụ
                        </h3>
                        <div className={s.body}
                        >
                            <p>Với từng dịch vụ sẽ có các quy trình thiết kế riêng cho theo nhu cầu của khách hàng.</p>
                            <ul>
                                <li>Phát Triển Mẫu</li>
                                <li>Sản Xuất</li>
                                <li>Thiết Kế & Rập</li>
                                <li>Quản lí Sản Xuất</li>
                                <li>Website & Thương Mại</li>
                            </ul>
                        </div>
                    </div>
                    <div className={s.item}>
                        <span className={s.index}>
                            04
                        </span>
                        <h3 className={s.subtitle}>
                            Kiểm định & Bàn giao
                        </h3>
                        <div className={s.body}>
                            <p>Kiểm định chất lượng sản phẩm, kết quả của dịch vụ. Căn cứ vào các điều khoản thỏa thuận giữa hai bên, 20Studio tiến hành kiểm tra, đo lường và bàn giao kết quả cho khách hàng.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

