import React from 'react';
import styled from './experience-styles.module.scss';
import itd_logo from '../../asset/images/itd_logo.png';
import orient_logo from '../../asset/images/orient_logo.png';
import nash_logo from '../../asset/images/nash_logo.png';

function ExperienceComponent() {
    return (
        <>
            <div className={styled.container}>
                <div className={styled.innerWidth}>
                    <div className={styled.content}>
                        <div className={styled.timeline}>
                            <ul>
                                <li>
                                    <div className={styled.description}>
                                        <h3>iTD Group</h3>
                                        <img className={styled.img} src={itd_logo}/>
                                        <p className={styled.title}>Internship</p>
                                        <p>Working on Parking Supervision - A parking fee collection management system</p>
                                        <p>Learn Entity Framework, C#. Maintenance backend system.</p>
                                    </div>
                                    <div className={styled.time}>
                                        <h4>July 2018</h4>
                                    </div>
                                </li>
                                <li>
                                    <div className={styled.description}>
                                        <h3>Orient Software Development Corp</h3>
                                        <img className={styled.img} src={orient_logo} />
                                        <p className={styled.title}>Software Developer</p>
                                        <p>Working on project Retail DDS for Singapore client.
                                            A complete e-commerce system for
                                            Singapore's largest retail chain store (Retail
                                            Website, Administrator web page, POS).</p>
                                        <p>Development Administrator web page.</p>
                                        <p> Working in both Frontend and Backend to delivery features.</p>
                                        <p>Participate in developing POS system (both
                                            Window App and Android App).</p>
                                    </div>
                                    <div className={styled.time}>
                                        <h4>March 2019</h4>
                                    </div>
                                </li>
                                <li>
                                    <div className={styled.description}>
                                        <h3>Harvey Nash</h3>
                                        <img className={styled.img} src={nash_logo} />
                                        <p className={styled.title}>Frontend Developer</p>
                                        <p>Working of project Ebiquity for UK.</p>
                                        <p>Co-op with Backend developer to integrate and delivery features</p>
                                        <p>Development UI for module NameLibrary</p>
                                    </div>
                                    <div className={styled.time}>
                                        <h4>December 2020</h4>
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
