import React, { lazy, Suspense, useEffect, useState } from 'react';
import './App.scss';
import Skeleton from 'react-loading-skeleton';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';
import ErrorScreen from './components/ErrorBoundary/ErrorScreen';

const HomeComponent = lazy(() => import('./components/Home/home'));
const AboutComponent = lazy(() => import('./components/About/about'));
const ExperienceComponent = lazy(() => import('./components/Experience/experience'));
const ContactComponent = lazy(() => import('./components/Contact/contact'));

function App() {
  const [isVisible, setIsVisible] = useState(false);

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

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };


  return (
    <>
      {isVisible && (
        <div className="scroll-to-top" onClick={scrollToTop}>
          <i className="fa fa-arrow-up" aria-hidden="true" 
          ></i>
        </div>
      )}

      <Suspense fallback={<Skeleton height={"100vh"}></Skeleton>}>
        <section id="home">
          <ErrorBoundary Fallback={ErrorScreen}>
            <HomeComponent />
          </ErrorBoundary>
        </section>
      </Suspense>
      <Suspense fallback={<Skeleton height={"100vh"}></Skeleton>}>
        <section id="about">
          <ErrorBoundary Fallback={ErrorScreen}>
            <AboutComponent />
          </ErrorBoundary>
        </section>
      </Suspense>
      <Suspense fallback={<Skeleton height={"100vh"}></Skeleton>}>
        <section id="experiences">
          <ErrorBoundary Fallback={ErrorScreen}>
            <ExperienceComponent />
          </ErrorBoundary>
        </section>
      </Suspense>

      <section id="interest"></section>

      <Suspense fallback={<Skeleton height={"100vh"}></Skeleton>}>
        <section id="contact">
          <ErrorBoundary Fallback={ErrorScreen}>
            <ContactComponent />
          </ErrorBoundary>
        </section>
      </Suspense>
      <footer></footer>
    </>
  );
}

export default App;
