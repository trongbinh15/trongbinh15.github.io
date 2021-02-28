import React from 'react';
import styled from './experience-styles.module.scss';

function ExperienceComponent() {
    return (
        <>
            <div className={styled.container}>
                <div className={styled.innerWidth}>
                    <div className={styled.content}>
                        <h1>Experiences</h1>
                        <div className={styled.timeline}>
                            <ul>
                                <li>
                                    <div className={styled.description}>
                                        <h3>Black Panther</h3>
                                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed fuga eaque, culpa cupiditate animi laborum natus! Similique odio sit facilis dolorum dicta velit provident sequi iusto, est pariatur quisquam corrupti animi necessitatibus aliquid deserunt reprehenderit voluptatibus? Exercitationem deserunt fugit dicta nesciunt velit quae tempora eius praesentium odio est, voluptatem vero incidunt omnis ad iure, soluta maiores nostrum inventore alias culpa. Nihil suscipit possimus est harum accusamus impedit libero deleniti repellat.</p>
                                    </div>
                                    <div className={styled.time}>
                                        <h4>January 2019</h4>
                                    </div>
                                </li>
                                <li>
                                    <div className={styled.description}>
                                        <h3>Black Panther</h3>
                                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed fuga eaque, culpa cupiditate animi laborum natus! Similique odio sit facilis dolorum dicta velit provident sequi iusto, est pariatur quisquam corrupti animi necessitatibus aliquid deserunt reprehenderit voluptatibus? Exercitationem deserunt fugit dicta nesciunt velit quae tempora eius praesentium odio est, voluptatem vero incidunt omnis ad iure, soluta maiores nostrum inventore alias culpa. Nihil suscipit possimus est harum accusamus impedit libero deleniti repellat.</p>
                                    </div>
                                    <div className={styled.time}>
                                        <h4>January 2019</h4>
                                    </div>
                                </li>
                                <li>
                                    <div className={styled.description}>
                                        <h3>Black Panther</h3>
                                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed fuga eaque, culpa cupiditate animi laborum natus! Similique odio sit facilis dolorum dicta velit provident sequi iusto, est pariatur quisquam corrupti animi necessitatibus aliquid deserunt reprehenderit voluptatibus? Exercitationem deserunt fugit dicta nesciunt velit quae tempora eius praesentium odio est, voluptatem vero incidunt omnis ad iure, soluta maiores nostrum inventore alias culpa. Nihil suscipit possimus est harum accusamus impedit libero deleniti repellat.</p>
                                    </div>
                                    <div className={styled.time}>
                                        <h4>January 2019</h4>
                                    </div>
                                </li>
                                <li>
                                    <div className={styled.description}>
                                        <h3>Black Panther</h3>
                                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed fuga eaque, culpa cupiditate animi laborum natus! Similique odio sit facilis dolorum dicta velit provident sequi iusto, est pariatur quisquam corrupti animi necessitatibus aliquid deserunt reprehenderit voluptatibus? Exercitationem deserunt fugit dicta nesciunt velit quae tempora eius praesentium odio est, voluptatem vero incidunt omnis ad iure, soluta maiores nostrum inventore alias culpa. Nihil suscipit possimus est harum accusamus impedit libero deleniti repellat.</p>
                                    </div>
                                    <div className={styled.time}>
                                        <h4>January 2019</h4>
                                    </div>
                                </li>
                                <div style={{ clear: "both" }} ></div>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ExperienceComponent
