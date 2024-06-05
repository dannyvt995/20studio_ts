"use client"
import { useRef, useEffect } from 'react'
import s from './style.module.css'
import gsap from 'gsap'
import { Observer } from "gsap/dist/Observer";
import Image from 'next/image'
import { useRouter } from 'next/navigation';
import cn from 'classnames'
import { listPath ,filterBrightness } from './animation';

interface IRunSlider {
  ListTitleRef: Element[];
  ListSubtitleRef: Element[];
  ListThumbnailRef: Element[];
  ListBackgroundRef: Element[];
  prevState: number;
  nextState: number;
}

interface IGsapSlider {
  indexOfSlider: React.MutableRefObject<number>;
  prevState: number;
  nextState: number;
  ListChildTitle: Element[][];
  ListChildSub: Element[][];
  ListChildThumbnail: Element[];
  ListBackgroundRef: Element[];
  durationAnimation?: number;
  StateLock?: React.MutableRefObject<boolean>;
  dir: number;
}

interface IGsapEnter {
  ListChildTitle: Element[][];
  ListChildSubtitle: Element[][];
  ListThumbnail: Element[];
}

function loadAnimationEnterPage({ListChildTitle, ListChildSubtitle, ListThumbnail}:IGsapEnter) {
  //list_child_title = list_child_subtitles

  ListChildTitle.forEach((child:Element[], index:number) => {

    if (index === 0) {
      gsap.timeline().set(child, {
        yPercent: 0,
        opacity: 1,
      })
        .set(ListChildSubtitle[index], { opacity: .8 })
    } else {
      gsap.timeline({}).set(child, {
        yPercent: -100,
        opacity: 1,
      })
        .set(ListChildSubtitle[index], { opacity: 0 })
    }
  });
}

function runSlider({
  ListTitleRef, ListSubtitleRef, ListThumbnailRef, ListBackgroundRef, prevState, nextState
}:IRunSlider) {
  ListTitleRef[prevState].classList.remove('active');
  ListTitleRef[nextState].classList.add('active');
  ListSubtitleRef[prevState].classList.remove('active');
  ListSubtitleRef[nextState].classList.add('active');
  ListThumbnailRef[prevState].classList.remove('active');
  ListThumbnailRef[nextState].classList.add('active');
  ListBackgroundRef[prevState].classList.remove('active');
  ListBackgroundRef[nextState].classList.add('active');
}
function gsapSlider({ prevState, nextState, ListChildTitle, ListChildSub, ListChildThumbnail, ListBackgroundRef, StateLock, durationAnimation, indexOfSlider, dir }:IGsapSlider) {

 
  indexOfSlider.current++;

  let pathResultBaseDirection1, pathResultBaseDirection2
  switch (dir) {
    case 1:
      pathResultBaseDirection1 = listPath[1];
      pathResultBaseDirection2 = listPath[2];
      break;
    case -1:
      pathResultBaseDirection1 = listPath[2];
      pathResultBaseDirection2 = listPath[1];
      break;
  }

  gsap.timeline({
    onComplete: () => {
      if(StateLock)StateLock.current = false;
    }

  })
    .set(ListChildTitle[nextState], { yPercent: -100 * dir })
    .set(ListChildSub[nextState], { opacity: 0 })
    .set([ListBackgroundRef[prevState].children[0],ListBackgroundRef[nextState].children[0]],filterBrightness.light)
    .set( ListBackgroundRef[nextState].children[0],{yPercent: 20 * dir})
    .set(ListChildThumbnail[nextState], {
      opacity: 1,
      clipPath: pathResultBaseDirection1,
      zIndex: indexOfSlider.current + 111,
    })
    .set(ListBackgroundRef[nextState], {
      clipPath: pathResultBaseDirection2,
      zIndex: indexOfSlider.current - 111,
    })
    .to(
      ListChildTitle[nextState],
      {
        yPercent: 0,
        stagger: 0.1,
        ease: "power3.inOut",

        duration: durationAnimation
      
      })
    .to(
      ListChildTitle[prevState],
      {

        yPercent: 100 * dir,
        stagger: 0.1,
        ease: "power3.inOut",

        duration: durationAnimation,
      }, "<")
    .to(
      ListChildSub[nextState],
      {
        opacity: .8,
        duration: durationAnimation,
        stagger: 0.1,
        ease: "power3.inOut"
      }, "<")
    .to(
      ListChildSub[prevState],
      {
        opacity: 0,
        stagger: 0.1,
        ease: "power3.inOut"
      }, "<")
    .to([ListChildThumbnail[nextState],ListBackgroundRef[nextState]], {
      clipPath: listPath[0],
      duration: durationAnimation,
      ease: "power3.inOut"

    }, "<")
    .to( ListBackgroundRef[nextState].children[0],{

      yPercent: 0,
      duration: durationAnimation,
      ease: "power3.inOut",
    }, "<")
    .to(
      ListBackgroundRef[prevState].children[0],
      {

        yPercent: -42 * dir,
        rotate: 10 * dir,
        scale: 1.1,
        

        duration: durationAnimation,
        ease: "power3.inOut",
        clearProps: "yPercent,rotate,scale",
        ...filterBrightness.dark
      }, "<")



}
function setValStore(val:string|number, nameVal:string) {
  localStorage.setItem(nameVal, val.toString())
}

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

  const ListChildTitleRef = useRef<Element[][]>([])
  const ListChildSubtitleRef = useRef<Element[][]>([])
  const ListChildThumbnailRef = useRef<Element[][]>([])
  const ListChildBackgroundRef = useRef<Element[][]>([])


  useEffect(() => {
    setValStore(0, 'activeItemOnWorkPage')
    if (titlesRef.current && subtitlesRef.current && thumbnailsRef.current && backgroundsRef.current) {
      ListTitleRef.current = Array.from(titlesRef.current.children);
      ListSubtitleRef.current = Array.from(subtitlesRef.current.children);
      ListThumbnailRef.current = Array.from(thumbnailsRef.current.children);
      ListBackgroundRef.current = Array.from(backgroundsRef.current.children);
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
        ListChildTitle : ListChildTitleRef.current, 
        ListChildSubtitle : ListChildSubtitleRef.current, 
        ListThumbnail :ListThumbnailRef.current
      });
    }
    
   
  }, []);
  
  useEffect(() => {
    gsap.registerPlugin(Observer)
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
  },[work_page_ref.current])



  function fireAnimation(dir:number) {
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
      let nextvalueRef = (valueRef.current + 1) % ListTitleRef.current.length; // Loop from 0 to 4
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
      fireAnimation(-1)

    }
  }
  function handleMouseUp() {

    if (stopNow.current === false) {
      stopNow.current = true
      fireAnimation(1)
    }
  }




  function handleOpenProject(e: React.MouseEvent<HTMLButtonElement>) {
    if (stopNow.current === true) return
    observeRefPageWheel.current?.disable()
    let targetIndexProject = e.currentTarget.getAttribute("data-work")
    switch (targetIndexProject) {
      case "1":
        router.push('/work/work1')
        break;
      case "2":
        router.push('/work/work2')
        break;
      case "3":
        router.push('/work/work3')
        break;
      case "4":
        router.push('/work/work4')
        break;

    }
  }
  return (
    <section className={s.work_page} id="work_page" ref={work_page_ref}>
      {/*       <h1  className={s.h1}>Work</h1> */}
      <div className={s.heading}>
        <div className={s.title} ref={titlesRef}>

          <div className={s.active}>
            <span className={s.ii}><span className={s.iii}>100 Years</span></span>
            <span className={s.ii}><span className={s.iii}>Columbia</span></span>
          </div>
          <div>
            <span className={s.ii}><span className={s.iii}>Trao</span></span>
            <span className={s.ii}><span className={s.iii}>Studio</span></span>
            <span className={s.ii}><span className={s.iii}>Pictures</span></span>
          </div>
          <div>
            <span className={s.ii}><span className={s.iii}>Modien</span></span>
            <span className={s.ii}><span className={s.iii}>Pictures</span></span>
            <span className={s.ii}><span className={s.iii}>Studio</span></span>
          </div>
          <div>
            <span className={s.ii}><span className={s.iii}>Tacobeva</span></span>
            <span className={s.ii}><span className={s.iii}>Studio</span></span>
            <span className={s.ii}><span className={s.iii}>Years</span></span>
          </div>
        </div>
        <div className={s.subtitle} ref={subtitlesRef}>
          <div className={s.active}>
            <span className={s.ii}><span className={s.iii}>1..Celebrating a Century of Cinema</span></span>
            <span className={s.ii}><span className={s.iii}>Century of Cinema</span></span>
            <span className={s.ii}><span className={s.iii}></span></span>
          </div>
          <div>
            <span className={s.ii}><span className={s.iii}>2..100 Columbia Pictures 100 of 100</span></span>
            <span className={s.ii}><span className={s.iii}>Columbia Columbia Columbia</span></span>
            <span className={s.ii}><span className={s.iii}>Columbia Columbia </span></span>
          </div>
          <div>
            <span className={s.ii}><span className={s.iii}>3..Columbia Columbia Columbia</span></span>
            <span className={s.ii}><span className={s.iii}></span></span>
            <span className={s.ii}><span className={s.iii}></span></span>
          </div>
          <div>
            <span className={s.ii}><span className={s.iii}>4..100 100100 Columbia Columbia</span></span>
            <span className={s.ii}><span className={s.iii}></span></span>
            <span className={s.ii}><span className={s.iii}></span></span>
          </div>
        </div>
      </div>
      <div className={s.indicator}>
        <span className={s.current} >01</span>
        <span className={s.total}>10</span>
      </div>

      <div className={s.thumbnails} ref={thumbnailsRef}>
        <div className={cn(s.thumbnail,s.active)}>

          <Image src="/clone/services1.webp" alt="job1" width={0} height={0} sizes="100vw" style={{ width: "100%", height: "auto" }} className="thumbnail-image" /></div>
        <div className={s.thumbnail}>

          <Image src="/clone/services2.webp" alt="job1" width={0} height={0} sizes="100vw" style={{ width: "100%", height: "auto" }} className="thumbnail-image" /></div>
        <div className={s.thumbnail}>

          <Image src="/clone/services3.webp" alt="job1" width={0} height={0} sizes="100vw" style={{ width: "100%", height: "auto" }} className="thumbnail-image" /></div>
        <div className={s.thumbnail}>

          <Image src="/clone/services4.webp" alt="job1" width={0} height={0} sizes="100vw" style={{ width: "100%", height: "auto" }} className="thumbnail-image" /></div>

      </div>
      <div className={s.projects} ref={backgroundsRef}>
        <button onClick={handleOpenProject} data-work="1" type="button" className={cn(s.project,s.active)} style={{ display: 'block' }}>
          <div className={s.project_wrap}>
            <Image src="/clone/services1.webp" alt="alt" width={0} height={0} sizes="100vw" style={{ width: "100%", height: "auto" }} className={s.project_image} />
          </div>
        </button>
        <button onClick={handleOpenProject} data-work="2" type="button" className={s.project} style={{ display: 'block' }}>
          <div className={s.project_wrap}>
            <Image src="/clone/services2.webp" alt="alt" width={0} height={0} sizes="100vw" style={{ width: "100%", height: "auto" }} className={s.project_image} />
          </div>
        </button>
        <button onClick={handleOpenProject} data-work="3" type="button" className={s.project} style={{ display: 'block' }}>
          <div className={s.project_wrap}>
            <Image src="/clone/services3.webp" alt="alt" width={0} height={0} sizes="100vw" style={{ width: "100%", height: "auto" }} className={s.project_image} />
          </div>
        </button>
        <button onClick={handleOpenProject} data-work="4" type="button" className={s.project} style={{ display: 'block' }}>
          <div className={s.project_wrap}>
            <Image src="/clone/services4.webp" alt="alt" width={0} height={0} sizes="100vw" style={{ width: "100%", height: "auto" }} className={s.project_image} />
          </div>
        </button>
      </div>
    </section>
  )
}
