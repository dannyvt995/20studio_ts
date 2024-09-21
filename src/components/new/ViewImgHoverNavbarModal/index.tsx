"use client"
import useStoreZustand from '@/hooks/useStoreZustand'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import Image from 'next/image'

import { useEffect,memo, useRef } from 'react'
const ViewImgHoverNavbarModal = ({classAdd}:{classAdd:string}) => {
  const { indexItemNavbar} = useStoreZustand();
  const container = useRef<HTMLUListElement>(null)
  const listEl = useRef<any>(null)
  const indexCount = useRef<number>(5)
  useEffect(() => {
    if(container.current) listEl.current = Array.from(container.current?.childNodes)
  },[container.current])
  useGSAP(() => {
    if(indexItemNavbar >= 0 &&  listEl.current && listEl.current.length === 5) {
        indexCount.current++
   
        gsap.timeline({
          overwrite:true
        }).set(listEl.current[indexItemNavbar],{zIndex:indexCount.current}).fromTo(listEl.current[indexItemNavbar] , {
            rotate:-10,
            opacity:0,
            scale: 1.2
        },{
          rotate:0,
          opacity:1,
          scale: 1,
          duration:.72,
          ease:"power3.out"
        })
    }else{
      console.log("Something wrong on ViewImgHoverNavbarModal!!")
    }
  },{dependencies:[indexItemNavbar,listEl.current],scope:container})
  return (
    <ul className={classAdd} ref={container}>
      <li>
        <Image src="/home/banner.png" width={0} height={0} sizes="100vw" style={{ width: '100%', height: '100%'}} alt="logo narbar modal" />
      </li>
      <li>
        <Image src="/work1/2.png" width={0} height={0} sizes="100vw" style={{ width: '100%', height: '100%'}} alt="logo narbar modal" />
      </li>
      <li>
        <Image src="/about/us2.png" width={0} height={0} sizes="100vw" style={{ width: '100%', height: '100%'}} alt="logo narbar modal" />
      </li>
      <li>
        <Image src="/about/intro2.png" width={0} height={0} sizes="100vw" style={{ width: '100%', height: '100%'}} alt="logo narbar modal" />
      </li>
      <li>
        <Image src="/about/banner.webp" width={0} height={0} sizes="100vw" style={{ width: '100%', height: '100%'}} alt="logo narbar modal" />
      </li>

     
    </ul>
  )
}

export default  memo(ViewImgHoverNavbarModal)