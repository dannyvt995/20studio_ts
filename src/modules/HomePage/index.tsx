import OurPartners from '@/components/new/OurPartners';
import s from './style.module.css'
import Advantage from "@Components/new/Aboutus/Advantage";
import Intro from "@Components/new/Aboutus/Intro";
import HeroSection from '@Components/new/HeroSection';
import ServicesSection from '@/components/new/ServicesSection';
export default function HomePage(): JSX.Element {
    const propsForGsap = {
        stateTransitionPage: 'entered',
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
        </div>
    )
}