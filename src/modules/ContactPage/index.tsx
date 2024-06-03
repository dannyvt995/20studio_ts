import ContactPageIntro from '@/components/new/ContactPageIntro';
import s from './style.module.css'
import Advantage from "@Components/new/Aboutus/Advantage";
import Intro from "@Components/new/Aboutus/Intro";
import FooterSection from '@/components/new/FooterSection';
export default function ContactPage(): JSX.Element {
    return (
        <div id="contactpage">
            <ContactPageIntro/>
            <FooterSection />
        </div>
    )
}