import useIntersectionObserver from '../../hooks/intersection-observer';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import styled from './lazy-image.module.scss';
import placeHolder from '../../asset/images/placeholder.png'

type ImgProp = {
    src: string;
    thumbnail?: string;
    alt?: string;
    width?: number;
    height?: number;
    styles?: any;
    className?: string;
    onClick?: any;
}

function LazyImage({ src, thumbnail, height, width, alt, styles, onClick }: ImgProp) {
    const [isVisible, setIsVisible] = useState(false);
    const [imgSrc, setSrc] = useState(placeHolder);
    const imgRef = useRef(null);

    useIntersectionObserver({
        target: imgRef,
        onIntersect: ([entry]: IntersectionObserverEntry[], element: any) => {
              if (entry.isIntersecting) {
                  setIsVisible(true);
                  element.unobserve(imgRef.current)
              }
        },
        threshold: 0.4,
    });

    useEffect(() => {
        if (isVisible) {
            setSrc(thumbnail ? thumbnail : src);
        }
    }, [isVisible, src])


    const handleClick =()=> {
        onClick(src, alt);
    }

    return (
        <>
            <div className={styled.container}>
                <img
                    src={imgSrc}
                    ref={imgRef}
                    style={styles}
                    height={height}
                    onClick={handleClick}
                    width={width}
                />
                </div>
        </>
    );
}

export default LazyImage;
