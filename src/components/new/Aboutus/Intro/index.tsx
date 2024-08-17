import {useRef,ReactElement} from 'react'
import s from './style.module.css'
import cn from 'classnames'
import IconSVG from '@/components/Icon/IconSVG'
import Image from 'next/image'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)
interface IProps {
    propsForGsap: any,
}
export default function Intro({propsForGsap}:IProps): ReactElement  {
    const triggleSection = useRef<HTMLDivElement>(null)
    useGSAP(() => {

   
          const tl2 = gsap.timeline({paused:false})
          const disAction = [-1,0,1]
          tl2.to(`.${s.image}`, {
              y: (index) => disAction[index] * window.innerHeight * .123, // calc(100vh * -1.2)
        
              scrollTrigger: {
               scroller: propsForGsap.scrollerRef,
                  trigger: triggleSection.current,
                  start: "-70% top",
                  end: "70% top",
                  scrub: .95,
              }
          });
      
      }, []);
  

    return (
        <section className={cn(s.aboutus_intro,'light_background')} ref={triggleSection}>
            <div className="container">
                <ul className={s.images}>
                    <li className={s.image}>
                        <Image
                            src="/clone/aboutus/intro_1.jpg"
                            width={0}
                            height={0}
                            sizes='100vw'
                            style={{ width: "100%", height: "auto" }}
                            alt="intro_aboutus 1"
                        />
                    
                    </li>
                    <li className={s.image}>
                        <Image
                            src="/about/intro2.png"
                            width={0}
                            height={0}
                            sizes='100vw'
                            style={{ width: "100%", height: "auto" }}
                            alt="intro_aboutus 2"
                        />
                    </li>
                    <li className={s.image}>
                        <Image
                            src="/about/intro3.png"
                            width={0}
                            height={0}
                            sizes='100vw'
                            style={{ width: "100%", height: "auto" }}
                            alt="intro_aboutus 3"
                        />
                    </li>
                </ul>
                <div className={s.text}>
                    <h2 className={s.label}>
                        <IconSVG src='/icon/star.svg' className={s.icon}/>
                        Our mission
                    </h2>
                    <h2 className={s.title}>20Studio is a fashion creative agency providing fashion business solutions, including Creative develop, Fashion management, Web develop and Digital design.</h2>
                    <div className={s.body}><ul><li><p>Fashion Design &amp; Fashion Production</p></li><li><p>Digital fashion development &amp; IT</p></li><li><p>Visual Digital &amp; Photographic</p></li></ul></div>
                </div>
            </div>
        </section>
    )
}
