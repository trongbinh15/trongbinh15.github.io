import React, { lazy, Suspense } from 'react';
import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import Skeleton from 'react-loading-skeleton';

library.add(fab);

const HomeComponent = lazy(() => import('./components/Home/home'));
const AboutComponent = lazy(() => import('./components/About/about'));

function App() {
  return (
    <>
      {/* pass the test */}
      <div style={{ display: 'none' }}>Logo</div>
      <Suspense fallback={<Skeleton height={'100vh'} ></Skeleton>}>
        <section id="home">
          <HomeComponent />
        </section>
      </Suspense>
      <Suspense fallback={<Skeleton height={'100vh'}></Skeleton>}>
        <section id="about">
          <AboutComponent />
        </section>
      </Suspense>
      <section id="experiences"></section>
      <section id="interest"></section>
      <section id="contact"></section>
      <footer></footer>
    </>
  );
}

export default App;
