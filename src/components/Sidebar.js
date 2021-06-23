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
  background-image: linear-gradient(to bottom, #fff, #e9e9e9);
  @media screen and (max-width: 1200px) {
    display: none;
  }
`

const bgColor = {
  "backgroundColor": "#414141"
}

const Logo = styled.div`
  padding: 1em;
  color: #121212;
  border-bottom: 1px solid #f0f0f0;
  font-size: 1.125em;
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 1435px) {
    font-size: .725em;
  }
`
const Img = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin-right: .5em;
`

const Dummy = styled.div`
  width: 100%;
  height: 100%
`

const Content = styled.div`
  margin-top: 3em;
  text-align: center;
  font-size: 1em;
  padding: 1em;
  color: #f0f0f0;
  border-top: 1px solid #f0f0f0;
  @media screen and (max-width: 1400px) {
    font-size: .825em;
  }
`


/* ****************** component ****************** */

const Sidebar = () => {
  return (
    <div>
      <MenuBar>
        <Navbar variant="light" className="w-100 h-100 flex flex-xl-column">
            <Logo className="m-3 font-weight-bold">
              <Img src="/img/logo.jpg" className="d-inline-block align-top" />
              Henry's Portfolio
            </Logo>
          <Nav className="flex flex-xl-column w-100 p-3 font-weight-bold rounded"  style={bgColor}>
            <Nav.Link href="/"> <Icon.Globe /> Main</Nav.Link>
            <Nav.Link href="/resume"><Icon.FileEarmarkPerson /> Resume</Nav.Link>
            <Nav.Link href="/port"><Icon.CodeSlash /> Portfolio</Nav.Link>
            <Content className="font-weight-bold">Thanks for visit my site</Content>
          </Nav>
        </Navbar>
      </MenuBar>
      <Dummy />
    </div>
  );
}

export default Sidebar;
