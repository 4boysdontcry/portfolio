import React,{ useEffect } from 'react';
import styled, { css } from 'styled-components'
import 'bootstrap/dist/css/bootstrap.css';
import WOW from 'wowjs'

import { Badge } from 'react-bootstrap'


/* ****************** styled ****************** */
import '../css/portList.css'


/* ****************** component ****************** */
const PortList = ({ list2: v }) => {

  useEffect(() => {
    new WOW.WOW().init();
  }, []);

	return (
    <div className="port wow animate__fadeInUp">
      <div className="img-wrapper">
        <img src={v.src} alt="이미지" />
      </div>
        <h5 className="desc">{ v.title }</h5>
      <div className="article-wrapper">
        <h4 className="subject">{ v.cate }</h4>
        <div className="article-wrap">
          <div className="badge-wrapper">
            <Badge variant="secondary">{v.badge1}</Badge>
            <Badge variant="secondary">{v.badge2}</Badge>
            <Badge variant="secondary">{v.badge3}</Badge>
          </div>
          <div className="bt-wrapper">
            <button className="bt-visit bt-git"><a href={ v.hrefgit } target="_blank">github</a></button>
            <button className="bt-visit bt-site"><a href={ v.hrefsite } target="_blank">visit site</a></button>
          </div>
        </div>
      </div>
    </div>
	);
}

export default PortList;
