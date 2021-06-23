import React from 'react';
import styled, { css } from 'styled-components'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import * as Icon from 'react-bootstrap-icons/dist';
import {  } from 'react-bootstrap'

/* ****************** styled ****************** */
import '../css/footer.css'


/* ****************** Compornent ****************** */
const Footer = () => {
  return (
    <div className="footer-wrapper">
      <p className="copy">&copy; Made with Henry</p>
    </div>
  );
}

export default Footer;
