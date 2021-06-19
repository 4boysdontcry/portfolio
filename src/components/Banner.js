import React from 'react';
import styled, { css } from 'styled-components'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap-icons'

import { Image, Button, Card } from 'react-bootstrap'

/* ****************** styled ****************** */
const BannerWrap = styled.div`
  width: 100%;
  height: 500px;
  position: relative;
`

const ImgWrap = styled.div`
  width: 100%;
  height: 100%;
  filter: opacity(0.4);
`

const TxtWrap = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  text-align: center;
  color: #f0f0f0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 2em;
  z-index: 3;
`


/* ****************** component ****************** */
const Banner = () => {
  return (
    <div className="mb-4" id="about">
      <Card bg="dark" text="light">
        <Card.Body>
        <BannerWrap>
          <TxtWrap>
            <h2 className="mb-5 display-4 font-weight-bold">About Me</h2>
            <p className="mb-5">
              사용자 중심의 서비스가 좋은 서비스라고 생각하며, 늘 사용자의 관점에서 생각하며 개발하고 있습니다.
              <br />
              낭비없는 코드를 작성하기 위해 배우기를 멈추지 않는 개발자입니다.
            </p>
            <Button variant="info">Resume</Button>
          </TxtWrap>
        <ImgWrap>
          <Image src="/img/background.jpg" fluid className="w-100 h-100 rounded" />
        </ImgWrap>
        </BannerWrap>
        </Card.Body>
      </Card>

    </div>
  );
}

export default Banner;
