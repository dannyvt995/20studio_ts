import React from 'react'

import s from './style.module.css'
import Image from 'next/image'
export default function GridImageStyle2() {
  return (
    <section className={s.GridImageStyle2}>
        <div className='container is-exploded'>
            <div className={s.warpper}>
                <div className={s.media}> <Image className={s.image} alt="alt" src="/clone/detail-work-page/grid11.webp" width={500} height={300} objectFit='reponsive'/></div>
                <div className={s.media}> <Image className={s.image} alt="alt" src="/clone/detail-work-page/grid11.webp" width={500} height={300} objectFit='reponsive'/></div>
                <div className={s.media}> <Image className={s.image} alt="alt" src="/clone/detail-work-page/grid11.webp" width={500} height={300} objectFit='reponsive'/></div>
                <div className={s.media}> <Image className={s.image} alt="alt" src="/clone/detail-work-page/grid11.webp" width={500} height={300} objectFit='reponsive'/></div>
                <div className={s.media}> <Image className={s.image} alt="alt" src="/clone/detail-work-page/grid11.webp" width={500} height={300} objectFit='reponsive'/></div>
                <div className={s.media}> <Image className={s.image} alt="alt" src="/clone/detail-work-page/grid11.webp" width={500} height={300} objectFit='reponsive'/></div>
                <div className={s.media}> <Image className={s.image} alt="alt" src="/clone/detail-work-page/grid11.webp" width={500} height={300} objectFit='reponsive'/></div>
            </div>
        </div>
    </section>
  )
}
