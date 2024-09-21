import React, { memo, useEffect } from 'react'
import s from './style.module.css'
import ProjectText from '../ProjectText'
import { service_page } from '@/constants/page_props';
import IconSVG from '@/components/Icon/IconSVG';
import Image from 'next/image';
import SliderImageHover from '@/components/SliderImageHover';
import ViewImgHoverListService from '../ViewImgHoverListService';
import useStoreZustand from '@/hooks/useStoreZustand';


function ListServices() {
   const {indexItemService,selectedItemService} = useStoreZustand()
   useEffect(() => {
    console.log(indexItemService)
   },[indexItemService])
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
                        <div className={s.waperList}>
                            <div className={s.scope}>
                                <h2>Design & <br/> Develop & Direct</h2>
                                <ul>
                                    <li onMouseEnter={() => selectedItemService(0)}>
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
                                  
                                    <li onMouseEnter={() => selectedItemService(1)}>
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
                                  
                                    <li onMouseEnter={() => selectedItemService(2)}>
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
                                  
                                    <li onMouseEnter={() => selectedItemService(3)}>
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
                                    <li onMouseEnter={() => selectedItemService(4)}>
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
                                  
                                    <li onMouseEnter={() => selectedItemService(5)}>
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
                                    <li onMouseEnter={() => selectedItemService(6)}>
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
                                 
                                    <li onMouseEnter={() => selectedItemService(7)}>
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
                                  
                                    <li onMouseEnter={() => selectedItemService(8)}>
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
                    
                        <ViewImgHoverListService classAdd={s.gallery}/>
                 
                    </div>

                </div>

            </section>


        </>
    )
}
export default memo(ListServices)

