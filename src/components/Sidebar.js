import React from 'react';
import styled, { css } from 'styled-components'
import 'bootstrap/dist/css/bootstrap.min.css';
import * as Icon from 'react-bootstrap-icons/dist';

import { Navbar, Nav, Container } from 'react-bootstrap'

/* ****************** styled ****************** */
const MenuBar = styled.div`
  position: fixed;
  z-index: 99;
  width: 20%;
  height: 100%;
  @media screen and (max-width: 1200px) {
    display: none;
  }
`

const Logo = styled.div`
  padding: 1em;
  color: #f0f0f0;
  border-bottom: 1px solid #f0f0f0;
`

const Dummy = styled.div`
  width: 100%;
  height: 100%
`

/* ****************** component ****************** */

const Sidebar = () => {
  return (
    <div>
      <MenuBar>
        <Navbar variant="dark" className="w-100 h-100 flex flex-xl-column">
            <Logo className="m-3 font-weight-bold">Henry's Portfolio</Logo>
          <Nav className="flex flex-xl-column bg-primary w-100 p-3 font-weight-bold rounded">
            <Nav.Link href="#about"> <Icon.Globe /> Main</Nav.Link>
            <Nav.Link href="#skill"><Icon.FileEarmarkPerson /> Resume</Nav.Link>
            <Nav.Link href="#port"><Icon.CodeSlash /> Portfolio</Nav.Link>
          </Nav>
        </Navbar>
      </MenuBar>
      <Dummy />
    </div>
  );
}

export default Sidebar;
