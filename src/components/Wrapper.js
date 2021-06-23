import React from 'react';
import styled, { css } from 'styled-components'
import 'bootstrap/dist/css/bootstrap.min.css';

import Sidebar from './Sidebar'
import Main from './Main'
import Footer from './Footer'


/* ****************** styled ****************** */
const WholeWrapper = styled.div `
  display: flex;
  justify-content: space-between;
  width: 100%;
  background-color: #1e1e2f;
`

const MainWrap = styled.div`
  width: 80%;
  @media screen and (max-width: 1200px) {
    width: 100%;
  }
`

/* ****************** component ****************** */
const Wrapper = () => {
  return (
    <WholeWrapper className="flex">
      <Sidebar />
      <MainWrap>
        <Main />
        <Footer />
      </MainWrap>
    </WholeWrapper>
  );
}

export default Wrapper;
