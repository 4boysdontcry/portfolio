import React, { useState, useCallback, useEffect, useMemo } from 'react'
import Container from 'react-bootstrap/Container'

import './scss/App.scss'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header'
import Main from './components/Main'

const App = () => {
	
	return (
		<div>
			<Header />
			<Main />
		</div>
	)
}

export default App;
