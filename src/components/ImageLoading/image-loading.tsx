import React, { useState } from 'react';
import styled from './image-loading.module.scss';



type ImgProp = {
    src: string;
    alt?: string;
    className: string;
}

function ImageLoading(props: ImgProp) {
    const [loaded, setLoaded] = useState(false);
    const { src, alt, className } = props;

    return (
        <>
            <div className='aha'>
                <img
                    src={String(src)}
                    alt={String(alt)}
                    className={String( `${styled['image']} 
                                ${className}
                                ${loaded ? styled['image-visible']
                                : styled['image-hidden']}` )}
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
