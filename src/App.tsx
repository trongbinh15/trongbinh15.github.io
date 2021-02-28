import React, { lazy, Suspense } from 'react';
import './App.css';
import Skeleton from 'react-loading-skeleton';

const HomeComponent = lazy(() => import('./components/Home/home'));
const AboutComponent = lazy(() => import('./components/About/about'));
const ExperienceComponent = lazy(() => import('./components/Experience/experience'));

function App() {
  return (
    <>
      <Suspense fallback={<Skeleton height={'100vh'}></Skeleton>}>
        <section id="home">
          <HomeComponent />
        </section>
      </Suspense>
      <Suspense fallback={<Skeleton height={'100vh'}></Skeleton>}>
        <section id="about">
          <AboutComponent />
        </section>
      </Suspense>
      <Suspense fallback={<Skeleton height={'100vh'}></Skeleton>}>
        <section id="experiences">
          <ExperienceComponent />
        </section>
      </Suspense>
      <section id="interest"></section>
      <section id="contact"></section>
      <footer></footer>
    </>
  );
}

export default App;
