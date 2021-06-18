import React, { useState, useCallback, useEffect, useMemo } from 'react'
import Container from 'react-bootstrap/Container'
import styled, { css } from 'styled-components'

import './scss/App.scss'
import 'bootstrap/dist/css/bootstrap.min.css';
import Wrapper from './components/Wrapper'
import Header from './components/Header'




const App = () => {
	
	return (
    <div>
      <Header />
      <Wrapper />
    </div>
	)
}

export default App;
