import React, { useState, useCallback, useEffect, useMemo } from 'react'
import Container from 'react-bootstrap/Container'
import styled, { css } from 'styled-components'
import 'bootstrap/dist/css/bootstrap.min.css';

import './scss/App.scss'
import './css/app.css'

import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Main from './components/Main'
import Skills from './components/Skills'
import Port from './components/Port'
import Contact from './components/Contact'
import Footer from './components/Footer'



const App = () => {
  // 애니메이션 자바스크립트 여기서
	
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
	)
}

export default App;
