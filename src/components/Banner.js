import React from 'react';
import styled, { css } from 'styled-components'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap-icons'

import { Image } from 'react-bootstrap'

const ImgWrapper = styled.div`
  width: 100%;
  height: 500px;
  border-radius: 10px;
  overflow: hidden;
  
`



const Banner = () => {
  return (
    <ImgWrapper>
      <Image src="/img/background.jpg" fluid className="w-100 h-100" />
    </ImgWrapper>
  );
}

export default Banner;
