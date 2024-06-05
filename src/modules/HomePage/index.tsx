import OurPartners from '@/components/new/OurPartners';
import s from './style.module.css'
import Advantage from "@Components/new/Aboutus/Advantage";
import Intro from "@Components/new/Aboutus/Intro";
import HeroSection from '@Components/new/HeroSection';
import ServicesSection from '@/components/new/ServicesSection';
import LetContact from '@/components/new/LetContact';
import FooterSection from '@/components/new/FooterSection';
import { IPageModule } from '@/types/common';
import { memo } from 'react';
import FAQSection from '@/components/new/FAQSection';
import SliderImageHover from '@/components/SliderImageHover';
function HomePage({stateTransition}:IPageModule): JSX.Element {
    const propsForGsap = {
        stateTransitionPage: stateTransition,
        scrollerRef: "#homepage"
      }
      const propsHeroSection = {
        classAdd:"dark_background",
        backgroundImage:"/home/banner.png",
        backgroundSize:{ width: "auto", height: "100%" }
      }
    return (
        <div id="homepage">
            <HeroSection propsForGsap={propsForGsap} propsHeroSection={propsHeroSection}/>
         
            <ServicesSection />
            <FAQSection/>
            <SliderImageHover/>
            <LetContact propsForGsap={propsForGsap}/>
            <FooterSection propsForGsap={propsForGsap}/>
        </div>
    )
}
export default  memo(HomePage)