import React, { useState } from 'react';
import styled from './nav-bar-styles.module.scss';

const NavBar = (e: any) => {
    const [burgerClass, setBurgerClass] = useState(styled.burger);

    const toggleNavbar = (e: any) => {

        if (burgerClass === styled.burger) {
            setBurgerClass(`${styled.burger} ${styled.toggle}`)
        } else {
            setBurgerClass(styled.burger);
        }

        const nav = document.querySelector(`.${styled.navLink}`)

        if(nav){
            nav.classList.toggle(`${styled.navActive}`);
        }
    }

    return (
        <>
            <div className={styled.nav}>
                <div className={styled.logo}>
                    <h4>Logo</h4>
                </div>
                <ul className={styled.navLink}>
                    <li>
                        <a href="#home">Home</a>
                    </li>
                    <li>
                        <a href="#about">About</a>
                    </li>
                    <li>
                        <a href="#experiences">Experiences</a>
                    </li>
                    <li>
                        <a href="#interest">Interest</a>
                    </li>
                    <li>
                        <a href="#contact">Contact</a>
                    </li>
                </ul>
                <div className={burgerClass} onClick={e => toggleNavbar(e)}  >
                    <div className={styled.line1}></div>
                    <div className={styled.line2}></div>
                    <div className={styled.line3}></div>
                </div>
            </div>
        </>
    );
}

export default NavBar;
