import React, {useState} from 'react';
import styled from './ebiquity-style.module.scss';
import { Carousel } from 'react-responsive-carousel';
import img1 from '../../../asset/images/Ebiquity_Logo.png'
import img2 from '../../../asset/images/ebiquity/01.png'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useHistory } from 'react-router';

function EbiquityPrj(){

  const [technologies,] = useState(['C#' , '.NET Core' , 'Angular 8', 'TypeScript', 'rxjs', 'NgRx', 'Bootstrap']);

  const [roles, ] = useState(['Implement and maintain UI', 'Co-op with BE to integrate and delivery features', 'Developing UI for NameLibrary Module']);
  const handleDragStart = (e: any) => e.preventDefault();
  const history = useHistory();

  return (
    <>
      <div className={styled.container}>
        <div className={styled.close}>
          <a onClick={()=> history.goBack()}><i className="fa fa-times" aria-hidden="true"></i></a>
        </div>
        <h1>Ebiquity</h1>  
        <div className={styled.content}>
          <div className={styled.carousel}>
            <Carousel showArrows showThumbs={false} useKeyboardArrows swipeable autoPlay infiniteLoop>
              <div>
                <img src={img1} className={styled.img} onDragStart={handleDragStart} />
              </div>
              <div>
                <img src={img2} className={styled.img} onDragStart={handleDragStart} />
              </div>
            </Carousel>
          </div>
          <div className={styled.info}>
            <div className={styled.sub}>
              <div className={styled.title}>Description</div>
              <ul className={styled.desc}>
                <li><i className="fa fa-users" aria-hidden="true"></i>30</li>
                <li><i className="fa fa-globe" aria-hidden="true"></i><a href='https://www.ebiquity.com/'>ebiquity.com</a></li>
                <li>A data-driven solutions company helping brand owners drive efficiency and effectiveness from their media spend, eliminating wastage and creating value</li>
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


export default EbiquityPrj;
