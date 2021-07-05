import React, { useEffect } from 'react';
import styled, { css } from 'styled-components'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap-icons'
import WOW from 'wowjs'

import { Card, ProgressBar } from 'react-bootstrap'

/* ****************** styled ****************** */
import '../css/skilldesc.css'

/* ****************** component ****************** */
const SkillDesc = ({lists:v}) => {

  useEffect(() => {
    new WOW.WOW().init();
  }, []);

	return (
		<div className="desc-wrapper">
			<div className="title-wrap wow fadeInUp">
				<h3 className="title">{ v.title }</h3>
			</div>
			<div className="desc-set">
				<p className="desc1 wow fadeInRight">{ v.desc1 }</p>
				<p className="desc2 wow fadeInRight">{ v.desc2 }</p>
			</div>
		</div>
	);
}

export default SkillDesc;
