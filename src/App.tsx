import React, { lazy } from 'react';
import './App.scss';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import ScrollTop from './components/ScrollTop/scroll-top'
import Container from './components/Container/container';

const HomeComponent = lazy(() => import(/* webpackChunkName: "home"*/'./components/Home/home'));
const AboutComponent = lazy(() => import(/* webpackChunkName: "about" */'./components/About/about'));
const ExperienceComponent = lazy(() => import(/* webpackChunkName: "experience" */'./components/Experience/experience'));
const ContactComponent = lazy(() => import(/* webpackChunkName: "contact" */'./components/Contact/contact'));
const InterestComponent = lazy(() => import(  /* webpackChunkName: "interest" */  './components/Interest/interest'));
const GalleryComponent = lazy(() => import(/* webpackChunkName: "gallery" */'./components/Gallery/gallery'));
const ProjectComponent = lazy(() => import(/* webpackChunkName: "project" */'./components/Projects/project'));
const DDSPrj = lazy(() => import(/* webpackChunkName: "dds" */'./components/Projects/dds/dds'));
const EbiquityPrj = lazy(() => import(/* webpackChunkName: "ebiquity" */'./components/Projects/ebiquity/ebiquity'));
const PortfolioPrj = lazy(() => import(/* webpackChunkName: "portfolio" */'./components/Projects/portfolio/portfolio'));

function App() {
  return (
    <>
      <ScrollTop/>
      <Router>
        <Switch>
          <Route path='/gallery'>
            <Container>
              <GalleryComponent />
            </Container>
          </Route>

          <Route exact path='/project/dds'>
            <Container>
              <DDSPrj/>
            </Container>
          </Route>

          <Route exact path='/project/ebiquity'>
            <Container>
              <EbiquityPrj/>
            </Container>
          </Route>

          <Route exact path='/project/portfolio'>
            <Container>
              <PortfolioPrj/>
            </Container>
          </Route>

          <Route path="/">
            <section id="home">
              <Container>
                  <HomeComponent />
              </Container>
            </section>

            <section id="about">
              <Container {...{ title:'About Me', backgroundColor:'whitesmoke'}}>
                <AboutComponent />
              </Container>
            </section>

            <section id="experiences">
              <Container {...{ title:'Experience', backgroundColor:'white'}}>
                <ExperienceComponent />
              </Container>
            </section>

            <section id="project">
              <Container {...{ title:'Projects', backgroundColor:'white'}}>
                <ProjectComponent />
              </Container>
            </section>

            <section id="interest">
              <Container {...{ title:'Interest', backgroundColor:'white'}}>
                <InterestComponent />
              </Container>
            </section>

            <section id="contact">
              <Container {...{ 
                title:'Contact', 
                backgroundImage:'linear-gradient(to right top, #2c3e50, #334f58, #455f5d, #5e6d63, #787b6f)',
                titleColor: 'white'
              }}
              >
                <ContactComponent />
              </Container>
            </section>
          </Route>
        </Switch>

      </Router>
    </>
  );
}

export default App;
