"use client"
import { useRef, useEffect } from 'react'
import s from './style.module.css'
import gsap from 'gsap'
import { Observer } from "gsap/dist/Observer";
import Image from 'next/image'
import { useRouter } from 'next/navigation';
import cn from 'classnames'
import { gsapSlider, loadAnimationEnterPage, runSlider, setValStore } from '@Hooks/work_page/useSliderImage';

gsap.registerPlugin(Observer)
export default function WorkSlider() {

  const observeRefPageWheel = useRef<Observer | null>(null);
  const work_page_ref = useRef(null)
  const stopNow = useRef(false)
  const indexOfSlider = useRef(555)
  const durationAnim = 1
  const valueRef = useRef<number>(0)
  const router = useRouter()
  // ['title','subtitle','indicator','thumbnails','projects']
  const titlesRef = useRef<HTMLDivElement>(null)
  const subtitlesRef = useRef<HTMLDivElement>(null)
  const thumbnailsRef = useRef<HTMLDivElement>(null)
  const backgroundsRef = useRef<HTMLDivElement>(null)

  const ListTitleRef = useRef<Element[]>([])
  const ListSubtitleRef = useRef<Element[]>([])
  const ListThumbnailRef = useRef<Element[]>([])
  const ListBackgroundRef = useRef<Element[]>([])

  const ListChildTitleRef = useRef<any>([])
  const ListChildSubtitleRef = useRef<any>([])
  const ListChildThumbnailRef = useRef<any>([])
  const ListChildBackgroundRef = useRef<any>([])


  useEffect(() => {
    setValStore(0, 'activeItemOnWorkPage')
    if (titlesRef.current && subtitlesRef.current && thumbnailsRef.current && backgroundsRef.current) {
      ListTitleRef.current = Array.from(titlesRef.current.children);
      ListSubtitleRef.current = Array.from(subtitlesRef.current.children);
      ListThumbnailRef.current = Array.from(thumbnailsRef.current.children);
      ListBackgroundRef.current = Array.from(backgroundsRef.current.children);


      // sử dụng 4 scope này , chưa optimaze
      ListChildTitleRef.current = ListTitleRef.current.map(child =>
        Array.from(child.children, child => child.children[0])// 1 lop wrap 
      );
      ListChildSubtitleRef.current = ListSubtitleRef.current.map(child =>
        Array.from(child.children, child => child.children[0]) // 1 lop wrap 
      );
      ListChildThumbnailRef.current = ListThumbnailRef.current.map(child =>
        Array.from(child.children, child => child) // vi thumb co 0 lop wrap
      );
      ListChildBackgroundRef.current = ListBackgroundRef.current.map(child =>
        Array.from(child.children, child => child) // vi thumb co 0 lop wrap
      );

      loadAnimationEnterPage({
        ListChildTitle: ListChildTitleRef.current,
        ListChildSubtitle: ListChildSubtitleRef.current,
        ListThumbnail: ListThumbnailRef.current
      });
    }


  }, []);

  useEffect(() => {

    observeRefPageWheel.current = Observer.create({
      target: work_page_ref.current,
      type: "wheel,touch,pointer",
      wheelSpeed: -1,
      onDown: () => handleMouseDown(),
      onUp: () => handleMouseUp(),

      preventDefault: false
    });
    observeRefPageWheel.current.enable()
    return () => {
      observeRefPageWheel.current = null
      work_page_ref.current = null
    }
  }, [handleMouseDown, handleMouseUp])



  function fireAnimation(dir: number) {
    if (dir === 1) {
      let nextvalueRef = (valueRef.current - 1 + ListTitleRef.current.length) % ListTitleRef.current.length; // Loop from 4 to 0
      runSlider({
        ListTitleRef: ListTitleRef.current,
        ListSubtitleRef: ListSubtitleRef.current,
        ListThumbnailRef: ListThumbnailRef.current,
        ListBackgroundRef: ListBackgroundRef.current,
        prevState: valueRef.current,
        nextState: nextvalueRef
      });
      gsapSlider({
        indexOfSlider: indexOfSlider,
        prevState: valueRef.current,
        nextState: nextvalueRef,
        ListChildTitle: ListChildTitleRef.current,
        ListChildSub: ListChildSubtitleRef.current,
        ListChildThumbnail: ListThumbnailRef.current,
        ListBackgroundRef: ListBackgroundRef.current,
        durationAnimation: durationAnim,
        StateLock: stopNow,
        dir: dir
      });
      //update val
      valueRef.current = nextvalueRef
      setValStore(valueRef.current.toString(), 'activeItemOnWorkPage')
    } else if (dir === -1) {
      let nextvalueRef = (valueRef.current + 1) % ListTitleRef.current.length;
      //just active for parent wrap
      runSlider({
        ListTitleRef: ListTitleRef.current,
        ListSubtitleRef: ListSubtitleRef.current,
        ListThumbnailRef: ListThumbnailRef.current,
        ListBackgroundRef: ListBackgroundRef.current,
        prevState: valueRef.current,
        nextState: nextvalueRef
      })
      //fire anim to child
      gsapSlider({
        indexOfSlider: indexOfSlider,
        prevState: valueRef.current,
        nextState: nextvalueRef,
        ListChildTitle: ListChildTitleRef.current,
        ListChildSub: ListChildSubtitleRef.current,
        ListChildThumbnail: ListThumbnailRef.current,
        ListBackgroundRef: ListBackgroundRef.current,
        durationAnimation: durationAnim,
        StateLock: stopNow,
        dir: dir
      })
      //update val
      valueRef.current = nextvalueRef

      setValStore(valueRef.current.toString(), 'activeItemOnWorkPage')
    }
  }


  function handleMouseDown() {
    if (stopNow.current === false) {
      stopNow.current = true
      fireAnimation(1)

    }
  }
  function handleMouseUp() {

    if (stopNow.current === false) {
      stopNow.current = true
      fireAnimation(-1)
    }
  }




  function handleOpenProject(e: React.MouseEvent<HTMLButtonElement>) {
    if (stopNow.current === true) return
    observeRefPageWheel.current?.disable()
               document.body.style.pointerEvents = 'none'
    let targetIndexProject = e.currentTarget.getAttribute("data-work")
    switch (targetIndexProject) {
      case "1":

        prepareBeforeRedirect('/work/work1')
        break;
      case "2":
        prepareBeforeRedirect('/work/work2')
        break;
      case "3":
        prepareBeforeRedirect('/work/work3')
        break;
      case "4":
        prepareBeforeRedirect('/work/work4')
        break;

    }
  }
  function removeElementAtIndex(array:any, n:any) {
    if (n < 0 || n >= array.length) {
      return array;
    }
    return array.slice(0, n).concat(array.slice(n + 1));
  }
  
  function prepareBeforeRedirect(targetUrl: string) {
    const arrToRemoveThumb = removeElementAtIndex([0,1,2,3], valueRef.current); // 4 project
    for (let i = 0; i < arrToRemoveThumb.length; i++) {
      gsap.set(ListThumbnailRef.current[arrToRemoveThumb[i]],{opacity:0})
      
    }
    const timeline = gsap.timeline({
      defaults: { duration: 1 },
      onComplete: () => {
        // gsap.set(ListChildBackgroundRef.current[valueRef.current][0].children, {
        //   opacity:0
        // })
       router.push(targetUrl)
      }
    })

    const arr = [
      ...ListChildTitleRef.current[valueRef.current],
      ...ListChildSubtitleRef.current[valueRef.current]
    ]
    timeline
    
    .to(arr, {
      y: '-100%',
    })
      .fromTo(ListThumbnailRef.current[valueRef.current], {

        clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)'
      }, {

        clipPath: 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)',

      }, '<')
      .fromTo(ListThumbnailRef.current[valueRef.current].children, {
        scale: 1,
      }, {
        rotate: -10,
        scale: 1.1,
        y: '-70%',
      }, '<')
      .to(ListChildBackgroundRef.current[valueRef.current][0].children, {
        scale: 1,

      }, '<')

  }

  return (
    <section className={s.work_page} id="work_page" ref={work_page_ref}>

      <div className={s.heading}>
        <div className={s.title} ref={titlesRef}>

          <div className={s.active}>
            <span className={s.ii}><span className={s.iii}>Unwanted</span></span>
            <span className={s.ii}><span className={s.iii}>Project</span></span>
          </div>
          <div>
            <span className={s.ii}><span className={s.iii}>Nét</span></span>
            <span className={s.ii}><span className={s.iii}>Collection</span></span>
          </div>
          <div>
            <span className={s.ii}><span className={s.iii}>Lung Tung</span></span>
            <span className={s.ii}><span className={s.iii}>Collection 2</span></span>

          </div>
          <div>
            <span className={s.ii}><span className={s.iii}>20 Studio</span></span>
            <span className={s.ii}><span className={s.iii}>Website</span></span>
          </div>
        </div>
        <div className={s.subtitle} ref={subtitlesRef}>
          <div className={s.active}>
            <span className={s.ii}><span className={s.iii}>Sample management</span></span>
           {/*  <span className={s.ii}><span className={s.iii}>Thêm 1 dòng</span></span> */}
      
          </div>
          <div>
            <span className={s.ii}><span className={s.iii}>Sample management</span></span>
            {/* <span className={s.ii}><span className={s.iii}>Thêm 1 dòng</span></span> */}
           
          </div>
          <div>
            <span className={s.ii}><span className={s.iii}>Production management</span></span>
            {/* <span className={s.ii}><span className={s.iii}>Thêm 1 dòng</span></span> */}
          </div>
          <div>
          <span className={s.ii}><span className={s.iii}>Web development</span></span>
        {/*   <span className={s.ii}><span className={s.iii}>Thiết kế đồ hoạ</span></span> */}
          </div>
        </div>
      </div>
      <div className={s.indicator}>
        <span className={s.current} >01</span>
        <span className={s.splash} >/</span>
        <span className={s.total}>04</span>
      </div>

      <div className={s.thumbnails} ref={thumbnailsRef}>
        <div className={cn(s.thumbnail, s.active)}>

          <Image quality={100} src="/clone/services1.png" alt="image_cache_services1" width={0} height={0} sizes="100vw" style={{ width: "100%", height: "auto" }} className="thumbnail-image" /></div>
        <div className={s.thumbnail}>

          <Image quality={100} src="/clone/services2.webp" alt="image_cache_services2" width={0} height={0} sizes="100vw" style={{ width: "100%", height: "auto" }} className="thumbnail-image" /></div>
        <div className={s.thumbnail}>

          <Image quality={100} src="/clone/services3.webp" alt="image_cache_services3" width={0} height={0} sizes="100vw" style={{ width: "100%", height: "auto" }} className="thumbnail-image" /></div>
        <div className={s.thumbnail}>

          <Image quality={100} src="/clone/services4.webp" alt="image_cache_services4" width={0} height={0} sizes="100vw" style={{ width: "100%", height: "auto" }} className="thumbnail-image" /></div>

      </div>
      <div className={s.projects} ref={backgroundsRef}>
        <button onClick={handleOpenProject} data-work="1" type="button" className={cn(s.project, s.active)} style={{ display: 'block' }}>
          <div className={s.project_wrap}>
            <Image quality={100} src="/clone/services1.png" alt="alt" width={0} height={0} sizes="100vw" style={{ width: "100%", height: "auto" }} className={s.project_image} />
          </div>
        </button>
        <button onClick={handleOpenProject} data-work="2" type="button" className={s.project} style={{ display: 'block' }}>
          <div className={s.project_wrap}>
            <Image quality={100} src="/clone/services2.webp" alt="alt" width={0} height={0} sizes="100vw" style={{ width: "100%", height: "auto" }} className={s.project_image} />
          </div>
        </button>
        <button onClick={handleOpenProject} data-work="3" type="button" className={s.project} style={{ display: 'block' }}>
          <div className={s.project_wrap}>
            <Image quality={100} src="/clone/services3.webp" alt="alt" width={0} height={0} sizes="100vw" style={{ width: "100%", height: "auto" }} className={s.project_image} />
          </div>
        </button>
        <button onClick={handleOpenProject} data-work="4" type="button" className={s.project} style={{ display: 'block' }}>
          <div className={s.project_wrap}>
            <Image quality={100} src="/clone/services4.webp" alt="alt" width={0} height={0} sizes="100vw" style={{ width: "100%", height: "auto" }} className={s.project_image} />
          </div>
        </button>
      </div>
    </section>
  )
}
