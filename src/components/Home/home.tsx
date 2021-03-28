import React, { lazy } from 'react';
import styled from './home-styles.module.scss';

const NavBar = lazy(() => import('../NavBar/nav-bar'));

function HomeComponent() {
    return (
        <>
            <div className={styled.container}>
                <NavBar />
                <div className={styled.innerWidth}>
                    <div className={styled.content}>
                        <div className={styled.header}> </div>
                        <div className={styled.sm}>
                            <a href="https://www.facebook.com/trongbinhnguyen15/">
                                <i className="fab fa-facebook"></i>
                            </a>
                            <a href="https://www.linkedin.com/in/trongbinhnguyen15">
                                <i className="fab fa-linkedin"></i>
                            </a>
                            <a href="https://www.github.com/trongbinh15/">
                                <i className="fab fa-github"></i>
                            </a>
                            <a href="https://www.instagram.com/trongbinh15/">
                                <i className="fab fa-instagram"></i>
                            </a>
                        </div>
                        <div className={styled.buttons}>
                            <button>
                                <a href="#contact">
                                    Contact Me
                                </a>
                            </button>
                            <button>
                                <a href='https://drive.google.com/file/d/1s2erh_37yRNnPyCCPuWLlyMucvuSaTBh/view?usp=sharing'>Download CV</a>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomeComponent
