"use client"
import Image from 'next/image'
import React, { memo } from 'react'

function CacheImageGroup() {
  console.log("Rerender là gãy")
  return (
    <div style={{
        visibility: 'hidden',
        userSelect: 'none',
        pointerEvents: 'none',
        width: 0,
        height: 0
    }}>
        {/* Image sẽ đc load trước */}
         <Image src={"/home/banner.png"} width={0} height={0} sizes="100vw" alt="image_cache_1" priority/>
         <Image src={"/about/banner.webp"} width={0} height={0} sizes="100vw"  alt="image_cache_2" priority/>
         <Image src={"/clone/services1.webp"} width={0} height={0} sizes="100vw" alt="image_cache_services1" priority/>
         <Image src={"/clone/services2.webp"} width={0} height={0} sizes="100vw" alt="image_cache_services2" priority/>
         <Image src={"/clone/services3.webp"} width={0} height={0} sizes="100vw" alt="image_cache_services3" priority/>
         <Image src={"/clone/services4.webp"} width={0} height={0} sizes="100vw" alt="image_cache_services4" priority/>
         <Image src="/clone/contact-page.webp" width={0} height={0} sizes="100vw" alt="image_cache_4" priority/>
         <Image src="/clone/navbar-modal.webp" width={0}  height={0} sizes="100vw"  alt="image_cache_5"priority/>
    </div>
  )
}

export default memo(CacheImageGroup)