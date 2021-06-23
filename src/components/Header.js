import React from 'react';
import styled, { css } from 'styled-components'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap-icons'
import * as Icon from 'react-bootstrap-icons/dist';

import { Navbar, Nav } from 'react-bootstrap'

/* ****************** styled ****************** */
const HeaderWrapper = styled.div`
  margin-bottom: 1.5em;
  display: none;
  @media screen and (max-width: 1200px) {
    display: block;
  }
`
const BtMobile = styled.i`
  font-size: 2em;
  color: #f0f0f0;
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
  }
`

const Img = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin-right: 1em;
`

const NaviWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  color: #f0f0f0;
  @media screen and (max-width: 768px) {
    display: none;
  }
`

const NaviLogo = styled.div`
  @media screen and (max-width: 768px) {
    display: none;
  }
`

/* ****************** component ****************** */

const Header = () => {

  return (
    <HeaderWrapper>
      <Navbar bg="primary" variant="dark" className="justify-content-between">
        <BtMobile className="fa fa-bars" />
          <NaviLogo>
            <Navbar.Brand href="#main">
              <Img src="/img/logo.jpg" className="d-inline-block align-top" />
              Henry's Portfolio
            </Navbar.Brand>
          </NaviLogo>
          <NaviWrap>
            <Nav.Link href="/home">Main</Nav.Link>
            <Nav.Link href="/resume">Resume</Nav.Link>
            <Nav.Link href="/port">Portfolio</Nav.Link>
          </NaviWrap>
      </Navbar>
    </HeaderWrapper>
  );
}

export default Header;