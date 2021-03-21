import useIntersectionObserver from '../../hooks/intersection-observer';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import styled from './lazy-image.module.scss';
import placeHolder from '../../asset/images/placeholder.png'

type ImgProp = {
    src: string;
    alt?: string;
    width?: number;
    height?: number;
    styles?: any;
    className?: string;
}

function LazyImage({ src, height, width, styles }: ImgProp) {
    const [isVisible, setIsVisible] = useState(false);
    const [imgSrc, setSrc] = useState(placeHolder);
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

    useEffect(() => {
        if (isVisible) {
            setSrc(src);
        }
    }, [isVisible, src])

    useEffect(() => {
        const img = new Image();
        img.src = imgSrc;
    }, []);

    return (
        <>
            <img
                className={styled.img}
                src={imgSrc}
                ref={ref}
                style={styles}
                height={height}
                width={width}
                />
        </>
    );
}

export default LazyImage;
