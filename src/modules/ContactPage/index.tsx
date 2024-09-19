"use client"
import ContactPageIntro from '@Components/new/ContactPageIntro';
import FooterSection from '@Components/new/FooterSection';
import { contact_page } from '@Constants/page_props';
import { IPageModule } from '@/types/common';
import { memo } from 'react';
import WrapperTrackMouse from '@/components/new/WrapperTrackMouse';

function ContactPage(): JSX.Element {

    return (
        <div id="contactpage">
            <ContactPageIntro />
            <WrapperTrackMouse>
            <FooterSection  propsForGsap={contact_page.propsForGsap}/>
            </WrapperTrackMouse>
            
        </div>
    )
}
export default memo(ContactPage)