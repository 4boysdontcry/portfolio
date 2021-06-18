import React from 'react';
import styled, { css } from 'styled-components'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container, FormControl, Button } from 'react-bootstrap'

import Sidebar from './Sidebar'
import Main from './Main'


/* ****************** styled ****************** */
const WholeWrapper = styled.div `
  width: 100%;
  background-color: #343a40;
  display: flex;
  justify-content: center;
  align-items: center;
`

/* ****************** component ****************** */
const Wrapper = () => {
  return (
    <WholeWrapper>
      <Sidebar />
      <Main />
    </WholeWrapper>
  );
}

export default Wrapper;
