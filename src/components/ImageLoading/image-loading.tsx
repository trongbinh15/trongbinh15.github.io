import React, { useState } from 'react';
import styled from './image-loading.module.scss';

function ImageLoading({ src, alt, className }) {
    const [loaded, setLoaded] = useState(false);

    return (
        <>
            <div className={styled['wrapper']}>
                <img
                    src={src}
                    alt={alt}
                    className={`${styled['image']} 
                    ${className}
                 ${loaded ? styled['image-visible']
                            : styled['image-hidden']}`}
                    onLoad={() => setLoaded(true)} />

                {!loaded && (
                    <div className={styled['smooth-preloader']}>
                        <span className={styled['loader']} />
                    </div>
                )}
            </div>
        </>
    );
}

export default ImageLoading;