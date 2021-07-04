import React, { useState, useCallback, useEffect, useMemo } from 'react'
import Container from 'react-bootstrap/Container'
import styled, { css } from 'styled-components'
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import WOW from 'wowjs'

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
  const [descChg, setDescChg] = useState([])
  const [err, setErr] = useState(null)
  
  
  useEffect(() => {
    new WOW.WOW().init();
  }, []);

  useEffect( () => {
    const asyncFn = async () => {
      try{
        const { data } = await axios('/json/skill.json')
        setDescChg(data)
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

	const handleChange = query => {
		setDescChg( descChg.click( v => v.title.includes(query) ) )
	}

	return (
    <div className="app-wrapper">
      <Header />
      <Sidebar />
      <Main />
      <Skills handleChange={handleChange} lists={descChg} />
      <Port />
      <Contact />
      <Footer />
    </div>
	)
}

export default App;
