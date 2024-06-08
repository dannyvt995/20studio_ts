import { useEffect } from 'react'
import { useElementBoundaryObserver } from "@/hooks/gsap/useElementBoundaryObserver";

export default function index({ children }: { children: any }) {
    const [ref, boundary] = useElementBoundaryObserver("0px", 1.0);
    useEffect(() => {
        console.log(boundary)
    }, [boundary]);
    return (
        <div ref={ref}>{children}</div>
    )
}
