import React, { useRef } from 'react'
import s from './style.module.css'
import Image from 'next/image'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useRouter } from 'next/navigation'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
gsap.registerPlugin(ScrollTrigger,ScrollToPlugin,useGSAP)

export default function FooterRedirect({scroller,targetRedirect,currentId}:{scroller:string,targetRedirect:string,currentId:number}) {
    const container = useRef<any>(null)
    const cirRefIc = useRef<any>(null)
    const router = useRouter()
 
    useGSAP(() => {
        gsap.to(`.${s.info}`,{
            scrollTrigger:{
                scroller:scroller,
                trigger:container.current,
                onUpdate:(self) => {
                    
                    cirRefIc.current.style.strokeDasharray = `${self.progress * 120}px, ${110-100*self.progress}px`
                  
                    if(self.progress > 0.99) {
                      
                         document.body.style.pointerEvents = 'none'
                        gsap.timeline({
                            onComplete:() => {
                              setTimeout(() => {
                                router.push(`/work/work${targetRedirect}`)
                              },900)
                            }
                        })
                        .to(window, { duration: .1, scrollTo: container.current })
                        .to(`#bg_fr_${currentId}`,{
                            scale:1,
                            duration:.4
                        })
                        .to(`#info_fr_${currentId}`,{
                            opacity:0,
                            duration:.4
                        },'<')
                        .to(`#image_fr_${currentId}`,{
                            clipPath: 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)',
                            duration:.4
                        },'<')
                     
                    }
                },
             
                end:"top top",
              //  markers:true,
                scrub:true,
            },
            y :window.innerHeight * .5
            
        })
    })
  return (
    <>
    <section className={s.footer_redirect} ref={container}>
        <div className={s.wrapper}>
            <div className={s.info} id={`info_fr_${currentId}`}>
                <h3>Next To Project {targetRedirect}</h3>
                <p>Custom 20 studio hello {targetRedirect}</p>
                <div className={s.ic}>
                <svg data-v-41220c7b="" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className={s.icon}>
                <circle data-v-41220c7b="" cx="20" cy="20" r="18" strokeWidth="1.5" stroke="currentColor" strokeOpacity="0.5"></circle>
                <circle ref={cirRefIc} data-v-41220c7b="" cx="20" cy="20" r="18" strokeWidth="1.5" stroke="currentColor" strokeOpacity="1" style={{strokeDashoffset: 0.000999}}></circle></svg>
                </div>
            </div>
            <div className={s.image} id={`image_fr_${currentId}`}>
                <Image alt={`image_cache_services${targetRedirect}`} src={`/clone/services${targetRedirect}.webp`} width={0} height={0} sizes='100vw' style={{ width: "auto", height: "100%" }}  />
            </div>
            <div className={s.background}>
                <Image id={`bg_fr_${currentId}`} alt={`image_cache_services${targetRedirect}`} src={`/clone/services${targetRedirect}.webp`} width={0} height={0} sizes='100vw' style={{ width: "100%", height: "auto" }} className={s.project_image} />
            </div>
        </div>
    </section>
    </>
    
  )
}
