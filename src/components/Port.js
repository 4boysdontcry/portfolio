import React from 'react';
import styled, { css } from 'styled-components'
import 'bootstrap/dist/css/bootstrap.min.css';

import { Carousel, Image, Badge } from 'react-bootstrap'


/* ****************** styled ****************** */
const PortWrapper = styled.div`
  width: 100%;
  height: 400px;
  margin-bottom: 2em;
`
const ImgWrap = styled.div`
  width: 60%;
  margin: 0 auto;
  height: 400px;
`


/* ****************** component ****************** */
const Port = () => {
  return (
    <PortWrapper id="port">
      <Carousel>
  <Carousel.Item interval={5000}>
    <ImgWrap>
      <Image className="d-block w-100 h-100 rounded" fluid src="/img/back.jpg" alt="First slide" />
    </ImgWrap>
    <Carousel.Caption>
      <h3>LGe clone Coding</h3>
        <Badge bg="primary">HTML5</Badge>{' '}
        <Badge bg="success">CSS3</Badge>
      <p>HTML5와 CSS3, 약간의 jQuery를 이용해 LG전자의 홈페이지를 제작했습니다.</p>
    </Carousel.Caption>
  </Carousel.Item>

  <Carousel.Item interval={5000}>
    <ImgWrap>
      <Image className="d-block w-100 h-100 rounded" fluid src="/img/back.jpg" alt="Second slide" />
    </ImgWrap>
    <Carousel.Caption>
      <h3>Firebase Chatting</h3>
      <p>#HTML5 #CSS3 #Javascript #Firebase</p>
      <p>구글 계정으로 로그인하여 방명록을 남기며, 채팅을 할 수 있습니다.</p>
    </Carousel.Caption>
  </Carousel.Item>

  <Carousel.Item interval={5000}>
    <ImgWrap>
      <Image className="d-block w-100 h-100 rounded" fluid src="/img/back.jpg" alt="Third slide" />
    </ImgWrap>
    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>

</Carousel>
    </PortWrapper>
  );
}

export default Port;
