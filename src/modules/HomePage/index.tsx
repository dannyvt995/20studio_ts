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
            <WrapperTrackMouse dataCursor='active'>
                <HeroSection pageName="home" propsForGsap={home_page.propsForGsap} content={home_page.content.heroSection} />
            </WrapperTrackMouse>


            <WrapperTrackMouse dataCursor='hidden'>
                <ServicesSection />
            </WrapperTrackMouse>

            <WrapperTrackMouse dataCursor='active'>
                <FAQSection />
                <LetContact content={home_page.content.letContact} propsForGsap={home_page.propsForGsap} />
            </WrapperTrackMouse>
         

            <WrapperTrackMouse dataCursor='hidden'>
                <FooterSection propsForGsap={home_page.propsForGsap} />
            </WrapperTrackMouse>


        </div>
    )
}
export default memo(HomePage)