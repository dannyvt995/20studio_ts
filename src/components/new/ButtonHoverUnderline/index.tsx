"use client"
import React, { useEffect, useRef, memo } from "react";
import gsap from "gsap";
import Link from "next/link";
import PropTypes from "prop-types";
import s from './style.module.css';
import { usePathname } from "next/navigation";
import useStoreZustand from "@Hooks/useStoreZustand";


function ConvertPach(target:string) {
  let value
  if (target === '/') {
    value = "/home"
  }else{
    value = target
  }
  return value
}
interface ButtonHoverUnderline {
  noName?: string;
  auto_link?: string;
  eventPass?: () => void;
  data_link?: string;
  data_type?: string;
  data_slider?: string;
  children?: React.ReactNode;
  color?: string;
  classStyle?: string;
}
const ButtonHoverUnderline: React.FC<ButtonHoverUnderline> = ({
  noName,
  auto_link,
  eventPass,
  data_link,
  data_type,
  data_slider,
  children,
  color,
  classStyle
}) => {

  const aRef = useRef(null);
  const aUnderlineRef = useRef(null);
  const timelineRef = useRef(null);
  const pathName = usePathname()
  const easeOps = "power4.inOut"
  const durationOps = 0.5
  const auto_linkConvert = ConvertPach(auto_link || '') // NOTEFORSTUDY

  const { selectedItemNavbar } = useStoreZustand();


  let activeTab = null
  if (auto_linkConvert !== "empty") {
    activeTab = pathName === auto_link;
  } else {
    // --^^ console.log(data_link)
    activeTab = pathName === data_link;
  }



  const handleClick = () => {

    if (eventPass) {
      eventPass();
    }
  };

  // useEffect(() => {
    
  //   // Set props for DOM
  //   const appliedColor = color || "#fffcf5";
  //   aRef.current.style.color = appliedColor;
  //   aUnderlineRef.current.style.backgroundColor = appliedColor;

  //   // Set timeline for DOM
  //   timelineRef.current = gsap.timeline({ paused: true });
  //   timelineRef.current.fromTo(aUnderlineRef.current, {
  //     width: "0%",
  //     left: "0%",
  //   }, {
  //     width: "100%",
  //     duration: durationOps,
  //     ease:easeOps,
  //   });

  //   timelineRef.current.add("midway");
  //   timelineRef.current.fromTo(aUnderlineRef.current, {
  //     width: "100%",
  //     left: "0%",
  //   }, {
  //     width: "0%",
  //     left: "100%",
  //     duration: durationOps,
  //     ease:easeOps,
  //     immediateRender: false,
  //   });
  //  /*  // --^^ console.log("ButtonHoverUnderline re-render") */
  //   const enterAnimation = (e) => {
  //     let targetIndex = e.target.getAttribute("data_slider")
  //     timelineRef.current.tweenFromTo(0, "midway");
    
  //     if(targetIndex !== "empty") {
    
  //       useForNavbarModal(targetIndex)
      
  //     }
  //   };
  //   function useForNavbarModal(targetIndex) {
  //     selectedItemNavbar(targetIndex)
 
  //   }
  //   const leaveAnimation = () => {
  //     timelineRef.current.play();
  //   };

  //   // MouseListener
  //   aRef.current.addEventListener("mouseenter", enterAnimation);
  //   aRef.current.addEventListener("mouseleave", leaveAnimation);
  //   return () => {
  //     timelineRef.current.kill();
  //     timelineRef.current = null
  //     aUnderlineRef.current = null
  //     aRef.current?.removeEventListener("mouseenter", enterAnimation);
  //     aRef.current?.removeEventListener("mouseleave", leaveAnimation);
  //     aRef.current = null
  //   };
  // }, []);

  return (
    <>
    buTTON
    </>
    // <div
    //   className={`BtnHoverUnderLine ${(pathName === auto_link || pathName === data_link) ? 'activeTab' : ''}`}
    //   data_slider={data_slider || "empty"}
    //   data_type={data_type || "empty"}
    //   auto_link={auto_link || "empty"}
    //   onClick={eventPass ? handleClick : null}
    //   ref={aRef}
    // >
    //   {/* <span className="IconBtn">
    //     <svg viewBox="0 0 11 10" fill="#fffff" xmlns="http://www.w3.org/2000/svg" className="icon-arrow" ><path d="M0 5.65612V4.30388L8.41874 4.31842L5.05997 0.95965L5.99054 0L10.9923 4.97273L6.00508 9.96L5.07451 9.00035L8.43328 5.64158L0 5.65612Z" fill="currentColor" ></path></svg>
    //   </span> */}
    //   {eventPass ? (
    //     // tạo thêm 1 eff trans cho trường hợp modal > page
    //     <a  data_link={data_link || "empty"}  className={classStyle}>{children}</a>
    //   ) : (
    //     <Link href={auto_link} className={classStyle}>{children}</Link>
    //   )}

    //   <span
    //     ref={aUnderlineRef}
    //     style={{ top: noName }}
    //     className="underline_Dom_Effect"
    //   ></span>

    // </div>
  );
}


export default memo(ButtonHoverUnderline)
