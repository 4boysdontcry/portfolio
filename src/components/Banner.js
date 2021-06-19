import React from 'react';
import styled, { css } from 'styled-components'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap-icons'

import { Image } from 'react-bootstrap'

/* ****************** styled ****************** */
const ImgWrapper = styled.div`
  width: 100%;
  height: 500px;
  position: relative;
  margin-bottom: 2em;
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
  justify-content: center;
`

/* ****************** component ****************** */
const Banner = () => {
  return (
    <ImgWrapper>
        <TxtWrap>
          <h2 className="mb-5 display-4 font-weight-bold">About Me</h2>
          <p className="">좀 더 좋은 코드를 작성하기 위해, 늘 공부하고, 배워가면서 좀 더 좋은 코드를 작성하고 싶어 하는 개발자입니다.</p>
        </TxtWrap>
      <ImgWrap>
        <Image src="/img/background.jpg" fluid className="w-100 h-100 rounded" />
      </ImgWrap>
    </ImgWrapper>
  );
}

export default Banner;
