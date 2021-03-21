import LazyImage from '../LazyImage/lazy-image';
import React, { useEffect, useState } from 'react';
import img1 from '../../asset/images/1.jpg';
import img2 from '../../asset/images/2.jpg';
import img3 from '../../asset/images/3.jpg';
import img4 from '../../asset/images/4.jpg';
import img5 from '../../asset/images/pexels-bongkarn-thanyakij-3740312.jpg';
import img6 from '../../asset/images/pexels-pixabay-373076.jpg';
import placeHolder from '../../asset/images/placeholder.png';
import styled from './galley-styles.module.scss'
import { Link, useHistory } from 'react-router-dom';

function GalleryComponent(){
  const [loaded, setLoaded] = useState(false);
  const imgStyle = {
    'max-width': '300px',
    'height': 'auto',
    'border-radius': '50px'
  };

  const onLoad = ()=> setLoaded(true);

  useEffect(() => {
    const img = new Image();
    img.src = placeHolder;
    img.onload = onLoad;
  }, [])

  return (
    <>
      <div className={styled.back}>
        <Link to="/"><i className="fa fa-reply-all" aria-hidden="true"></i></Link>
      </div>
      {loaded && 
      <div className={styled.container}>
        <LazyImage
          src={img1}
          styles={imgStyle}
        ></LazyImage>
        <LazyImage
          src={img2}
          styles={imgStyle}
        ></LazyImage>
        <LazyImage
          src={img6}
          styles={imgStyle}
        ></LazyImage>
        <LazyImage
          src={img3}
          styles={imgStyle}
        ></LazyImage>
        <LazyImage
          src={img4}
          styles={imgStyle}
        ></LazyImage>
        <LazyImage
          src={img5}
          styles={imgStyle}
        ></LazyImage>
        <LazyImage
          src='https://images.pexels.com/photos/1619317/pexels-photo-1619317.jpeg?cs=srgb&dl=pexels-james-wheeler-1619317.jpg&fm=jpg'
          styles={imgStyle}
        ></LazyImage>
        <LazyImage
          src='https://images.pexels.com/photos/132037/pexels-photo-132037.jpeg?cs=srgb&dl=pexels-pok-rie-132037.jpg&fm=jpg'
          styles={imgStyle}
        ></LazyImage>
        <LazyImage
          src='https://images.pexels.com/photos/1476880/pexels-photo-1476880.jpeg?cs=srgb&dl=pexels-nextvoyage-1476880.jpg&fm=jpg'
          styles={imgStyle}
        ></LazyImage>
        <LazyImage
          src='https://images.pexels.com/photos/2082949/pexels-photo-2082949.jpeg?cs=srgb&dl=pexels-alexandr-podvalny-2082949.jpg&fm=jpg'
          styles={imgStyle}
        ></LazyImage>
        <LazyImage
          src='https://images.pexels.com/photos/1576667/pexels-photo-1576667.jpeg?cs=srgb&dl=pexels-baskin-creative-studios-1576667.jpg&fm=jpg'
          styles={imgStyle}
        ></LazyImage>
        <LazyImage
          src='https://images.pexels.com/photos/814499/pexels-photo-814499.jpeg?cs=srgb&dl=pexels-martin-damboldt-814499.jpg&fm=jpg'
          styles={imgStyle}
        ></LazyImage>
        <LazyImage
          src='https://images.pexels.com/photos/1559821/pexels-photo-1559821.jpeg?cs=srgb&dl=pexels-tobias-bj%C3%B8rkli-1559821.jpg&fm=jpg'
          styles={imgStyle}
        ></LazyImage>
        <LazyImage
          src='https://images.pexels.com/photos/592077/pexels-photo-592077.jpeg?cs=srgb&dl=pexels-katja-592077.jpg&fm=jpg'
          styles={imgStyle}
        ></LazyImage>
        <LazyImage
          src='https://images.pexels.com/photos/36717/amazing-animal-beautiful-beautifull.jpg?cs=srgb&dl=pexels-pixabay-36717.jpg&fm=jpg'
          styles={imgStyle}
        ></LazyImage>
        <LazyImage
          src='https://images.pexels.com/photos/1327373/pexels-photo-1327373.jpeg?cs=srgb&dl=pexels-alex-blokstra-1327373.jpg&fm=jpg'
          styles={imgStyle}
        ></LazyImage>
        <LazyImage
          src='https://images.pexels.com/photos/2433467/pexels-photo-2433467.jpeg?cs=srgb&dl=pexels-casia-charlie-2433467.jpg&fm=jpg'
          styles={imgStyle}
        ></LazyImage>

      </div>}
      
    </>
  );
}

export default GalleryComponent;
