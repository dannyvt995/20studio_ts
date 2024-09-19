"use client"
import {useRef,useEffect} from 'react'
import s from './style.module.css'
import cn from 'classnames';
import useStoreZustand from '@/hooks/useStoreZustand';

export default function WrapperTrackMouse({children,classAdd,changeLabel}:{children:React.ReactNode,classAdd?:any,changeLabel?:string}) {
  
    const container = useRef<HTMLDivElement>(null)
    const   {setStateCursor} = useStoreZustand()
    const mouseEnter = () => {
  
        if(changeLabel) {
        
            setStateCursor({ isActive: true,label:changeLabel });
        }else{
            setStateCursor({ isActive: true });
        }
    }
    const mouseLeave = () => {
        if(changeLabel) {
            setStateCursor({ isActive: false,label:"Scroll" });
        }else{
            setStateCursor({ isActive: false });
        }
        
    }
    return (
    <div 
        className={cn(s.wrapperTrackMouse,classAdd)} 
        ref={container}
        onMouseEnter={() => mouseEnter()}
        onMouseLeave={() => mouseLeave()}
    >
        {children}
    </div>
  )
}
