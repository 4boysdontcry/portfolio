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
  // 자바스크립트 여기서
  const [portList, setPortList] = useState([])
  const [err, setErr] = useState(null)
  const [menuClick, setMenuClick] = useState([])
  const [err2, setErr2] = useState(null)
  
  useEffect(() => {
    setMenuClick(onClickAct)
  },[])

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
  
  const onClickAct = () => {

  }

	return (
    <div className="app-wrapper">
      <Header />
      <Sidebar onClick={onClickAct} />
      <Main />
      <Skills />
      <Port listChange={listChange} list2={portList}/>
      <Contact />
      <Footer />
    </div>
	)
}

export default App;
