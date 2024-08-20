import React, { memo } from 'react'
import s from './style.module.css'
import ProjectText from '../ProjectText'
import { service_page } from '@/constants/page_props';
import IconSVG from '@/components/Icon/IconSVG';
import Image from 'next/image';

function ListServices() {
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
                        <div className={s.scope}>
                            <h2>Design & Develop & Direct</h2>
                            <ul>
                                <li>
                                    <div>Fashion Design & Prototype Development</div>
                                    <div className={s.carousel}>

                                        <div className={s.carousel__wrapper} style={{ "--slide-width": "38vw" } as React.CSSProperties}>

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
                                <li>
                                    <div>Costume Design</div>
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
                                <li>
                                    <div>Sample Development</div>
                                    <div className={s.carousel}>

                                        <div className={s.carousel__wrapper} style={{ "--slide-width": "20vw" } as React.CSSProperties}>

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
                                <li>
                                    <div>Art Direction & Project Management</div>
                                    <div className={s.carousel}>

                                        <div className={s.carousel__wrapper} style={{ "--slide-width": "30vw" } as React.CSSProperties}>

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
                            <ul>
                                <li>
                                    <div>Website & E-commerce Development</div>
                                    <div className={s.carousel}>

                                        <div className={s.carousel__wrapper} style={{ "--slide-width": "30vw" } as React.CSSProperties}>

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
                                <li>
                                    <div>Photo, Video, 2D, 3D & Motion</div>
                                    <div className={s.carousel}>

                                        <div className={s.carousel__wrapper} style={{ "--slide-width": "30vw" } as React.CSSProperties}>

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
                                <li>
                                    <div>Mass Production</div>
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
                                <li>
                                    <div>Production Management</div>
                                    <div className={s.carousel}>

                                        <div className={s.carousel__wrapper} style={{ "--slide-width": "20vw" } as React.CSSProperties}>

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
                                <li>
                                    <div>Inventory Management</div>
                                    <div className={s.carousel}>

                                        <div className={s.carousel__wrapper} style={{ "--slide-width": "20vw" } as React.CSSProperties}>

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
                    <div className={s.gallery}>

                        <Image src={"/home/banner.png"} width={0} height={0} sizes="100vw" alt="image_cache_banner_home" />
                    </div>
                </div>

            </section>


        </>
    )
}
export default memo(ListServices)

