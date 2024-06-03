import React from 'react';
import cn from 'classnames'
import s from './style.module.css'
import StarIcon from '@/components/Icon/StarIcon';
interface IOurPartners {
    backgroundClass: string
}
const OurPartners = ({ backgroundClass }: IOurPartners) => {
    return (

        <section className={cn(s.our_partners_section, backgroundClass)}>
            <div className={cn(s.grid_12col_container,s.grid_2row)}>
                <div className={cn(s.row1,s.title)}>
                    <h2>Đối Tác Đồng Hành</h2>
                </div>
                <div className={cn(s.row1,s.tag)}>
                    <span >
                        <StarIcon src='/icon/star.svg'/>
                    </span>
                    <p>Khách hàng</p>
                </div>
                <div className={cn(s.row2,s.listLogoPartners)}>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        </section>
    );
}

export default OurPartners;
