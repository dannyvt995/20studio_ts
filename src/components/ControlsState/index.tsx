"use client"
import useStoreZustand from '@/hooks/useStoreZustand'
import React, { memo, useEffect } from 'react'

function ControlsState() {
    const { setStateEnterPage } = useStoreZustand()
    useEffect(() => {
        setTimeout(() => {
            setStateEnterPage()
        },1000)
    },[])
  return (
    <></>
  )
}
export default memo(ControlsState)