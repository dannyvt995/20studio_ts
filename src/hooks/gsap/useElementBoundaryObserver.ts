import { useState, useEffect, useRef } from "react";

export function useElementBoundaryObserver(rootmargin:any, thresholdValue:any) {
const ref = useRef(null); // We initialize a useRef to track our element.
const [boundary, setBoundary] = useState(''); // The boundary state will indicate whether the element is at the top or bottom of the viewport.

useEffect(() => {
    const currentRef = ref.current;
    const observerOptions = {
        root: null, // root null means it's relative to the viewport.
        rootMargin: rootmargin,
        threshold: thresholdValue,
    };

    // Create a new IntersectionObserver instance.
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            const rect = entry.boundingClientRect; // This provides the location of the observed element.
            // -+- console.log(rect.y)
            // Here we check the position of the element and update the boundary state accordingly.
            if (rect.y <= 0) {
                entry.isIntersecting ? setBoundary('topIn'):setBoundary('topOut');
            } else if (rect.y <= 300) {
                setBoundary('bottomIn');
            } else if (rect.y >= (window.innerHeight || document.documentElement.clientHeight)) {
                setBoundary('bottomOut');
            }
        });
    }, observerOptions);

    // Start observing the current reference.
    if (currentRef) {
        observer.observe(currentRef);
    }

    // Make sure to unobserve the element on component unmount to avoid memory leaks.
    return () => {
        if (currentRef) {
            observer.unobserve(currentRef);
        }
    };
}, [rootmargin, thresholdValue]); // We add rootmargin and thresholdValue to the dependency array so the effect reruns when they change.

return [ref, boundary]; // Return the ref and boundary state.
}