import React, {useState} from 'react';
import styled from './portfolio-style.module.scss';
import { Carousel } from 'react-responsive-carousel';
import img1 from '../../../asset/images/portfolio/01.png'
import img2 from '../../../asset/images/portfolio/02.png'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useHistory } from 'react-router';

function PortfolioPrj(){

  const [technologies,] = useState(['TypeScript' , 'ReactJs' , 'SCSS', 'GitHub Actions',  'GitHub Page', 'Webpack', 'VIM']);

  const [roles, ] = useState(['Design and implement UI', 'Code splitting for lazy loading', 'Deploy and CI/CD']);
  const handleDragStart = (e: any) => e.preventDefault();
  const history = useHistory();

  return (
    <>
      <div className={styled.container}>
        <div className={styled.close}>
          <a onClick={()=> history.goBack()}><i className="fa fa-times" aria-hidden="true"></i></a>
        </div>
        <h1>Portfolio</h1>  
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
                <li><i className="fa fa-users" aria-hidden="true"></i>1</li>
                <li><i className="fa fa-globe" aria-hidden="true"></i><a href='http://trongbinh15.github.io/'>trongbinh15.github.io</a></li>
                <li><i className="fab fa-github"></i><a href='https://github.com/trongbinh15/trongbinh15.github.io'>trongbinh15.github.io</a></li>
                <li>Personal portfolio build with React, TypeScript and Webpack</li>
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


export default PortfolioPrj;
