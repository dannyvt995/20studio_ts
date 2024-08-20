"use client"
import FAQSection from '@/components/new/FAQSection'
import LetContact from '@/components/new/LetContact'
import ListServices from '@/components/new/ListServices'
import React, { memo } from 'react'

function ServicePage(): JSX.Element {
  return (
    <div id="servicepage">
        <ListServices/>
        <LetContact/>
    </div>
  )
}

export default memo(ServicePage)