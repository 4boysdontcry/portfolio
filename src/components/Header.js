import React from 'react';
import styled, { css } from 'styled-components'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap-icons'

/* ****************** styled ****************** */
import '../css/header.css'


/* ****************** component ****************** */

const Header = () => {

  return (
    <div className="header-wrapper">
      <div className="header-wrap">
        <div className="logo-wrapper">
          <img src="/img/logo.jpg" className="d-inline-block align-top" />
          <h1>Henry's Portfolio</h1>
        </div>
        <a href="https://github.com/4boysdontcry"><i className="fa fa-github" /></a>
      </div>
    </div>
  );
}

export default Header;