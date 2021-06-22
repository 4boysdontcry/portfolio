import React from 'react';
import styled, { css } from 'styled-components'
import 'bootstrap/dist/css/bootstrap.min.css';

import { Carousel, Image, Badge, Card, Button } from 'react-bootstrap'


/* ****************** styled ****************** */
const PortWrapper = styled.div`
  width: 100%;
  /* max-height: 400px; */
  margin-bottom: 2em;
`
const ImgWrap = styled.div`
  width: 100%;
  max-height: 400px;
`

const ContentWrap = styled.div`
  width: 70%;
  height: 70%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  padding: .5em;
  background-color: #00000050;
  border-radius: 10px;
`
const Img = styled.img`
  width: 100%;
  max-height: 400px;
`
const Btn = styled.button`
  @media screen and (max-width: 574px) {
    display: none;
  }
`
const Bt = styled.button`
  display: none;
  @media screen and (max-width: 574px) {
    display: inline-block;
  }
`

const Subject = styled.h4`
  font-size: 2em;
  border-bottom: 1px solid #f0f0f0;
  @media screen and (max-width: 992px) {
    font-size: 1em;
  }
  @media screen and (max-width: 574px) {
    font-size: .725em;
  }
`
const Title = styled.h3`
  font-size: 3.125em;
  font-weight: bold;
  padding: .125em 0;
  @media screen and (max-width: 992px) {
    font-size: 1.25em;
  }
  @media screen and (max-width: 574px) {
    font-size: 1em;
  }
`
const BgWrap = styled.div`
  @media screen and (max-width: 574px) {
    font-size: .5em;
  }
`


/* ****************** component ****************** */
const Port = () => {
  return (
    <PortWrapper id="port">
      <Card bg="dark" text="light" className="p-2">
      <Card.Header className="font-weight-bold"><Card.Title>Portfolio</Card.Title></Card.Header>
      <Card.Body>
        <Carousel>
          <Carousel.Item interval={5000}>
            <ImgWrap>
              <Img className="d-block rounded" fluid src="/img/back.jpg" alt="First slide" />
            </ImgWrap>
            <ContentWrap>
              <Subject>Publishing</Subject>
                <div>
                  <Title>LGe clone Coding</Title>
                  <BgWrap>
                    <Badge variant="danger" className="m-1">HTML5</Badge>
                    <Badge variant="primary" className="m-1">CSS3</Badge>
                  </BgWrap>
                </div>
                <div>
                  <Btn className="btn btn-primary m-1">github</Btn>
                  <Btn className="btn btn-info m-1">visit site</Btn>
                </div>
            </ContentWrap>
          </Carousel.Item>

          <Carousel.Item interval={5000}>
            <ImgWrap>
              <Img className="d-block rounded" fluid src="/img/back.jpg" alt="Second slide" />
            </ImgWrap>
            <ContentWrap>
                <Subject>Front-End</Subject>
                <div>
                  <Title>Firebase Chatting</Title>
                  <BgWrap>
                    <Badge variant="danger" className="m-1">HTML5</Badge>
                    <Badge variant="primary" className="m-1">CSS3</Badge>
                    <Badge variant="warning" className="m-1">JS</Badge>
                    <Badge variant="warning" className="m-1">Firebase</Badge>
                  </BgWrap>
                </div>
                <div>
                  <Btn className="btn btn-primary m-1">github</Btn>
                  <Btn className="btn btn-info m-1">visit site</Btn>
                </div>
            </ContentWrap>
          </Carousel.Item>

          <Carousel.Item interval={5000}>
            <ImgWrap>
              <Img className="d-block rounded" fluid src="/img/back.jpg" alt="Third slide" />
            </ImgWrap>
            <ContentWrap>
                <Subject>Front-End</Subject>
                <div>
                <Title>Today's weather</Title>
                  <BgWrap>
                    <Badge variant="success" className="m-1">Vue.js</Badge>
                    <Badge variant="primary" className="m-1">SCSS</Badge>
                  </BgWrap>
                </div>
                <div>
                  <Btn className="btn btn-primary m-1">github</Btn>
                  <Btn className="btn btn-info m-1">visit site</Btn>
                </div>
            </ContentWrap>
          </Carousel.Item>

        </Carousel>
        </Card.Body>
          <Bt className="btn btn-info m-1 ">more detail</Bt>
      </Card>
    </PortWrapper>
  );
}

export default Port;
