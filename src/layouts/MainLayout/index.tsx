import RouterControls from '@/app/RouterControls';
import CacheImage from '@/components/new/CacheImage';
import LenisScroller from '@Components/LenisScroller';
import Header from '@Layouts/Header';
import React, { PropsWithChildren } from 'react';


export default function MainLayout({ children }: PropsWithChildren): React.ReactElement {
  return (
    <main>
      <Header/>
      <CacheImage/>
      <RouterControls>
        {children}
      </RouterControls>
      {/* <LenisScroller>
        {children}
      </LenisScroller> */}
      
    </main>
  );
}
