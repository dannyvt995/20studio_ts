
import RouterControls from '@/app/RouterControls';
import CacheImage from '@/components/new/CacheImage';
import Header from '@Layouts/Header';

import React, { PropsWithChildren } from 'react';


export default function MainLayout({ children }: PropsWithChildren): React.ReactElement {

  return (
    <>
      <Header/>
      <CacheImage/>
      <RouterControls>
        {children}
      </RouterControls>
    </>
  );
}
