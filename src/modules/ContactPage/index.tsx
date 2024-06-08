import ContactPageIntro from '@Components/new/ContactPageIntro';
import FooterSection from '@Components/new/FooterSection';
import { contact_page } from '@Constants/page_props';
import { IPageModule } from '@/types/common';
import { memo } from 'react';

function ContactPage({stateTransition}:IPageModule): JSX.Element {

    return (
        <div id="contactpage">
            <ContactPageIntro />
            <FooterSection state={stateTransition} propsForGsap={contact_page.propsForGsap}/>
        </div>
    )
}
export default memo(ContactPage)