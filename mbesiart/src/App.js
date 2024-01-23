import React, { useRef } from 'react';
import { Routes, Route } from "react-router-dom";
import  Home from "./components/home";
import Navigation from './components/navigationbar';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Contacts from './components/contacts';
import Services from './components/services';
import Listings from './components/listings';
import Profile from './components/profile';

function App() {
  const nodeRef = useRef(null);

  return (
    <div className="min-h-screen">
    <Routes>
      <Route
        path="/"
        element={
          <TransitionGroup>
            <CSSTransition
              key="home"
              timeout={450}
              classNames="fade"
              nodeRef={nodeRef}
            >
              <Home ref={nodeRef} />
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
            nodeRef={nodeRef}
          >
            <Profile ref={nodeRef} />
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
            nodeRef={nodeRef}
          >
            <Services ref={nodeRef} />
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
            nodeRef={nodeRef}
          >
            <Navigation ref={nodeRef}/>
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
            nodeRef={nodeRef}
          >
            <Listings ref={nodeRef} />
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
            nodeRef={nodeRef}
          >
            <Contacts ref={nodeRef} />
          </CSSTransition>
        </TransitionGroup>
      }
    />
  </Routes>
</div>
);
}

export default App;

