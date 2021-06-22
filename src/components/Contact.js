import React from 'react';
import styled, { css } from 'styled-components'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

import { Col, Image, Card } from 'react-bootstrap'

/* ****************** styled ****************** */
const ContWrapper = styled.div`
  width: 100%;
  margin-bottom: 2em;
`

const ContWrap = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`

const ImgWrap = styled.div`
  width: 200px;
  height: 200px;
  @media screen and (max-width: 768px) {
    width: 150px;
    height: 150px;
  }
  @media screen and (max-width: 574px) {
    display: none;
  }
`

const TxtBox = styled.div`
  text-align: right;
  font-size: 1.25em;
  @media screen and (max-width: 574px) {
    text-align: center;
  }
`

/* ****************** component ****************** */

const Contact = () => {
  return (
    <ContWrapper id="contact">
    <Card bg="dark" text="light">
      <Card.Header>
        <Card.Title>Contact</Card.Title>
      </Card.Header>
      <Card.Body>
        <ContWrap>
          <TxtBox>
            <p><a href="phone:010-8724-7111">📞 +82(0)10-8724-7111</a></p>
            <p><a href="mailto:hgy02166@gmail.com">📬 hgy02166@gmail.com</a></p>
            <p><a href="https://instagram.com/4boysdontcry"><i className="fa fa-instagram" /> 4boysdontcry</a></p>
          </TxtBox>
          <ImgWrap>
            <Image src="/img/logo.jpg" className="w-100 h-100" roundedCircle />
          </ImgWrap>
        </ContWrap>
      </Card.Body>
    </Card>
    </ContWrapper>
  );
}

export default Contact;