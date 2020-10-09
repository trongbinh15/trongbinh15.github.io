import React, { lazy } from 'react';
import styled from './home-styles.module.scss';
import background from '../../asset/images/pexels-pixabay-373076.jpg';
import ImageLoading from '../ImageLoading/image-loading';

const NavBar = lazy(() => import('../NavBar/nav-bar'));

function HomeComponent() {
    return (
        <>
            <div className={styled['container']}>
                <NavBar />
                <ImageLoading src={background} className={styled['background']} />
                <div className={styled['inner-width']}>
                    <div className={styled['content']}>
                        <h1> </h1>
                        <div className={styled['sm']}>
                            <a href="https://www.facebook.com/trongbinhnguyen15/">
                                <i class="fab fa-facebook"></i>
                            </a>
                            <a href="https://www.linkedin.com/in/trongbinhnguyen15">
                                <i class="fab fa-linkedin"></i>
                            </a>
                            <a href="https://www.github.com/trongbinh15/">
                                <i class="fab fa-github"></i>
                            </a>
                            <a href="https://www.instagram.com/trongbinh15/">
                                <i class="fab fa-instagram"></i>
                            </a>
                        </div>
                        <div className={styled['buttons']}>
                            <button>Contact Me</button>
                            <button>Download CV</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomeComponent
