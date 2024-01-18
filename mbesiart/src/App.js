import React from 'react';import { Routes, Route } from "react-router-dom";
import  Home from "./components/home";
import Navigation from './components/navigationbar';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Contacts from './components/contacts';
import Services from './components/services';
import Listings from './components/listings';
import Profile from './components/profile';

function App() {
  return (
    <div className='min-h-screen'>
    <Routes>
    <Route
      path="/"
      element={
        <TransitionGroup>
          <CSSTransition
            key="home"
            timeout={450}
            classNames="fade"
          >
            <Home />
          </CSSTransition>
        </TransitionGroup>
      }
    />
     <Route
      path="/profile"
      element={
        <TransitionGroup>
          <CSSTransition
            key="profile"
            timeout={450}
            classNames="fade"
          >
            <Profile />
          </CSSTransition>
        </TransitionGroup>
      }
    />
    <Route
      path="/services"
      element={
        <TransitionGroup>
          <CSSTransition
            key="services"
            timeout={450}
            classNames="fade"
          >
            <Services />
          </CSSTransition>
        </TransitionGroup>
      }
    />
     <Route
      path="/navigationbar"
      element={
        <TransitionGroup>
          <CSSTransition
            key="navigationbar"
            timeout={450}
            classNames="fade"
          >
            <Navigation />
          </CSSTransition>
        </TransitionGroup>
      }
    />
    <Route
      path="/listings"
      element={
        <TransitionGroup>
          <CSSTransition
            key="listings"
            timeout={450}
            classNames="fade"
          >
            <Listings />
          </CSSTransition>
        </TransitionGroup>
      }
    />
    <Route
      path="/contacts"
      element={
        <TransitionGroup>
          <CSSTransition
            key="contacts"
            timeout={450}
            classNames="fade"
          >
            <Contacts />
          </CSSTransition>
        </TransitionGroup>
      }
    />
  </Routes>
</div>
);
}

export default App;

