'use client';
import HeroSection from '@Components/new/HeroSection';
import ServicesSection from '@Components/new/ServicesSection';
import LetContact from '@Components/new/LetContact';
import FooterSection from '@Components/new/FooterSection';
import { IPageModule } from '@/types/common';
import { memo } from 'react';
import FAQSection from '@Components/new/FAQSection';
import SliderImageHover from '@Components/SliderImageHover';
import { home_page } from '@Constants/page_props';

function HomePage(): JSX.Element {
   
    return (
        <div id="homepage">
            <HeroSection pageName="home" propsForGsap={home_page.propsForGsap} propsHeroSection={home_page.propsHeroSection}/>
            <ServicesSection />
            <FAQSection/>
        
          
           {/*  <SliderImageHover/> */}
            <LetContact  propsForGsap={home_page.propsForGsap}/>
            <FooterSection propsForGsap={home_page.propsForGsap}/>
        </div>
    )
}
export default  memo(HomePage)