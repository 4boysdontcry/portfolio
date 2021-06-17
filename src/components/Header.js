import React from 'react';
import styled, { css } from 'styled-components'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav } from 'react-bootstrap'
import '../scss/Header.scss'

const Header = () => {
  return (
    <Navbar className="navi-wrapper" as="ul" fixed="top">
      <Navbar.Brand href="#main">
        Henry's Portfolio
      </Navbar.Brand>
      <div className="navi-wrap">
        <Nav as="li" className="navi">About me</Nav>
        <Nav as="li" className="navi">Skills</Nav>
        <Nav as="li" className="navi">Portfolio</Nav>
        <Nav as="li" className="navi">Contact</Nav>
      </div>
    </Navbar>
  );
}

export default Header;
