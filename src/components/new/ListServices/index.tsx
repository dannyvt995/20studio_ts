import React, { memo, useRef, useState } from 'react'
import s from './style.module.css'
import cn from 'classnames'
import IconSVG from '@/components/Icon/IconSVG';
import Image from 'next/image';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';


function ListServices() {

    const [indexItemService, selectedItemService] = useState(1)
    const container = useRef<HTMLUListElement>(null)
    const listEl = useRef<HTMLUListElement>(null)
    const listElFormat = useRef<any>([])
    const indexCount = useRef<number>(5)

    useGSAP(() => {
        if (listEl.current) {
            listElFormat.current = Array.from(listEl.current.children)
            if (indexItemService >= 0) {
                indexCount.current++

                gsap.timeline({
                    overwrite: true
                }).set(listElFormat.current[indexItemService], { zIndex: indexCount.current }).fromTo(listElFormat.current[indexItemService], {
                    rotate: -10,
                    opacity: 0,
                    scale: 1.2
                }, {
                    rotate: 0,
                    opacity: 1,
                    scale: 1,
                    duration: .72,
                    ease: "power3.out"
                })
            } else {
                console.log("Something wrong on ViewImgHoverListService!!")
            }
        }



    }, { dependencies: [indexItemService], scope: listEl })


    return (

        <>
            <section className={s.list_services}>
                <div className={s.container}>
                    <div className={s.tag}>
                        <span><IconSVG src='/icon/star.svg' /></span>
                        <h3>Service</h3>
                    </div>
                    <div className={s.more}>
                        <p>We transform Fashion businesses by solving upstream challenges to unlock new growth opportunities.</p>
                    </div>
                    <div className={s.list}>
                        <div className={cn(s.waperList, s.listHover)}>
                            <div className={s.scope}>
                                <h2>Design & <br /> Develop & Direct</h2>
                                <ul  >
                                    <li data-cursor="active"  onMouseEnter={() => selectedItemService(0)}>
                                        <div className={s.hiddenText}>Fashion Design & Prototype Development</div>
                                        <div className={s.carousel}>

                                            <div className={s.carousel__wrapper} style={{ "--slide-width": "42vw" } as React.CSSProperties}>

                                                <div className={s.carousel__slide}>
                                                    <div className={s.carousel__image} >/ Fashion Design & Prototype Development</div>

                                                </div>
                                                <div className={s.carousel__slide}>
                                                    <div className={s.carousel__image} >/ Fashion Design & Prototype Development</div>

                                                </div>
                                                <div className={s.carousel__slide}>
                                                    <div className={s.carousel__image} >/ Fashion Design & Prototype Development</div>

                                                </div>
                                                <div className={s.carousel__slide}>
                                                    <div className={s.carousel__image} >/ Fashion Design & Prototype Development</div>

                                                </div>
                                                <div className={s.carousel__slide}>
                                                    <div className={s.carousel__image} >/ Fashion Design & Prototype Development</div>

                                                </div>
                                                <div className={s.carousel__slide}>
                                                    <div className={s.carousel__image} >/ Fashion Design & Prototype Development</div>

                                                </div>

                                            </div>
                                        </div>
                                    </li>

                                    <li data-cursor="active"  onMouseEnter={() => selectedItemService(1)}>
                                        <div className={s.hiddenText}>Costume Design</div>
                                        <div className={s.carousel}>

                                            <div className={s.carousel__wrapper} style={{ "--slide-width": "20vw" } as React.CSSProperties}>

                                                <div className={s.carousel__slide}>
                                                    <div className={s.carousel__image} >/ Costume Design</div>

                                                </div>
                                                <div className={s.carousel__slide}>
                                                    <div className={s.carousel__image} >/ Costume Design</div>

                                                </div>
                                                <div className={s.carousel__slide}>
                                                    <div className={s.carousel__image} >/ Costume Design</div>

                                                </div>
                                                <div className={s.carousel__slide}>
                                                    <div className={s.carousel__image} >/ Costume Design</div>

                                                </div>
                                                <div className={s.carousel__slide}>
                                                    <div className={s.carousel__image} >/ Costume Design</div>

                                                </div>
                                                <div className={s.carousel__slide}>
                                                    <div className={s.carousel__image} >/ Costume Design</div>

                                                </div>

                                            </div>
                                        </div>
                                    </li>

                                    <li data-cursor="active"  onMouseEnter={() => selectedItemService(2)}>
                                        <div className={s.hiddenText}>Sample Development</div>
                                        <div className={s.carousel}>

                                            <div className={s.carousel__wrapper} style={{ "--slide-width": "27vw" } as React.CSSProperties}>

                                                <div className={s.carousel__slide}>
                                                    <div className={s.carousel__image} >/ Sample Development</div>

                                                </div>
                                                <div className={s.carousel__slide}>
                                                    <div className={s.carousel__image} >/ Sample Development</div>

                                                </div>
                                                <div className={s.carousel__slide}>
                                                    <div className={s.carousel__image} >/ Sample Development</div>

                                                </div>
                                                <div className={s.carousel__slide}>
                                                    <div className={s.carousel__image} >/ Sample Development</div>

                                                </div>
                                                <div className={s.carousel__slide}>
                                                    <div className={s.carousel__image} >/ Sample Development</div>

                                                </div>
                                                <div className={s.carousel__slide}>
                                                    <div className={s.carousel__image} >/ Sample Development</div>

                                                </div>


                                            </div>
                                        </div>
                                    </li>

                                    <li data-cursor="active"  onMouseEnter={() => selectedItemService(3)}>
                                        <div className={s.hiddenText}>Art Direction & Project Management</div>
                                        <div className={s.carousel}>

                                            <div className={s.carousel__wrapper} style={{ "--slide-width": "42vw" } as React.CSSProperties}>

                                                <div className={s.carousel__slide}>
                                                    <div className={s.carousel__image} >/ Art Direction & Project Management</div>

                                                </div>
                                                <div className={s.carousel__slide}>
                                                    <div className={s.carousel__image} >/ Art Direction & Project Management</div>

                                                </div>
                                                <div className={s.carousel__slide}>
                                                    <div className={s.carousel__image} >/ Art Direction & Project Management</div>

                                                </div>
                                                <div className={s.carousel__slide}>
                                                    <div className={s.carousel__image} >/ Art Direction & Project Management</div>

                                                </div>
                                                <div className={s.carousel__slide}>
                                                    <div className={s.carousel__image} >/ Art Direction & Project Management</div>

                                                </div>
                                                <div className={s.carousel__slide}>
                                                    <div className={s.carousel__image} >/ Art Direction & Project Management</div>

                                                </div>


                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className={s.scope}>
                                <h2>Digital</h2>
                                <ul >
                                    <li data-cursor="active"  onMouseEnter={() => selectedItemService(4)}>
                                        <div className={s.hiddenText}>Website & E-commerce Development</div>
                                        <div className={s.carousel}>

                                            <div className={s.carousel__wrapper} style={{ "--slide-width": "42vw" } as React.CSSProperties}>

                                                <div className={s.carousel__slide}>
                                                    <div className={s.carousel__image} >/ Website & E-commerce Development</div>
                                                </div>
                                                <div className={s.carousel__slide}>
                                                    <div className={s.carousel__image} >/ Website & E-commerce Development</div>
                                                </div>
                                                <div className={s.carousel__slide}>
                                                    <div className={s.carousel__image} >/ Website & E-commerce Development</div>
                                                </div>
                                                <div className={s.carousel__slide}>
                                                    <div className={s.carousel__image} >/ Website & E-commerce Development</div>
                                                </div>
                                                <div className={s.carousel__slide}>
                                                    <div className={s.carousel__image} >/ Website & E-commerce Development</div>
                                                </div>
                                                <div className={s.carousel__slide}>
                                                    <div className={s.carousel__image} >/ Website & E-commerce Development</div>
                                                </div>

                                            </div>
                                        </div>
                                    </li>

                                    <li data-cursor="active"  onMouseEnter={() => selectedItemService(5)}>
                                        <div className={s.hiddenText}>Photo, Video, 2D, 3D & Motion</div>
                                        <div className={s.carousel}>

                                            <div className={s.carousel__wrapper} style={{ "--slide-width": "36vw" } as React.CSSProperties}>

                                                <div className={s.carousel__slide}>
                                                    <div className={s.carousel__image} >/ Photo, Video, 2D, 3D & Motion</div>
                                                </div>
                                                <div className={s.carousel__slide}>
                                                    <div className={s.carousel__image} >/ Photo, Video, 2D, 3D & Motion</div>
                                                </div>

                                                <div className={s.carousel__slide}>
                                                    <div className={s.carousel__image} >/ Photo, Video, 2D, 3D & Motion</div>
                                                </div>

                                                <div className={s.carousel__slide}>
                                                    <div className={s.carousel__image} >/ Photo, Video, 2D, 3D & Motion</div>
                                                </div>

                                                <div className={s.carousel__slide}>
                                                    <div className={s.carousel__image} >/ Photo, Video, 2D, 3D & Motion</div>
                                                </div>

                                                <div className={s.carousel__slide}>
                                                    <div className={s.carousel__image} >/ Photo, Video, 2D, 3D & Motion</div>
                                                </div>

                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className={s.scope}>
                                <h2>Production</h2>
                                <ul>
                                    <li data-cursor="active"  onMouseEnter={() => selectedItemService(6)}>
                                        <div className={s.hiddenText}>Mass Production</div>
                                        <div className={s.carousel}>

                                            <div className={s.carousel__wrapper} style={{ "--slide-width": "20vw" } as React.CSSProperties}>

                                                <div className={s.carousel__slide}>
                                                    <div className={s.carousel__image} >/ Mass Production</div>
                                                </div>
                                                <div className={s.carousel__slide}>
                                                    <div className={s.carousel__image} >/ Mass Production</div>
                                                </div>
                                                <div className={s.carousel__slide}>
                                                    <div className={s.carousel__image} >/ Mass Production</div>
                                                </div>
                                                <div className={s.carousel__slide}>
                                                    <div className={s.carousel__image} >/ Mass Production</div>
                                                </div>
                                                <div className={s.carousel__slide}>
                                                    <div className={s.carousel__image} >/ Mass Production</div>
                                                </div>
                                                <div className={s.carousel__slide}>
                                                    <div className={s.carousel__image} >/ Mass Production</div>
                                                </div>


                                            </div>
                                        </div>
                                    </li>

                                    <li data-cursor="active"  onMouseEnter={() => selectedItemService(7)}>
                                        <div className={s.hiddenText}>Production Management</div>
                                        <div className={s.carousel}>

                                            <div className={s.carousel__wrapper} style={{ "--slide-width": "28vw" } as React.CSSProperties}>

                                                <div className={s.carousel__slide}>
                                                    <div className={s.carousel__image} >/ Production Management</div>
                                                </div>
                                                <div className={s.carousel__slide}>
                                                    <div className={s.carousel__image} >/ Production Management</div>
                                                </div>
                                                <div className={s.carousel__slide}>
                                                    <div className={s.carousel__image} >/ Production Management</div>
                                                </div>
                                                <div className={s.carousel__slide}>
                                                    <div className={s.carousel__image} >/ Production Management</div>
                                                </div>
                                                <div className={s.carousel__slide}>
                                                    <div className={s.carousel__image} >/ Production Management</div>
                                                </div>
                                                <div className={s.carousel__slide}>
                                                    <div className={s.carousel__image} >/ Production Management</div>
                                                </div>


                                            </div>
                                        </div>
                                    </li>

                                    <li data-cursor="active"  onMouseEnter={() => selectedItemService(8)}>
                                        <div className={s.hiddenText}>Inventory Management</div>
                                        <div className={s.carousel}>

                                            <div className={s.carousel__wrapper} style={{ "--slide-width": "28vw" } as React.CSSProperties}>

                                                <div className={s.carousel__slide}>
                                                    <div className={s.carousel__image} >/ Inventory Management</div>
                                                </div>
                                                <div className={s.carousel__slide}>
                                                    <div className={s.carousel__image} >/ Inventory Management</div>
                                                </div>
                                                <div className={s.carousel__slide}>
                                                    <div className={s.carousel__image} >/ Inventory Management</div>
                                                </div>
                                                <div className={s.carousel__slide}>
                                                    <div className={s.carousel__image} >/ Inventory Management</div>
                                                </div>
                                                <div className={s.carousel__slide}>
                                                    <div className={s.carousel__image} >/ Inventory Management</div>
                                                </div>
                                                <div className={s.carousel__slide}>
                                                    <div className={s.carousel__image} >/ Inventory Management</div>
                                                </div>

                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>


                        <ul className={s.gallery} ref={listEl}>
                            <li>
                                <Image src="/home/banner.png" width={0} height={0} sizes="100vw" style={{ width: 'auto', height: '100%' }} alt="logo narbar modal" />
                            </li>
                            <li>
                                <Image src="/work1/2.png" width={0} height={0} sizes="100vw" style={{ width: 'auto', height: '100%' }} alt="logo narbar modal" />
                            </li>
                            <li>
                                <Image src="/about/us2.png" width={0} height={0} sizes="100vw" style={{ width: 'auto', height: '100%' }} alt="logo narbar modal" />
                            </li>
                            <li>
                                <Image src="/work3/2.png" width={0} height={0} sizes="100vw" style={{ width: 'auto', height: '100%' }} alt="logo narbar modal" />
                            </li>
                            <li>
                                <Image src="/clone/services4.webp" width={0} height={0} sizes="100vw" style={{ width: 'auto', height: '100%' }} alt="logo narbar modal" />
                            </li>
                            <li>
                                <Image src="/work2/3.png" width={0} height={0} sizes="100vw" style={{ width: 'auto', height: '100%' }} alt="logo narbar modal" />
                            </li>
                            <li>
                                <Image src="/work3/5.png" width={0} height={0} sizes="100vw" style={{ width: 'auto', height: '100%' }} alt="logo narbar modal" />
                            </li>
                            <li>
                                <Image src="/work3/4.png" width={0} height={0} sizes="100vw" style={{ width: 'auto', height: '100%' }} alt="logo narbar modal" />
                            </li>
                            <li>
                                <Image src="/about/banner.webp" width={0} height={0} sizes="100vw" style={{ width: 'auto', height: '100%' }} alt="logo narbar modal" />
                            </li>
                        </ul>
                    </div>

                </div>

            </section>


        </>
    )
}
export default memo(ListServices)

