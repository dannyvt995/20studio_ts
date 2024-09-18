'use client';
import HeroSection from '@Components/new/HeroSection';
import ServicesSection from '@Components/new/ServicesSection';
import LetContact from '@Components/new/LetContact';
import FooterSection from '@Components/new/FooterSection';

import { memo } from 'react';
import FAQSection from '@Components/new/FAQSection';

import { home_page } from '@Constants/page_props';
import WrapperTrackMouse from '@/components/new/WrapperTrackMouse';

function HomePage(): JSX.Element {

    return (
        <div id="homepage">
            <HeroSection pageName="home" propsForGsap={home_page.propsForGsap} content={home_page.content.heroSection}/>
       
            <WrapperTrackMouse>
                <ServicesSection />
                <FAQSection/>
                <LetContact content={home_page.content.letContact}  propsForGsap={home_page.propsForGsap}/>
                <FooterSection propsForGsap={home_page.propsForGsap}/>
            </WrapperTrackMouse>
          
            
        </div>
    )
}
export default  memo(HomePage)