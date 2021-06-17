import React from 'react';
import styled, { css } from 'styled-components'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav } from 'react-bootstrap'
import '../scss/Main.scss'


const Main = () => {
  return (
    <div className="main-wrapper" id="main">
      <div className="sbj-wrap">
        <h2 className="main-sbj">Front-End Developer</h2>
        <h3 className="sub-sbj">황준택 입니다.</h3>
      </div>
    </div>
  );
}

export default Main;
