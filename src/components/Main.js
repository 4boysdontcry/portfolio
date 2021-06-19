import React from 'react';
import styled, { css } from 'styled-components'
import 'bootstrap/dist/css/bootstrap.min.css';

import Skills from './Skills'
import Banner from './Banner'
import Port from './Port'
import Contact from './Contact'


/* ****************** styled ****************** */
const MainWrapper = styled.div`
  width: 100%;
  padding: 97px 1em 1em 1em;
  padding-left: 280px;
  height: 6000px;
`


/* ****************** component ****************** */
const Main = () => {
  return (
    <MainWrapper>
      <Banner />
      <Skills />
      <Port />
      <Contact />
    </MainWrapper>
  );
}

export default Main;
