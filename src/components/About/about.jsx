import React from 'react';
import styled from './about-styles.module.scss';
import ProgressBar from '../ProgressBar/progress-bar';
import variables from '../../Variables.scss';
import ImageLoading from '../ImageLoading/image-loading';

function AboutComponent() {
    return (
        <>
            <div className={styled['container']}>
                <div className={styled['inner-width']}>
                    <div className={styled['content']}>
                        <div className={styled['avatar']}>
                            <ImageLoading src='https://images.pexels.com/photos/192384/pexels-photo-192384.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' className={styled['avatar-img']} />
                        </div>
                        <h1>About</h1>
                        <h2>Hi, I'm a Fullstack Developer</h2>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed fuga eaque, culpa cupiditate animi laborum natus! Similique odio sit facilis dolorum dicta velit provident sequi iusto, est pariatur quisquam corrupti animi necessitatibus aliquid deserunt reprehenderit voluptatibus? Exercitationem deserunt fugit dicta nesciunt velit quae tempora eius praesentium odio est, voluptatem vero incidunt omnis ad iure, soluta maiores nostrum inventore alias culpa. Nihil suscipit possimus est harum accusamus impedit libero deleniti repellat.</p>
                        <div className={styled['skills']}>
                            <ProgressBar name="Javascript"
                                value="0.65"
                                color={variables.primaryColor}
                                className={styled['bar']}>
                            </ProgressBar>
                            <ProgressBar name="C#"
                                value="0.65"
                                color={variables.primaryColor}
                                className={styled['bar']}>
                            </ProgressBar>
                            <ProgressBar name="Angular"
                                value="0.65"
                                color={variables.primaryColor}
                                className={styled['bar']}>
                            </ProgressBar>
                            <ProgressBar name="React"
                                value="0.65"
                                color={variables.primaryColor}
                                className={styled['bar']}>
                            </ProgressBar>
                            <ProgressBar name="Nodejs"
                                value="0.65"
                                color={variables.primaryColor}
                                className={styled['bar']}>
                            </ProgressBar>
                            <ProgressBar name="Docker"
                                value="0.65"
                                color={variables.primaryColor}
                                className={styled['bar']}>
                            </ProgressBar>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutComponent;