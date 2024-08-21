'use client';
import React, { memo, useEffect, useRef } from 'react';
import gsap from 'gsap';

import Image from 'next/image';
import s from './style.module.css'
import useStoreZustand from '@/hooks/useStoreZustand';
import { useGSAP } from '@gsap/react';
gsap.registerPlugin(useGSAP)
type typeRef = HTMLDivElement | HTMLButtonElement;



export const Mask = ({ children }: { children: React.ReactElement }): React.ReactElement => {
    const refContent = useRef<typeRef>(null)
    const helloRef = React.cloneElement(children, { ...{ ref: refContent}})
    useGSAP(() => {
        if (refContent.current) {
            gsap.timeline({
                onComplete:() => {
                    gsap.set(refContent.current,{clearProps:"all"})
                }
            })
                .set(refContent.current, { x: -500,y:200,rotate:-20,scale:.2 })
                .to(refContent.current, { duration: 1, x: 0,y:0,rotate:0,scale:1., ease: "power2.out" });
        }
    })
    return helloRef;
};

Mask.displayName = 'MeskRef'

export const WrapperMask = ({ img }: { img: string }) => {
    return (
        <Mask>
            <div className={s.w}>
                <Image src={img} width={420} height={420} alt="" />
            </div>
        </Mask>
    )
}
WrapperMask.displayName = 'WrapperMask'

export const SliderImageNavbar = () => {
    
    const maxToSlice = 32;
    const { indexItemNavbar } = useStoreZustand();
    const [outs, setOuts] = React.useState<(JSX.Element | null)[]>([]);
    const [count, setCount] = React.useState<number>(0);
    const updateOuts = () => {
        let newOut;
        setCount(count+1)
       
        switch (indexItemNavbar) {
            case 1:
                newOut = <WrapperMask key={count} img={"/clone/ser2.jpg"} />;
                break;
            case 2:
                newOut = <WrapperMask key={count} img={"/about/banner.webp"} />;
                break;
            case 3:
                newOut = <WrapperMask key={count} img={"/clone/ser1.jpg"} />;
                break;
            case 4:
                newOut = <WrapperMask key={count} img={"/home/banner.png"} />;
                break;
            default:
                newOut = <WrapperMask key={count} img={"/home/banner.png"} />;
                break;
        }
      
        setOuts(prevOuts => {
            const updatedOuts = [...prevOuts, newOut];
            if (updatedOuts.length > maxToSlice) {
                return updatedOuts.slice(updatedOuts.length - (maxToSlice / 2), updatedOuts.length);
            }
            return updatedOuts;
        });
    };

    useEffect(() => {
      
        updateOuts();
    }, [indexItemNavbar]);

    return (
        <div className={s.list_image}>
            {outs.map(out => out)}
        </div>
    );
};

SliderImageNavbar.displayName = 'SliderImageNavbar'


export const SliderImageService = () => {
    
    const maxToSlice = 32;
    const { indexItemService } = useStoreZustand();
    const [outs, setOuts] = React.useState<(JSX.Element | null)[]>([]);
    const [count, setCount] = React.useState<number>(0);
    const updateOuts = () => {
        let newOut;
        setCount(count+1)
       
        switch (indexItemService) {
            case 1:
                newOut = <WrapperMask key={count} img={"/clone/ser2.jpg"} />;
                break;
            case 2:
                newOut = <WrapperMask key={count} img={"/about/banner.webp"} />;
                break;
            case 3:
                newOut = <WrapperMask key={count} img={"/clone/ser1.jpg"} />;
                break;
            case 4:
                newOut = <WrapperMask key={count} img={"/home/banner.png"} />;
                break;
            default:
                newOut = <WrapperMask key={count} img={"/home/banner.png"} />;
                break;
        }
      
        setOuts(prevOuts => {
            const updatedOuts = [...prevOuts, newOut];
            if (updatedOuts.length > maxToSlice) {
                return updatedOuts.slice(updatedOuts.length - (maxToSlice / 2), updatedOuts.length);
            }
            return updatedOuts;
        });
    };

    useEffect(() => {
      
        updateOuts();
    }, [indexItemService]);

    return (
        <div className={s.list_image}>
            {outs.map(out => out)}
        </div>
    );
};

SliderImageService.displayName = 'SliderImageService'

const SliderImageHover = memo(({type}:{type:string}): React.ReactElement => {
   
    return (
        <>
            {type === 'navbar' ?  <SliderImageNavbar /> : null}
            {type === 'service' ?  <SliderImageService /> : null}
        </>

    );
});
SliderImageHover.displayName = 'SliderImageHover'

export default SliderImageHover;
