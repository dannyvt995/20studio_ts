"use client"
import Image from 'next/image'
import React, { memo } from 'react'

function CacheImageGroup() {
  return (
    <div style={{
        visibility: 'hidden',
        userSelect: 'none',
        pointerEvents: 'none',
        width: 0,
        height: 0
    }}>
        {/* Image sẽ đc load trước */}
         <Image src={"/home/banner.png"} width={0} height={0} sizes="100vw" alt="image_cache_1"/>
         <Image src={"/about/banner.webp"} width={0} height={0} sizes="100vw"  alt="image_cache_2"/>
         <Image src={"/clone/services1.webp"} width={0} height={0} sizes="100vw" alt="image_cache_3" />
         <Image src="/clone/contact-page.webp" width={0} height={0} sizes="100vw" alt="image_cache_4" />
         <Image src="/clone/navbar-modal.webp" width={0}  height={0} sizes="100vw"  alt="image_cache_5"/>
    </div>
  )
}

export default memo(CacheImageGroup)