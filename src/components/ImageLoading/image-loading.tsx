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
            <div className='wrapper'>
                <img
                    src={String(src)}
                    alt={String(alt)}
                    className={String( `${styled.image} 
                                ${className}
                                ${loaded ? styled.imageVisible
                                : styled.imageHidden}` )}
                    onLoad={() => setLoaded(true)} />

                {!loaded && (
                    <div className={styled.smoothPreloader}>
                        <span className={styled.loader} />
                    </div>
                )}
            </div>
        </>
    );
}

export default ImageLoading;
