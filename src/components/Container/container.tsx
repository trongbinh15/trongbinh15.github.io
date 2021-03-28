import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';
import ErrorScreen from '../ErrorBoundary/ErrorScreen';
import React, { cloneElement, Suspense, useEffect, useRef, useState } from 'react';
import Skeleton from 'react-loading-skeleton';
import styled from './container-styles.module.scss'
import useIntersectionObserver from '../../hooks/intersection-observer';


function Container({ children, title, backgroundColor, backgroundImage, titleColor}: any) {
    const ref = useRef();
    const [isVisible, setIsVisible] = useState(false);

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
            <div style={{backgroundColor: backgroundColor, backgroundImage: backgroundImage, minHeight: '100vh'}} ref={ref}>
                <div className={styled.header}>
                    {title && <h1 style={{color:titleColor }}>{title}</h1>}
                </div>
                {isVisible &&
                <Suspense fallback={<Skeleton height={"100vh"}></Skeleton>}>
                    <ErrorBoundary Fallback={ErrorScreen}>
                        <children.type></children.type>
                    </ErrorBoundary>
                </Suspense>}
            </div>
        </>
    )
}

export default Container
