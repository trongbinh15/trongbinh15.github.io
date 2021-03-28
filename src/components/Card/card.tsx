import React, {useEffect} from 'react';
import {useHistory} from 'react-router';
import styled from './card-style.module.scss'


type IProps = {
  src: any;
  title: string;
  text: string;
  onClick?: any;
}

function Card({src, title, text, onClick}: IProps){
  return (
    <>
      <div className={styled.container} onClick={onClick}>
        <div className={styled.image} style={{ backgroundImage: `url(${src})` }}>
        </div>
        <div className={styled.content}>
          <div className={styled.title}>{title}</div>
          <p className={styled.text}>{text}</p>
        </div>
      </div>
    </>
  );
}

export default Card;
