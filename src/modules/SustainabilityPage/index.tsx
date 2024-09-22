"use client"
import { memo } from 'react'
import { sustainability_page } from '@/constants/page_props'
import './style.module.css'
import FooterSection from '@/components/new/FooterSection'
import Advantage from "@Components/new/Aboutus/Advantage";
import LetContact from '@/components/new/LetContact';
import More from '@/components/new/Sustainability/More'
import WrapperTrackMouse from '@/components/new/WrapperTrackMouse'
import Intro from '@/components/new/Sustainability/Intro'
function SustainabilityPage():JSX.Element {

    return (
        <div id="sustainabilitypage">
      
         <Intro content={sustainability_page.content.intro}  propsForGsap={sustainability_page.propsForGsap}/>
           <Advantage content={sustainability_page.content.advantage}/>
          {/*  <LetContact content={sustainability_page.content.letContact}/> */}
          <More/>
          <WrapperTrackMouse>
          <FooterSection  propsForGsap={sustainability_page.propsForGsap}/>
          </WrapperTrackMouse>
            
      </div>
    )
}

export default memo(SustainabilityPage)