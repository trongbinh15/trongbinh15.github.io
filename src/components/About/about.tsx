import React from 'react';
import styled from './about-styles.module.scss';
import ProgressBar from '../ProgressBar/progress-bar';

function AboutComponent({title, backgroundColor}: any) {
    return (
        <>
            <div className={styled.container} style={{ backgroundColor: backgroundColor }}>
                <div className={styled.innerWidth}>
                    <div className={styled.content}>
                        <div className={styled.avatar}>
                        </div>
                        <h2>Hi, I'm a Fullstack Developer</h2>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed fuga eaque, culpa cupiditate animi laborum natus! Similique odio sit facilis dolorum dicta velit provident sequi iusto, est pariatur quisquam corrupti animi necessitatibus aliquid deserunt reprehenderit voluptatibus? Exercitationem deserunt fugit dicta nesciunt velit quae tempora eius praesentium odio est, voluptatem vero incidunt omnis ad iure, soluta maiores nostrum inventore alias culpa. Nihil suscipit possimus est harum accusamus impedit libero deleniti repellat.</p>
                        <div className={styled.skills}>
                            <ProgressBar {...{ name: "Javascript", value: "0.65", color: styled.primaryColor, className: styled.bar }} >
                            </ProgressBar>
                            <ProgressBar {...{ name: "C#", value: "0.65", color: styled.primaryColor, className: styled.bar }}>
                            </ProgressBar>
                            <ProgressBar {...{ name: "React", value: "0.69", color: styled.primaryColor, className: styled.bar }}>
                            </ProgressBar>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutComponent;
