"use client"
import React, { memo } from 'react'
import cn from 'classnames';
import s from './style.module.css'
import IconSVG from '@Components/Icon/IconSVG';
function Advantage({ content }: { content: any }): JSX.Element {


    return (
        <section className={cn(s.aboutus_advantage, 'dark_background')}>
            <div className="container">
                <h2 className={s.label}>
                    <IconSVG src='/icon/star.svg' className={s.icon} />
                    {content.tag}
                </h2>
                <div className={s.intro}><p>{content.more}</p></div>
                <div className={s.items}>
                    {content.items.map((item: any, index: any) => (
                        <div key={index} className={s.item}>
                            {content.disableIndex ? <></> : <span className={s.index}>{index + 1}</span>}
                            <h3 className={s.subtitle}>{item[0]}</h3>
                            <div className={s.body}>
                                <p>{item[1]}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
export default memo(Advantage)
