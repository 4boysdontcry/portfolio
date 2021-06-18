import React from 'react';
import styled, { css } from 'styled-components'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav } from 'react-bootstrap'
// import '../scss/Header.scss'

const NaviWrapper = styled.div`
  width: 100%;
  position: fixed;
  background-color: #f0f0f0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const NaviWrap = styled.ul`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  font-weight: bold;
`

const Navi = styled.li`
  font-size: 1.25em;
  cursor: pointer;
  margin: 1em;
`

const Header = () => {
  return (
    <NaviWrapper>
      <Navbar.Brand href="#main">
        <img src="/public/img/logo.jpg" alt="로고" />
      </Navbar.Brand>
      <NaviWrap>
        <Navi>About me</Navi>
        <Navi>Skills</Navi>
        <Navi>Portfolio</Navi>
        <Navi>Contact</Navi>
      </NaviWrap>
    </NaviWrapper>
  );
}

export default Header;
