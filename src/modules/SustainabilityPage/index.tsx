"use client"
import { memo } from 'react'
import { sustainability_page } from '@/constants/page_props'
import './style.module.css'
import FooterSection from '@/components/new/FooterSection'
import Advantage from "@Components/new/Aboutus/Advantage";
import LetContact from '@/components/new/LetContact';
import LetContactSustain from '@/components/new/LetContactSustain'
import WrapperTrackMouse from '@/components/new/WrapperTrackMouse'
function SustainabilityPage():JSX.Element {

    return (
        <div id="sustainabilitypage">
         
         <LetContact content={sustainability_page.content.introSustain}  propsForGsap={sustainability_page.propsForGsap}/>
           <Advantage content={sustainability_page.content.advantage}/>
          {/*  <LetContact content={sustainability_page.content.letContact}/> */}
          <LetContactSustain/>
          <WrapperTrackMouse>
          <FooterSection  propsForGsap={sustainability_page.propsForGsap}/>
          </WrapperTrackMouse>
            
      </div>
    )
}

export default memo(SustainabilityPage)