"use client"
import React from 'react'
import cn from 'classnames';
import s from './style.module.css'
import StarIcon from '@/components/Icon/StarIcon';
export default function Advantage(): JSX.Element {


    return (
        <section className={cn(s.aboutus_advantage,s.dark_background)}>
            <div className={s.container}>
                <h2 className={s.label}>
                   <StarIcon src='/icon/star.svg'  className={s.icon} />
                    Quy trình của 20Studio
                </h2>
                <div className={s.intro}><p>Để đảm bảo chất lượng và thời gian cho khách hàng, 20studio cung cấp quy trình làm việc đầy đủ và nhanh chóng nhất.</p></div>
                <div className={s.items}>
                    {/* Your content here */}
                </div>
            </div>
        </section>
    );
};

