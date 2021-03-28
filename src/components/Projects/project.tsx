import Card from '../Card/card';
import React from 'react';
import styled from './project-style.module.scss'
import dds_thumb from '../../asset/images/dds_thumbnail.png';
import ebiquity_thumb from '../../asset/images/Ebiquity_Logo.png';
import portfolio_thumb from '../../asset/images/portfolio_thumb.png';
import {useHistory} from 'react-router';
function ProjectComponent(){

  const history = useHistory();

  const onClick = (path: string) => {
    history.push(`/project/${path}`);
  }

  return (
    <>
      <div className={styled.container}>
        <div className={styled.cards}>
          <div className={styled.card}>
            <Card
              {...{
                title: "Retail DDS",
                src: dds_thumb,
                text: "Project of Singapore",
                onClick: () => onClick("dds"),
              }}
            />
          </div>

          <div className={styled.card}>
            <Card
              {...{
                title: "Ebiquity",
                src: ebiquity_thumb,
                text: "Project of UK",
                onClick: () => onClick("ebiquity"),
              }}
            />
          </div>
          <div className={styled.card}>
            <Card
              {...{
                title: "Porfolio",
                src: portfolio_thumb,
                text: "Personal Project",
                onClick: () => onClick("portfolio"),
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default ProjectComponent;
