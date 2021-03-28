import React, {useState} from 'react';
import styled from './dds-style.module.scss';
import { Carousel } from 'react-responsive-carousel';
import img1 from '../../../asset/images/dds/01.png'
import img2 from '../../../asset/images/dds/02.png'
import img3 from '../../../asset/images/dds/03.png'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useHistory } from 'react-router';

function DDSPrj(){

  const [technologies,] = useState(['C#' ,'Microservice', '.NET Core' , 'Angular 7', 'Docker', 'TypeScript','NativeScript' , 'rxjs', 'NgRx']);

  const [roles, ] = useState(['Working in both frontend and backend', 'Development Android POS application ', 'Responsible for Promotion module']);
  const handleDragStart = (e: any) => e.preventDefault();
  const history = useHistory();

  return (
    <>
      <div className={styled.container}>
        <div className={styled.close}>
          <a onClick={()=> history.goBack()}><i className="fa fa-times" aria-hidden="true"></i></a>
        </div>
        <h1>Retail DDS</h1>  
        <div className={styled.content}>
          <div className={styled.carousel}>
            <Carousel showArrows showThumbs={false} useKeyboardArrows swipeable autoPlay infiniteLoop>
              <div>
                <img src={img1} className={styled.img} onDragStart={handleDragStart} />
              </div>
              <div>
                <img src={img2} className={styled.img} onDragStart={handleDragStart} />
              </div>
              <div>
                <img src={img3} className={styled.img} onDragStart={handleDragStart} />
              </div>
            </Carousel>
          </div>
          <div className={styled.info}>
            <div className={styled.sub}>
              <div className={styled.title}>Description</div>
              <ul className={styled.desc}>
                <li><i className="fa fa-users" aria-hidden="true"></i>6</li>
                <li><i className="fa fa-globe" aria-hidden="true"></i><a href='https://toyorgame.com.sg/'>toyorgame.com.sg</a></li>
                <li>A complete e-commerce system for Singapore's largest retail chain store (Retail Website, Administrator web page, POS).</li>
              </ul>
            </div>
            <div className={styled.sub}>
              <div className={styled.title}>Technology</div>
              <ul className={styled.tags}>
                {technologies.map(x=> <li className={styled.tag}>{x}</li>)}
              </ul>
            </div>
            <div className={styled.sub}>
              <div className={styled.title}>Main role</div>
              <ul className={styled.roles}>
                {roles.map(x=> <li className={styled.role}>{x}</li>)}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}


export default DDSPrj;
