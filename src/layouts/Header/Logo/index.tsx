// 'use client';

// import useUiContext from '@Contexts/iu';
// import { MathMap } from '@Utils/mathUtils';
// import { gsap } from 'gsap';
// import { LottieRefCurrentProps } from 'lottie-react';
// import { usePathname } from 'next/navigation';
// import React, { useEffect, useRef } from 'react';

// import s from './styles.module.scss';

// export default function Logo(): React.ReactElement {
//   const refContent = useRef<HTMLDivElement>(null);
//   const refLottie = useRef<LottieRefCurrentProps | null>(null);
//   const refTo = useRef<HTMLDivElement>(null);
//   const refForm = useRef<HTMLDivElement>(null);
//   const refWrapLottie = useRef<HTMLDivElement>(null);
//   const pathname = usePathname();
//   const { logoColor } = useUiContext();

//   useEffect(() => {
//     const gsapContext = gsap.context(() => {
//       if (pathname === '/') {
//         const setterW = gsap.quickSetter(refWrapLottie.current, 'width', 'px');
//         const setterY = gsap.quickSetter(refWrapLottie.current, 'y', 'px');
//         const tmp = { value: 0 };
//         gsap.to(tmp, {
//           value: 100,
//           scrollTrigger: {
//             trigger: refContent.current,
//             start: 'top top',
//             end: () => {
//               return `+=${window.innerHeight} top`;
//             },
//             scrub: true,
//             onUpdate: (s) => {
//               const f = MathMap(
//                 s.progress,
//                 0,
//                 1,
//                 5,
//                 (refLottie.current?.getDuration(true) || 75) - 1
//               );
//               refLottie.current?.goToAndStop(Math.floor(f), true);

//               if (!refTo.current || !refForm.current) return;
//               const rectTo = refTo.current.getBoundingClientRect();
//               const rectForm = refForm.current.getBoundingClientRect();

//               const wTo = MathMap(s.progress, 0, 1, rectForm.width, rectTo.width);
//               const yTo = MathMap(s.progress, 0, 1, 0, rectTo.top - rectForm.top);
//               setterW(wTo);
//               setterY(yTo);
//             },
//           },
//         });
//       }
//     }, [refWrapLottie, refLottie, refContent]);
//     return () => gsapContext.revert();
//   }, [pathname]);

//   return (
//     <div
//       ref={refContent}
//       className={`${s.logo} ${pathname === '/' ? s.isHome : ''} ${s[logoColor]}`}
//     ></div>
//   );
// }
