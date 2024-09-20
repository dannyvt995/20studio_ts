"use client"
import HeroSection from '@Components/new/HeroSection';
import Advantage from "@Components/new/Aboutus/Advantage";
import Intro from "@Components/new/Aboutus/Intro";
import SectionTitleBlend from '@Components/new/SectionIntractive/SectionTitleBlend';
import FooterSection from '@Components/new/FooterSection';
import Minded from '@Components/new/Aboutus/Minded';
import Us from '@Components/new/Aboutus/Us';
import { IPageModule } from '@/types/common';
import { memo } from 'react';
import { about_page } from '@Constants/page_props';
import LetContact from '@/components/new/LetContact';
import WrapperTrackMouse from '@/components/new/WrapperTrackMouse';
import { isMobile } from '@/utils/responsive';

function AboutPage(): JSX.Element {
  
    return (
        <div id="aboutpage">
            <HeroSection pageName="about" propsForGsap={about_page.propsForGsap} content={about_page.content.heroSection} />

            <Intro  propsForGsap={about_page.propsForGsap}/>
            <WrapperTrackMouse>
                <Advantage content={about_page.content.advantage}/>
            </WrapperTrackMouse>
           
            {isMobile() ? <></> : <SectionTitleBlend  propsForGsap={about_page.propsForGsap} /> }
           
            <Minded  propsForGsap={about_page.propsForGsap}/>

            <WrapperTrackMouse>
                <Us />
            </WrapperTrackMouse>
           
            <LetContact content={about_page.content.letContact}  propsForGsap={about_page.propsForGsap}/>
          
            <WrapperTrackMouse>
                <FooterSection  propsForGsap={about_page.propsForGsap} />
            </WrapperTrackMouse>
         
        </div>
    )
}
export default memo(AboutPage)