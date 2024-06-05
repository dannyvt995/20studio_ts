'use client';
import React, { memo, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import Image from 'next/image';
import s from './style.module.css'
import useStoreZustand from '@/hooks/useStoreZustand';

type typeRef = HTMLDivElement | HTMLButtonElement;



export const Mask = ({ children }: { children: React.ReactElement }): React.ReactElement => {
    const refContent = useRef<typeRef>(null)
    const helloRef = React.cloneElement(children, { ...{ ref: refContent}})
    useEffect(() => {
        if (refContent.current) {
            gsap.timeline()
                .set(refContent.current, { x: -500,y:200,rotate:-20,scale:.2 })
                .to(refContent.current, { duration: 1, x: 0,y:0,rotate:0,scale:1., ease: "power2.out" });
        }
    }, [refContent])
    return helloRef;
};
Mask.displayName = 'MeskRef'
export const Button = ({ children, data_link }: { children: string, data_link: string }) => {
    const ButtonRef = useRef<HTMLButtonElement>(null)
    const { selectedItemNavbar } = useStoreZustand();
    useEffect(() => {
        if (!ButtonRef.current) return
        const enterAnimation = (e: any) => {
            let targetIndex = e.target.getAttribute("data-link")

            selectedItemNavbar(targetIndex as number)
        };
     
        const leaveAnimation = () => {
            //setTimeoutactiveherer
        };

        ButtonRef.current.addEventListener("mouseenter", enterAnimation);
        ButtonRef.current.addEventListener("mouseleave", leaveAnimation);
        return () => {
            if (ButtonRef.current) {
                ButtonRef.current.removeEventListener("mouseenter", enterAnimation);
                ButtonRef.current.removeEventListener("mouseleave", leaveAnimation);
            }
        };
    }, []);
    return (
        <button data-link={data_link} ref={ButtonRef}>{children}</button>
    )
}
Button.displayName = 'ButtonRef'
export const ListButton = memo(() => {
    return (
        <div className={s.item_button} >
            <Button data_link="0">Item1</Button>
            <Button data_link="1">Item1</Button>
            <Button data_link="2">Item1</Button>
            <Button data_link="3">Item1</Button>
        </div>
    )
})
ListButton.displayName = 'ListButtonRef'
export const WrapperMask = ({ img }: { img: string }) => {
    return (
        <Mask>
            <div className={s.w}>
                <Image src={img} width={420} height={420} alt="" />
            </div>
        </Mask>
    )
}
WrapperMask.displayName = 'WrapperMaskRef'
function lerp(start: number, end: number, t: number) {
    return start + (end - start) * t;
}

export const SliderImage = () => {

    const { indexItemNavbar } = useStoreZustand();
    const [outs, setOuts] = React.useState<(JSX.Element | null)[]>([]);
    const listItem = React.useMemo(() => [
        <WrapperMask key={0} img={"/home/banner.png"} />,
        <WrapperMask key={1} img={"/home/form_contact_bgsection.png"} />,
        <WrapperMask key={2} img={"/clone/ser1.jpg"} />,
        <WrapperMask key={3} img={"/clone/ser2.jpg"} />
    ], []);
    const updateOuts = (() => {
        let newOut;
        switch (indexItemNavbar) {
            case 1:
                newOut = listItem[indexItemNavbar];
                break;
            case 2:
                newOut = listItem[indexItemNavbar];
                break;
            case 3:
                newOut = listItem[indexItemNavbar];
                break;
            case 4:
                newOut = listItem[indexItemNavbar];
                break;
            default:
                newOut = listItem[0];
                break;
        }
   
        setOuts(prevOuts => [...prevOuts, newOut]);
        const max = listItem.length * 8

        if (outs.length > max) {
            setOuts(prevOuts => prevOuts.slice(outs.length, outs.length - 15));
            setOuts(prevOuts => [...prevOuts, newOut]);
        }
        
        return newOut
    })


    useEffect(() => {
        updateOuts();
    }, [indexItemNavbar]);
    return (
        <div className={s.list_image}>
            {outs.map(out => out)}
        </div>
    );
}
SliderImage.displayName = 'SliderImageRef'
const SliderImageHover = memo((): React.ReactElement => {

    return (
        <>
            <ListButton />
            <SliderImage />
        </>

    );
});
SliderImageHover.displayName = 'SliderImageHoverRef'
export default SliderImageHover;
