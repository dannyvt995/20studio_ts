import { useEffect, useRef, useCallback } from 'react';
import Lenis from '@studio-freight/lenis';
import gsap from 'gsap';

const useLenisScroller = (pathNameFormat: string, callback: Function) => {
  const lenisRef = useRef<Lenis>();
  const domScrollRef = useRef<HTMLElement | null>(null); 

  const reInitLenis = useCallback(() => {
    domScrollRef.current = document.getElementById(`${pathNameFormat}page`);
    if(!domScrollRef.current) return
    lenisRef.current = new Lenis({
      syncTouch: true,
      wrapper: domScrollRef.current,
      duration: 1.2,
      easing: (t) => 1 - Math.pow(1 - t, 3.6)
    });

    window.lenis = lenisRef.current;
    gsap.ticker.add(update);

    function update(time:number) {
      lenisRef.current?.raf(time * 1420);
    }
    return () => {
      lenisRef.current = undefined;
      window.lenis = null;
      gsap.ticker.remove(update);
      domScrollRef.current = null;
    };
  }, [pathNameFormat]);

  useEffect(() => {
    callback(reInitLenis);
    return reInitLenis();
  }, [pathNameFormat, callback, reInitLenis]);

  return null;
}

export default useLenisScroller;
