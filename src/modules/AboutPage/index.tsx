import s from './style.module.css'
import Advantage from "@Components/new/Aboutus/Advantage";
import Intro from "@Components/new/Aboutus/Intro";
export default function AboutPage(): JSX.Element {
    return (
        <div id="aboutpage"> 
      
            <Advantage/>
            <Intro/>
        </div>
    )
}