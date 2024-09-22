"use client"
import {useRef,memo,useCallback,useMemo} from 'react'
import s from './style.module.css'
import cn from 'classnames';
import useStoreZustand from '@/hooks/useStoreZustand';

function WrapperTrackMouse({children,classAdd,changeLabel}:{children:React.ReactNode,classAdd?:any,changeLabel?:string}) {
    console.log("runnn")
    const container = useRef<HTMLDivElement>(null)
    const setStateCursor = useStoreZustand((state) => state.setStateCursor);
    const mouseEnter = useCallback(() => {
  
        if(changeLabel) {
        
            setStateCursor({ isActive: true,label:changeLabel });
        }else{
            setStateCursor({ isActive: true });
        }
    },[])

    const mouseLeave = useCallback(() => {
        if(changeLabel) {
            setStateCursor({ isActive: false,label:"Scroll" });
        }else{
            setStateCursor({ isActive: false });
        }
        
    },[])

    const classNamesMemo = useMemo(() => cn(s.wrapperTrackMouse, classAdd), [classAdd]);

    return (
    <div 
        className={classNamesMemo} 
        ref={container}
        onMouseEnter={() => mouseEnter()}
        onMouseLeave={() => mouseLeave()}
    >
        {children}
    </div>
  )
}



export default memo(WrapperTrackMouse)