"use client"
import RouterControls from '@/app/RouterControls';
import CacheImageGroup from '@/components/new/CacheImageGroup';
import Cursor from '@/components/new/Cursor';
import { isMobile } from '@/utils/responsive';

import Header from '@Layouts/Header';

import { memo, PropsWithChildren, useEffect, useState } from 'react';


function MainLayout({ children }: PropsWithChildren): React.ReactElement {
  console.log("MainLayout=====>1 time")
  const [isMobi,setIsMobi] = useState(false)
  useEffect(() => {
    if(isMobile()) setIsMobi(true)
  },[])

  return (
    <>
      <Header/>
    
      <CacheImageGroup/>
      {isMobi ? <></> : <Cursor/>}
      <RouterControls>
        {children}
      </RouterControls>
    </>
  );
}
export default memo(MainLayout)