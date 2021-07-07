import React, { useState, useCallback, useEffect, useMemo } from 'react'
import { render } from 'react-dom';
import Container from 'react-bootstrap/Container'
import styled, { css } from 'styled-components'
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
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
  /* ******************* data ********************* */
  const [portList, setPortList] = useState([])
  const [err, setErr] = useState(null)
  
  useEffect(() => {
    new WOW.WOW().init();
  }, []);
  
  useEffect( () => {
    const asyncFn = async () => {
      try{
        const { data } = await axios('/json/port.json')
        setPortList(data)
      }
      catch(err){
        setErr(err)
      }
      finally{
        return () => { console.log('end') }
      }
    }
    asyncFn()
  }, [])
  
  const listChange = value => {
    setPortList( portList.filter( v => v.cate.includes(value) ) )
	}
  
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
      <Port listChange={listChange} list2={portList}/>
      <Contact />
      <Footer />
    </div>
	);
}

export default App;