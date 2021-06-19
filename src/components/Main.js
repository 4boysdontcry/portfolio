import React from 'react';
import styled, { css } from 'styled-components'
import 'bootstrap/dist/css/bootstrap.min.css';

import Skills from './Skills'
import Banner from './Banner'


/* ****************** styled ****************** */
const MainWrapper = styled.div`
  width: 100%;
  padding: 0 1em;
  padding-left: 280px;
  height: 6000px;
`


/* ****************** component ****************** */
const Main = () => {
  return (
    <MainWrapper id="main">
      <Banner />
      <Skills />
    </MainWrapper>
  );
}

export default Main;
