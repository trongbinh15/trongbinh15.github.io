import LazyImage from '../LazyImage/lazy-image';
import React, { lazy, useEffect, useRef, useState } from 'react';
import placeHolder from '../../asset/images/placeholder.png';
import styled from './galley-styles.module.scss'
import { Link } from 'react-router-dom';
import { Module } from "webpack";


type IImage = {
  src: string;
  thumbnail: string;
  alt: string;
}

function GalleryComponent(){
  const [loaded, setLoaded] = useState(false);
  const [images, setImages] = useState([]);
  const [thumbnails, setThumbnails] = useState([]);
  const [alts, setAlts] = useState([]);

  const myModal = useRef(null);
  const imgModal = useRef(null);
  const caption = useRef(null);

  function importAll(r: any) {
    return r.keys().map(r);
  }

  const imgStyle = {
    'max-width': '300px',
    'height': 'auto',
    'border-radius': '5px'
  };

  useEffect(() => {
    const images = importAll(require.context('../../asset/images/original', false, /\.(png|jpe?g|svg)$/));
    const thumbnails = importAll(require.context('../../asset/images/thumbnail', false, /\.(png|jpe?g|svg)$/));

    setThumbnails(
      thumbnails.map((x: any)=> x.default).sort()
    );
    setImages(
      images.map((x: any) => x.default).sort()
    );
  }, []);

  const onLoad = ()=> setLoaded(true);

  useEffect(() => {
    const img = new Image();
    img.src = placeHolder;
    img.onload = onLoad;
  }, [])

  const onClick =(src: string, alt: string)=> {
    myModal.current.style.display='block';
    imgModal.current.src = src;
    caption.current.innerHTML = alt ? alt : '';
  }

  const onClose = () => {
    myModal.current.style.display = 'none';
  }

  return (
    <>
      <div className={styled.header}>
        <Link to="/">
          <div className={styled.back}>
            <i className="fa fa-reply-all" aria-hidden="true"></i>
          </div>
        </Link>
        <h1>Gallery</h1>
      </div>
      
      {loaded && 
      <div className={styled.container}>
        <div className={styled.columns}>
          {thumbnails.map((thumb, index) => 
            <LazyImage 
              key={index} 
              src={images[index]}  
              thumbnail={thumb}
              styles={imgStyle} 
              alt='Nguyen trong binh' 
              onClick={onClick}/>
          )}
        </div>
      </div>}
      <div ref={myModal} className={styled.modal}>
        <span className={styled.close}><i className="fa fa-times" aria-hidden="true" onClick={onClose}></i></span>
        <img className={styled.modalContent} ref={imgModal}/>
        <div className={styled.caption} ref={caption}></div>
      </div> 
    </>
  );
}

export default GalleryComponent;
