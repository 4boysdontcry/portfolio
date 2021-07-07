import React, { useCallback, useEffect, useState } from 'react';
import styled, { css } from 'styled-components'
import 'bootstrap/dist/css/bootstrap.css';
import axios from "axios";
import WOW from 'wowjs'

import PortList from './PortList'


/* ****************** styled ****************** */
import '../css/port.css'


/* ****************** component ****************** */
const Port = ({ list2 }) => {
	
	const [portList, setPortList] = useState([])
	const [filterList, setFilterList] = useState([])
	const [err, setErr] = useState(null)
	
	useEffect(() => {
		new WOW.WOW().init();
	})
	
	useEffect( () => {
		const asyncFn = async () => {
			try {
				const { data } = await axios('/json/port.json')
				setPortList(data)
				setFilterList(data)
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
	
	const onListChange = useCallback(e => {
		let search = e.target.dataset['filter']
		if(search === '') setFilterList(portList)
		else setFilterList( portList.filter( v => v.cate === search ) )
	}, [])

	return (
		<div id="portfolio" className="port-wrapper">
			<h3 className="cate">PORTFOLIO</h3>
      <ul className="menu-wrapper w-100">
        <li className="menu" onClick={onListChange} data-filter="">ALL</li>
        <li className="menu" onClick={onListChange} data-filter="publishing">PUBLISHING</li>
        <li className="menu" onClick={onListChange} data-filter="frontend">FRONT-END</li>
        <li className="menu" onClick={onListChange} data-filter="backend">BACK-END</li>
      </ul>
			<div className="port-wrap">
      {
      	filterList.map(v => {
      		return <PortList list2={ v } key={ v.id } />
	      })
      }
			</div>
		</div>
	);
}

export default Port;
