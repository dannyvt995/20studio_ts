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
                    Our procedure
                </h2>
                <div className={s.intro}><p>We believe that all good things are achieved by those who are willing to put in passion, courage and craftsmanship.</p></div>
                <div className={s.items}>
                    <div className={s.item}>
                        <span className={s.index}>01</span>
                        <h3 className={s.subtitle}>Briefing</h3>
                        <div className={s.body}>
                            <p>
                            Meet with the client to understand their needs, goals, and vision. Gather all necessary information and share initial ideas to ensure alignment.
                            </p>
                        </div>
                    </div>
                    <div className={s.item}>
                        <span className={s.index}>
                            02
                        </span>
                        <h3 className={s.subtitle}>
                        Consulting & Quotation
                        </h3>
                        <div className={s.body}>
                            <p>Provide expert advice and present a detailed quotation covering design, materials, and production costs. Finalize the contract once the client agrees.</p>
                        </div>
                    </div>

                    <div className={s.item}>
                        <span className={s.index}>
                            03
                        </span>
                        <h3 className={s.subtitle}>
                        Project Execution
                        </h3>
                        <div className={s.body}>
                            <p>Begin the design and production process, collaborating with the client for approvals and ensuring quality throughout.</p>
           
                        </div>
                    </div>
                    <div className={s.item}>
                        <span className={s.index}>
                            04
                        </span>
                        <h3 className={s.subtitle}>
                        Final Review and Delivery
                        </h3>
                        <div className={s.body}>
                            <p>Present the finished product, make any final adjustments, and deliver the project. Gather feedback and close the project.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

