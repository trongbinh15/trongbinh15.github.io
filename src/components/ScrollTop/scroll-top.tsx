import React, { useEffect, useState } from 'react';
import styled from './scroll-top-styles.module.scss'

function ScrollTop(){
  const [isVisible, setIsVisible] = useState(false);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 900) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <>
    {isVisible && (
      <div className={styled.scrollToTop} onClick={scrollToTop}>
        <i className="fa fa-arrow-up" aria-hidden="true" 
        ></i>
        </div>
    )}
    </>
  )
}

export default ScrollTop;
