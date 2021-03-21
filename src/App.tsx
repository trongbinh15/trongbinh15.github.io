import React, { lazy, Suspense, useEffect, useState } from 'react';
import './App.scss';
import Skeleton from 'react-loading-skeleton';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';
import ErrorScreen from './components/ErrorBoundary/ErrorScreen';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import ScrollTop from './components/ScrollTop/scroll-top'
import GalleryComponent from './components/Gallery/gallery';

const HomeComponent = lazy(() => import('./components/Home/home'));
const AboutComponent = lazy(() => import('./components/About/about'));
const ExperienceComponent = lazy(() => import('./components/Experience/experience'));
const ContactComponent = lazy(() => import('./components/Contact/contact'));
const InterestComponent = lazy(() => import('./components/Interest/interest'));

function App() {
  return (
    <>
      <ScrollTop/>
      <Router>
        <Switch>
          <Route path='/gallery'>
            <GalleryComponent/>
          </Route>
          <Route path="/">
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

            <Suspense fallback={<Skeleton height={'100vh'}></Skeleton>}>
              <section id="interest">
                <ErrorBoundary Fallback={ErrorScreen}>
                  <InterestComponent />
                </ErrorBoundary>
              </section>
            </Suspense>

            <Suspense fallback={<Skeleton height={"100vh"}></Skeleton>}>
              <section id="contact">
                <ErrorBoundary Fallback={ErrorScreen}>
                  <ContactComponent />
                </ErrorBoundary>
              </section>
            </Suspense>
          </Route>
        </Switch>

      </Router>
    </>
  );
}

export default App;
