import React,{ useEffect } from 'react';
import styled, { css } from 'styled-components'
import 'bootstrap/dist/css/bootstrap.css';
import WOW from 'wowjs'

import { Badge } from 'react-bootstrap'
import PortList from './PortList'


/* ****************** styled ****************** */
import '../css/port.css'


/* ****************** component ****************** */
const Port = ({ list2 }) => {

  useEffect(() => {
    new WOW.WOW().init();
  }, []);

	return (
		<div id="portfolio" className="port-wrapper">
			<h3 className="title">PORTFOLIO</h3>
      <ul className="menu-wrapper w-100">
        <li className="menu all">ALL</li>
        <li className="menu pub">PUBLISHING</li>
        <li className="menu front">FRONT-END</li>
        <li className="menu back">BACK-END</li>
      </ul>
			<div className="port-wrap">
      {
        list2.map(v => <PortList list2={v} key={ v.id } /> )
      }
			</div>
		</div>
	);
}

export default Port;
