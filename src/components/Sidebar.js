import React from 'react';
import styled, { css } from 'styled-components'
import 'bootstrap/dist/css/bootstrap.min.css';
import * as Icon from 'react-bootstrap-icons/dist';

import { Navbar, Nav, Container } from 'react-bootstrap'

/* ****************** styled ****************** */
const Side = styled.div`
  position: fixed;
  z-index: 99;
  width: 280px;
  height: 100%;
`

const Logo = styled.div`
  padding: 1em;
  color: #f0f0f0;
  border-bottom: 1px solid #f0f0f0;
`


/* ****************** component ****************** */

const Sidebar = () => {
  return (
    <Side className="fixed">
      <Navbar variant="dark" className="w-100 h-100 flex flex-xl-column">
          <Logo className="m-3 font-weight-bold">Henry's Portfolio</Logo>
        <Nav className="flex flex-xl-column bg-primary w-100 p-3 font-weight-bold rounded">
          <Nav.Link href="#about"> <Icon.Person /> About Me</Nav.Link>
          <Nav.Link href="#skill"><Icon.BarChartLine /> Skills</Nav.Link>
          <Nav.Link href="#port"><Icon.CodeSlash /> Portfolio</Nav.Link>
          <Nav.Link href="#contact"><Icon.Telephone /> Contact</Nav.Link>
        </Nav>
      </Navbar>
    </Side>
  );
}

export default Sidebar;
