"use client"
import Image from "next/image"
import { memo } from "react"

function CacheImageGroup() {
  // -+- console.log("%cCacheImageGroup(Run 1 time)","color:blue;border:1px solid green")
  return (
    <div style={{
      visibility: 'hidden',
      userSelect: 'none',
      pointerEvents: 'none',
      width: 0,
      height: 0
  }}>
    {/* Image sẽ đc load trước */}
    <Image src={"/home/banner.png"} quality={100} width={0} height={0} sizes="100vw" alt="image_cache_banner_home" priority />
    <Image src={"/about/banner.webp"} quality={100} width={0} height={0} sizes="100vw" alt="image_cache_banner_about" priority />
    <Image src={"/clone/services1.webp"} quality={100} width={0} height={0} sizes="100vw" alt="image_cache_services1" priority />
    <Image src={"/clone/services2.webp"} quality={100} width={0} height={0} sizes="100vw" alt="image_cache_services2" priority />
    <Image src={"/clone/services3.webp"} quality={100} width={0} height={0} sizes="100vw" alt="image_cache_services3" priority />
    <Image src={"/clone/services4.webp"} quality={100} width={0} height={0} sizes="100vw" alt="image_cache_services4" priority />
    <Image src={"/clone/contact-page.webp"} quality={100} width={0} height={0} sizes="100vw" alt="image_cache_4" priority />
    <Image src={"/clone/navbar-modal.webp"} quality={100} width={0} height={0} sizes="100vw" alt="image_cache_5" priority />
    <Image src={"/work1/1.png"} quality={100} width={0} height={0} sizes="100vw" alt="image_cache_work" priority />
    <Image src={"/work1/2.png"} quality={100} width={0} height={0} sizes="100vw" alt="image_cache_work" priority />
    <Image src={"/work1/3.png"} quality={100} width={0} height={0} sizes="100vw" alt="image_cache_work" priority />
    <Image src={"/work1/4.png"} quality={100} width={0} height={0} sizes="100vw" alt="image_cache_work" priority />
    <Image src={"/work1/5.png"} quality={100} width={0} height={0} sizes="100vw" alt="image_cache_work" priority />
    <Image src={"/work1/6.png"} quality={100} width={0} height={0} sizes="100vw" alt="image_cache_work" priority />
    <Image src={"/work2/1.png"} quality={100} width={0} height={0} sizes="100vw" alt="image_cache_work" priority />
    <Image src={"/work2/2.png"} quality={100} width={0} height={0} sizes="100vw" alt="image_cache_work" priority />
    <Image src={"/work2/3.png"} quality={100} width={0} height={0} sizes="100vw" alt="image_cache_work" priority />
    <Image src={"/work2/4.png"} quality={100} width={0} height={0} sizes="100vw" alt="image_cache_work" priority />
    <Image src={"/work2/5.png"} quality={100} width={0} height={0} sizes="100vw" alt="image_cache_work" priority />
    <Image src={"/work2/6.png"} quality={100} width={0} height={0} sizes="100vw" alt="image_cache_work" priority />
    
    <Image src={"/work3/1.png"} quality={100} width={0} height={0} sizes="100vw" alt="image_cache_work" priority />
    <Image src={"/work3/2.png"} quality={100} width={0} height={0} sizes="100vw" alt="image_cache_work" priority />
    <Image src={"/work3/3.png"} quality={100} width={0} height={0} sizes="100vw" alt="image_cache_work" priority />
    <Image src={"/work3/4.png"} quality={100} width={0} height={0} sizes="100vw" alt="image_cache_work" priority />
    <Image src={"/work3/5.png"} quality={100} width={0} height={0} sizes="100vw" alt="image_cache_work" priority />
    <Image src={"/work3/6.png"} quality={100} width={0} height={0} sizes="100vw" alt="image_cache_work" priority />
  </div>
  )
}
export default memo(CacheImageGroup)