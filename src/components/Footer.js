import React from 'react';
import styled, { css } from 'styled-components'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import * as Icon from 'react-bootstrap-icons/dist';
import {  } from 'react-bootstrap'

/* ****************** styled ****************** */
const FooterWrapper = styled.div`
  width: 100%;
  height: 100px;
  border-top: 1px solid #333;
  text-align: center;
  padding: 1em;
  color: #f0f0f0;
`

const Tag = styled.h5`
  font-size: 1.5em;
`


/* ****************** Compornent ****************** */
const Footer = () => {
  return (
    <FooterWrapper>
        <Tag href="https://github.com/4boysdontcry" target="blank"><Icon.Github /></Tag>
        <p>&copy; Made by Henry </p>
    </FooterWrapper>
  );
}

export default Footer;
