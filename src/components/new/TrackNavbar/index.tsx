"use client"
import {useRef} from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger,useGSAP)
export default function TrackNavbar() {
    const container = useRef<any>()
    useGSAP(() => {
        ScrollTrigger.create({
            trigger: container.current,
            start: 'top top', // Bắt đầu theo dõi khi phần tử nằm ở đỉnh viewport
            end: 'bottom bottom', // Kết thúc theo dõi khi phần tử ra khỏi viewport
           markers:true,
            onEnter: () => {
              // Hành động khi phần tử vào viewport
              console.log('Phần tử đã vào viewport!');
            },
            onLeave: () => {
              // Hành động khi phần tử ra khỏi viewport
              console.log('Phần tử đã ra khỏi viewport!');
            },
          });
    })
  return (
    <div style={{width:'100vw',height:'1px'}} id='this_for_track' ref={container}></div>
  )
}
