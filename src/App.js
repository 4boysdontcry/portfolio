import React, { useState, useCallback, useEffect, useMemo } from 'react'
import { render } from 'react-dom';
import styled, { css } from 'styled-components'
import 'bootstrap/dist/css/bootstrap.min.css';
import WOW from 'wowjs'
import * as Scroll from 'react-scroll';
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

import './css/app.css'

import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Main from './components/Main'
import Skills from './components/Skills'
import Port from './components/Port'
import Contact from './components/Contact'
import Footer from './components/Footer'


const App = () => {

  useEffect(() => {
    new WOW.WOW().init();
  }, []);

  
  /* ******************* scroll ********************* */
  var Link      = Scroll.Link;
  var Element   = Scroll.Element;
  var Events    = Scroll.Events;
  var scroll    = Scroll.animateScroll;
  var scrollSpy = Scroll.scrollSpy;


  /* ******************* components ********************* */
	return (
    <div className="app-wrapper">
      <Header />
      <Sidebar />
      <Main />
      <Skills />
      <Port />
      <Contact />
      <Footer />
    </div>
	);
  }


export default App;
