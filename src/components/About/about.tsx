import React, {useState} from 'react';
import styled from './about-styles.module.scss';
import ProgressBar from '../ProgressBar/progress-bar';
import avatar from '../../asset/images/avatar.jpg';

function AboutComponent({ backgroundColor}: any) {
  const [techs,] = useState(['Javascript', 'Angular', 'React', 'CI/CD', 'Sass', 'Bootstrap', 'C#', 'VIM']);
  return (
      <>
        <div
          className={styled.container}
          style={{ backgroundColor: backgroundColor }}
        >
          <div className={styled.innerWidth}>
            <div className={styled.content}>
              <div className={styled.avatar}>
                <img src={avatar} loading="lazy" />
              </div>
              <h2>Hi, I'm a Fullstack Developer</h2>

              <div className={styled.slash}>
                <p>
                  I'm a developer with about 02 years of experience in Web
                  Development, currently working as a Frontend Developer. With a
                  passion for technologies, I seeking new challenges as a
                  Fullstack Javascript Developer. By gain experience and improve
                  knowledge day by day, I want to build amazing things and help
                  a lot of people.
                </p>
                <ul>
                  <li>
                    A fast learner who adapts quickly to change and eager to
                    learn new technologies.
                  </li>
                  <li>A team player with responsibility and communication skills.</li>
                </ul>
              </div>

              <div className={styled.skills}>
                <div className={styled.sub}>Technical and skills</div>
                <div className={styled.skillsDetail}>
                  <div className={styled.highlight}>
                    <ProgressBar
                      {...{
                        name: "Javascript",
                        value: "0.90",
                        color: styled.primaryColor,
                        className: styled.bar,
                      }}
                    ></ProgressBar>
                    <ProgressBar
                      {...{
                        name: "TypeScript",
                        value: "0.85",
                        color: styled.primaryColor,
                        className: styled.bar,
                      }}
                    ></ProgressBar>
                    <ProgressBar
                      {...{
                        name: "Angular",
                        value: "0.9",
                        color: styled.primaryColor,
                        className: styled.bar,
                      }}
                    ></ProgressBar>
                    <ProgressBar
                      {...{
                        name: "React",
                        value: "0.6",
                        color: styled.primaryColor,
                        className: styled.bar,
                      }}
                    ></ProgressBar>
                    <ProgressBar
                      {...{
                        name: "Teamwork",
                        value: "0.95",
                        color: styled.primaryColor,
                        className: styled.bar,
                      }}
                    ></ProgressBar>

                    <ProgressBar
                      {...{
                        name: "English",
                        value: "0.5",
                        color: styled.primaryColor,
                        className: styled.bar,
                      }}
                    ></ProgressBar>
                  </div>
                  <div className={styled.tech}>
                    <ul className={styled.tags}>
                      {techs.map((x) => (
                        <li className={styled.tag}>{x}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
}

export default AboutComponent;
