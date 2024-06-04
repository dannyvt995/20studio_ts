import ContactPageIntro from '@/components/new/ContactPageIntro';
import FooterSection from '@/components/new/FooterSection';
import { IPageModule } from '@/types/common';
import { memo } from 'react';
function ContactPage({stateTransition}:IPageModule): JSX.Element {
    const propsForGsap = {
        stateTransitionPage: stateTransition,
        scrollerRef: "#contactpage"
    }
  
    return (
        <div id="contactpage">
            <ContactPageIntro />
            <FooterSection propsForGsap={propsForGsap}/>
        </div>
    )
}
export default memo(ContactPage)