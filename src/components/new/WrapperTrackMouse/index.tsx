"use client"
import {useRef,useEffect} from 'react'
import s from './style.module.css'
import useStoreZustand from '@/hooks/useStoreZustand';

export default function WrapperTrackMouse({children}:{children:React.ReactNode}) {
  
    const container = useRef<HTMLDivElement>(null)
    const   {setStateCursor} = useStoreZustand()
    const mouseEnter = () => {
        setStateCursor(true)
    }
    const mouseLeave = () => {
        setStateCursor(false)
    }
    return (
    <div 
        className={s.wrapperTrackMouse} 
        ref={container}
        onMouseEnter={() => mouseEnter()}
        onMouseLeave={() => mouseLeave()}
    >
        {children}
    </div>
  )
}
