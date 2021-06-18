import React from 'react';
import styled, { css } from 'styled-components'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav } from 'react-bootstrap'

/* ****************** styled ****************** */


/* ****************** component ****************** */
const Header = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="#home">This is Henry</Navbar.Brand>
    </Navbar>
  );
}

export default Header;
