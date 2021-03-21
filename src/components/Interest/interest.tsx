import React, {useEffect, useRef, useState} from 'react';
import styled from './interest-styles.module.scss';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import img1 from '../../asset/images/1.jpg'
import img2 from '../../asset/images/2.jpg'
import img3 from '../../asset/images/3.jpg'
import img4 from '../../asset/images/4.jpg'
import { withRouter} from 'react-router-dom';


function InterestComponent (props: any){
  const handleDragStart = (e: any) => e.preventDefault();

  useEffect(()=> console.log(props));
  return (
    <>
      <div className={styled.container}>
        <div className={styled.innerWidth}>
          <div className={styled.content}>
            <h1>Interest</h1>
            <div className={styled.slider}>
              <div className={styled.carouselContainer}>
                <div className={styled.carousel}>
                  <Carousel showArrows showThumbs={false} useKeyboardArrows swipeable centerMode>
                    <div>
                      <img src={img1} className={styled.slideImg} onDragStart={handleDragStart} />
                    </div>
                    <div>
                      <img src={img2} className={styled.slideImg} onDragStart={handleDragStart} />
                    </div><div>
                      <img src={img3} className={styled.slideImg} onDragStart={handleDragStart} />
                    </div><div>
                      <img src={img4} className={styled.slideImg} onDragStart={handleDragStart} />
                    </div>
                    <div className={styled.more}>
                      <div className={styled.text} onClick={()=> props.history.push('/gallery')}>
                        <p>View more</p>
                      </div> 
                    </div>
                  </Carousel>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default withRouter(InterestComponent)
