"use client"
import FAQSection from '@/components/new/FAQSection'
import LetContact from '@/components/new/LetContact'
import ListServices from '@/components/new/ListServices'
import WrapperTrackMouse from '@/components/new/WrapperTrackMouse'
import { service_page } from '@/constants/page_props'
import React, { memo } from 'react'

function ServicePage(): JSX.Element {
  return (
    <div id="servicepage">
        <WrapperTrackMouse dataCursor='active'>
          <ListServices/>
          <LetContact content={service_page.content.letContact} propsForGsap={service_page.propsForGsap}/>
        </WrapperTrackMouse>
   
    </div>
  )
}

export default memo(ServicePage)