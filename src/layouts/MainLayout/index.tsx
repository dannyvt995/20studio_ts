
import RouterControls from '@/app/RouterControls';
import CacheImageGroup from '@/components/new/CacheImageGroup';
import Cursor from '@/components/new/Cursor';


import Header from '@Layouts/Header';

import React, { memo, PropsWithChildren } from 'react';


function MainLayout({ children }: PropsWithChildren): React.ReactElement {
  console.log("MainLayout=====>1 time")
  return (
    <>
      <Header/>
    
      <CacheImageGroup/>
      <Cursor/>
      <RouterControls>
        {children}
      </RouterControls>
    </>
  );
}
export default memo(MainLayout)