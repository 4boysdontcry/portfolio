import React from 'react';
import styled, { css } from 'styled-components'
import 'bootstrap/dist/css/bootstrap.min.css';
import * as Icon from 'react-bootstrap-icons/dist';


import { Navbar, Nav, Container } from 'react-bootstrap'

/* ****************** styled ****************** */
import '../css/sidebar.css'


/* ****************** component ****************** */

const Sidebar = () => {
  return (
    <div className="side-wrapper">
      <div className="bar">

        <div className="box"><a href="#main" className="title">MAIN</a></div>

        <div className="box"><a href="#skills" className="title">SKILLS</a></div>

        <div className="box"><a href="#portfolio" className="title">PORTFOLIO</a></div>

        <div className="box"><a href="#contact" className="title">CONTACT</a></div>
      </div>
    </div>
  );
}

export default Sidebar;
