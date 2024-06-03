'use client';

import { PageTransition } from '@/layouts/TransitionPage';
import Lenis from '@studio-freight/lenis';
import { ReactLenis } from '@studio-freight/react-lenis';

import gsap from 'gsap';
import React, { PropsWithChildren } from 'react';


interface ISmoothScroller extends PropsWithChildren { }

export default function LenisScroller({ children }: ISmoothScroller): React.ReactElement {
  const lenisRef = React.useRef<Lenis>()
  React.useEffect(() => {

    function update(time: number): void {
      lenisRef.current?.raf(time * 1000);
    }


    lenisRef.current?.start();
    gsap.ticker.add(update);
    window.lenis = lenisRef.current;

    return () => {
      gsap.ticker.remove(update);
    };
  })


  const options = {
    duration: 2,
    lerp: 0.05,
    smoothTouch: true,
  };

  return (
    <ReactLenis root ref={lenisRef} autoRaf={false} options={options}>
      {children}
    </ReactLenis>
  );
}
