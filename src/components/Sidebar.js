import React from 'react';
import styled, { css } from 'styled-components'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Container } from 'react-bootstrap'
import 'react-bootstrap-icons'


/* ****************** styled ****************** */
const Side = styled.div`
  width: 20%;
  height: 100vh;
`

const Menu = styled.div`
  display: flex;
  flex-direction: column;
`


/* ****************** component ****************** */

const Sidebar = () => {
  return (
    <Side>
      <Navbar bg="primary" variant="dark">
        <Nav className="me-auto">
          <Menu>
            <Nav.Link href="#about">
              <i className="bi bi-user" />
              About Me
            </Nav.Link>
            <Nav.Link href="#skill">Skills</Nav.Link>
            <Nav.Link href="#port">Portfolio</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Menu>
        </Nav>
      </Navbar>
    </Side>
  );
}

export default Sidebar;
