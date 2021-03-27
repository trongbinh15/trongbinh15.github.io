
import useIntersectionObserver from '../../hooks/intersection-observer';
import React, { useRef, useState } from 'react';

function LazyComponent({children}: any) {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef();

    useIntersectionObserver({
        target: ref,
        onIntersect: ([entry]: IntersectionObserverEntry[], element: any) => {
              if (entry.isIntersecting) {
                  setIsVisible(true);
                  element.unobserve(ref.current)
              }
        },
        threshold: 0.4,
    });

    return (
        <>
        <div ref={ref}></div>
        {isVisible && children}
        </>
    );
}

export default LazyComponent;
