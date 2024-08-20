"use client"
import Image from 'next/image'
import React, { useState, useEffect, useRef, memo } from 'react'
import s from './style.module.css'
import useStoreZustand from '@/hooks/useStoreZustand'
import CacheImageGroup from '../CacheImageGroup'

function LoadingPage() {
  const [progress, setProgress] = useState(0);
  const {stateEnterPage,setStateEnterPage} = useStoreZustand()
  const container = useRef<HTMLDivElement>(null)
  useEffect(() => {
    let start:any = null;
    const duration = 1000; // 1 giây
    const updateProgress = (timestamp:any) => {
      if (!start) start = timestamp;
      const elapsed = timestamp - start;
      const progressPercentage = Math.min((elapsed / duration) * 100, 100);
      setProgress(progressPercentage);

      if (elapsed < duration) {
        requestAnimationFrame(updateProgress); // Tiếp tục gọi cho đến khi đủ thời gian
      }
    };

    requestAnimationFrame(updateProgress); // Bắt đầu vòng lặp

    return () => setProgress(0); // Reset progress khi component bị unmount
  }, []);

  useEffect(() => {
    if (progress === 100) {
      // Gọi setStateEnterPage sau 720ms
      const timeoutId = setTimeout(() => {
        setStateEnterPage();

        // Ẩn container sau 1000ms
        const hideTimeoutId = setTimeout(() => {
          if (container.current) {
            container.current.style.display = 'none';
          }
        }, 1500);

        // Cleanup
        return () => clearTimeout(hideTimeoutId);

      }, 720);

      // Cleanup
      return () => clearTimeout(timeoutId);
    }
  }, [progress, setStateEnterPage]);



  return (
    <div className={s.loadingPage} ref={container}>
  
      <div style={{ width: '100%', backgroundColor: 'black' }}>
        <div
          style={{
            width: `100vw`,
            height: '8px',
            backgroundColor: 'white',
            transform: `translateX(${progress}%)`,
            willChange:'transform',
            transition: '0.3s ease-out',
          }}
        />
      </div>

      <CacheImageGroup/>
    </div>
  )
}

export default memo(LoadingPage);
