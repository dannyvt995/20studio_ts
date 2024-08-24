
import RouterControls from '@/app/RouterControls';
import CacheImageGroup from '@/components/new/CacheImageGroup';

import LoadingPage from '@/components/new/LoadingPage';
import Header from '@Layouts/Header';

import React, { memo, PropsWithChildren } from 'react';


function MainLayout({ children }: PropsWithChildren): React.ReactElement {
  // -+- console.log("MainLayout=====>1 time")
  return (
    <>
      <Header/>
    
      <CacheImageGroup/>
      <RouterControls>
        {children}
      </RouterControls>
    </>
  );
}
export default memo(MainLayout)