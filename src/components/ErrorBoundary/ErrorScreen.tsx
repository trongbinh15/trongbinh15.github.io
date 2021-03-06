import React from "react";
import image from '../../asset/images/maintenance.png'
import styled from './error-screen.module.scss'

export default function ErrorScreen(error: any) {
  return (
    <div className={styled.container}>
      <h2>Something went wrong!</h2>
      <img src={image}/>
    </div>
  );
}
