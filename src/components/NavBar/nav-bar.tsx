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
                <div className={styled.navLink}>
                    <ul>
                        <li>
                            <a href="#home" onClick={e => toggleNavbar(e)}>Home</a>
                        </li>
                        <li>
                            <a href="#about" onClick={e => toggleNavbar(e)}>About</a>
                        </li>
                        <li>
                            <a href="#experiences" onClick={e => toggleNavbar(e)}>Experiences</a>
                        </li>
                        <li>
                            <a href="#interest" onClick={e => toggleNavbar(e)}>Interest</a>
                        </li>
                        <li>
                            <a href="#gallery" onClick={e => toggleNavbar(e)}>Gallery</a>
                        </li>
                        <li>
                            <a href="#contact" onClick={e => toggleNavbar(e)}>Contact</a>
                        </li>
                    </ul>
                </div>
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
