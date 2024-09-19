
import Image from 'next/image'
import s from './style.module.css'
export default function LayoutCustom({content}:{content:any}) {
  return (
    <section className={s.layout_custom}>
        <div className={s.container}>
            <div className={s.sketching}>
                <h3>Sketching</h3>
                <p>Great works start with great ideas</p>
            </div>
            <div className={s.sketchingImg}>
                <Image  src={content.img2[0]} alt='img' width={0} height={0} sizes='100vw' style={{height:'auto',width:'100%'}} />
            </div>
            <div className={s.experimentation}>
                <h3>Experimentation</h3>
                <p>Finding solutions to turn wildest idea into reality</p>
            </div>
            <div className={s.experimentationImg1}>
                <Image  src={content.img2[1]} alt='img' width={0} height={0} sizes='100vw' style={{height:'auto',width:'100%'}} />
            </div>
            <div className={s.experimentationImg2}>
                <Image  src={content.img2[2]} alt='img' width={0} height={0} sizes='100vw' style={{height:'auto',width:'100%'}} />
            </div>
      
            <div className={s.prototyping}>
                <h3>Prototyping & Craftmenship</h3>
                <p>Craftmenship </p>
            </div>
            <div className={s.prototypingImg}>
                <Image  src={content.img2[3]} alt='img' width={0} height={0} sizes='100vw' style={{height:'auto',width:'100%'}} />
            </div>
        </div>
        <div className={s.experimentationImg3}>
                <Image  src={content.img2[4]} alt='img' width={0} height={0} sizes='100vw' style={{height:'auto',width:'100%'}} />
        </div>
    </section>
  )
}
