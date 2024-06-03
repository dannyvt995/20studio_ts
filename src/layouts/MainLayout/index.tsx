import RouterControls from '@/app/RouterControls';
import LenisScroller from '@Components/LenisScroller';
import Header from '@Layouts/Header';
import React, { PropsWithChildren } from 'react';


export default function MainLayout({ children }: PropsWithChildren): React.ReactElement {
  return (
    <main>
      <Header/>
      <RouterControls>
        {children}
      </RouterControls>
      {/* <LenisScroller>
        {children}
      </LenisScroller> */}
      
    </main>
  );
}
