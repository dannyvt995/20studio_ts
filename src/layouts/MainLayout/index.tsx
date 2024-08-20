
import RouterControls from '@/app/RouterControls';

import LoadingPage from '@/components/new/LoadingPage';
import Header from '@Layouts/Header';

import React, { PropsWithChildren } from 'react';


export default function MainLayout({ children }: PropsWithChildren): React.ReactElement {

  return (
    <>
      <Header/>
      <LoadingPage/>
      <RouterControls>
        {children}
      </RouterControls>
    </>
  );
}
