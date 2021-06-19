import React from 'react';
import styled, { css } from 'styled-components'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

import { Col, Image, Card } from 'react-bootstrap'

/* ****************** styled ****************** */
const ContWrapper = styled.div`

`

const ContWrap = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`

const ImgWrap = styled.div`
  width: 200px;
  height: 200px;
`

const TxtBox = styled.div`
  text-align: right;
`

/* ****************** component ****************** */

const Contact = () => {
  return (
    <ContWrapper>
    <Card bg="dark" text="light">
      <Card.Header>
        <Card.Title>Contact</Card.Title>
      </Card.Header>
      <Card.Body>
        <ContWrap>
          <ImgWrap>
            <Image src="/img/logo.jpg" className="w-100 h-100" roundedCircle />
          </ImgWrap>
          <TxtBox>
            <p><a href="phone:010-8724-7111">📞 +82(0)10-8724-7111</a></p>
            <p><a href="mailto:hgy02166@gmail.com">📬 hgy02166@gmail.com</a></p>
            <p><a href="https://instagram.com/4boysdontcry"><i className="fa fa-instagram" /> 4boysdontcry</a></p>
          </TxtBox>
        </ContWrap>
      </Card.Body>
    </Card>
    </ContWrapper>
  );
}

export default Contact;
