import React, {useEffect, useRef, useState} from 'react';
import styled from './interest-styles.module.scss';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import img1 from '../../asset/images/thumbnail/1.jpg'
import img2 from '../../asset/images/thumbnail/2.jpg'
import img3 from '../../asset/images/thumbnail/3.jpg'
import img4 from '../../asset/images/thumbnail/4.jpg'
import { withRouter} from 'react-router-dom';


function InterestComponent (props: any){
  const handleDragStart = (e: any) => e.preventDefault();
  return (
    <>
      <div className={styled.container}>
        <div className={styled.innerWidth}>
          <div className={styled.content}>
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
                        <p>View more ...</p>
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
