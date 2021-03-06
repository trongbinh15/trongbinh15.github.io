import React, { lazy, Suspense } from 'react';
import './App.css';
import Skeleton from 'react-loading-skeleton';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';
import ErrorScreen from './components/ErrorBoundary/ErrorScreen';

const HomeComponent = lazy(() => import('./components/Home/home'));
const AboutComponent = lazy(() => import('./components/About/about'));
const ExperienceComponent = lazy(() => import('./components/Experience/experience'));
const ContactComponent = lazy(() => import('./components/Contact/contact'));

function App() {
  return (
    <>
      <Suspense fallback={<Skeleton height={'100vh'}></Skeleton>}>
        <section id="home">
          <ErrorBoundary Fallback={ErrorScreen}>
            <HomeComponent />
          </ErrorBoundary>
        </section>
      </Suspense>
      <Suspense fallback={<Skeleton height={'100vh'}></Skeleton>}>
        <section id="about">
          <ErrorBoundary Fallback={ErrorScreen}>
            <AboutComponent />
          </ErrorBoundary>
        </section>
      </Suspense>
      <Suspense fallback={<Skeleton height={'100vh'}></Skeleton>}>
        <section id="experiences">
          <ErrorBoundary Fallback={ErrorScreen}>
            <ExperienceComponent />
          </ErrorBoundary>
        </section>
      </Suspense>

      <section id="interest"></section>

      <Suspense fallback={<Skeleton height={'100vh'}></Skeleton>}>
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
