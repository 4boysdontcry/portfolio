import React from 'react';
import styled, { css } from 'styled-components'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap-icons'

import { Image, Button, Card } from 'react-bootstrap'

/* ****************** styled ****************** */
const BannerWrapper = styled.div`
  width: 100%;
  margin-bottom: 2em;
`
const BannerWrap = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`

const ImgWrap = styled.div`
  width: 100%;
  max-height: 500px;
  filter: opacity(0.4);
`
const Img = styled.img`
  width: 100%;
  max-height: 500px;
`

const TxtWrap = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  text-align: center;
  color: #f0f0f0;
  padding: 2em;
  z-index: 2;
`

const Title = styled.h2`
  font-size: 4em;
  font-weight: bold;
  @media screen and (max-width: 574px) {
    font-size: 1em;
  }
`
const Desc = styled.p`
  font-size: 1.25em;
  line-height: 2;
  @media screen and (max-width: 574px) {
    font-size: .875em;
  }
`


/* ****************** component ****************** */
const Banner = () => {
  return (
    <BannerWrapper id="about">
      <Card bg="dark" text="light">
        <Card.Body>
        <BannerWrap>
        <ImgWrap>
          <Img src="/img/background.jpg" fluid className="w-100 mh-500 rounded" />
        </ImgWrap>
          <TxtWrap>
            <Title>About Me</Title>
            <Desc>
              사용자의 편의성에 대해 고민하며,
              <br />
              좋은 코드를 위해 배우기를 멈추지 않는 개발자입니다.
            </Desc>
            <Button variant="info">Resume</Button>
          </TxtWrap>
        </BannerWrap>
        </Card.Body>
      </Card>

    </BannerWrapper>
  );
}

export default Banner;
