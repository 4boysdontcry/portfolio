import React from 'react';
import styled, { css } from 'styled-components'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap-icons'

/* ****************** styled ****************** */
import '../css/navi.css'

/* ****************** component ****************** */

const Navi = ({ onShowNavi }) => {
  return (
    <div className="navi-wrapper">
      <i className="fa fa-bars menu-bar" onClick={ onShowNavi }>
        <ul className="navi-wrap">
          <li className="navi"><a href="#main">MAIN</a> </li>
          <li className="navi"><a href="#skills">SKILL</a> </li>
          <li className="navi"><a href="#portfolio">PORTFOLIO</a> </li>
          <li className="navi"><a href="#contact">CONTACT</a> </li>
        </ul>
      </i>
    </div>
  );
}

export default Navi;
