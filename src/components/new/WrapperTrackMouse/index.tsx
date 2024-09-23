"use client"
import {memo} from 'react'
import s from './style.module.css'
import cn from 'classnames';

function WrapperTrackMouse({children,classAdd,dataCursor,changeLabel}:{children:React.ReactNode,classAdd?:any,changeLabel?:string,dataCursor?:string}) {
    console.log("WrapperTrackMouse")

    return (
    <div 
        className={cn(s.wrapperTrackMouse, classAdd)} 
        data-cursor={dataCursor}
    >
        {children}
    </div>
  )
}



export default memo(WrapperTrackMouse)