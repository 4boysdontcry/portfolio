import React from 'react';
import styled, { css } from 'styled-components'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap-icons'

import { Card, ProgressBar } from 'react-bootstrap'

/* ****************** styled ****************** */
import '../css/bar.css'



/* ****************** component ****************** */
const Bar = () => {
  return (
    <div className="bar-wrapper">
      <div className="skill-wrap">
				<div className="card-wrapper">
					<div className="card-wrap" id="1">
						<h3 className="sub-title">Publishing</h3>
							<div className="lang-wrapper">
							  <div className="lang-wrap">
  								<div className="lang-img">
  								 <img src="/img/html.png" alt="html" />
  								</div>
  								<ProgressBar className="m-3 probar" variant="info" animated now={80} />
  							</div>
  							<div className="lang-wrap">
  								<div className="lang-img">
  								 <img src="/img/css.png" alt="css" />
  								</div>
  								<ProgressBar className="m-3 probar" variant="info" animated now={80} />
  							</div>
  							<div className="lang-wrap">
  								<div className="lang-img">
  								 <img src="/img/jas.png" alt="javascript" />
  								</div>
  								<ProgressBar className="m-3 probar" variant="info" animated now={70} />
  							</div>
							</div>
					</div>
						<div className="card-wrap" id="2">
									<h3 className="sub-title">Front-End</h3>
								<div className="lang-wrapper">
								  <div className="lang-wrap">
  									<div className="lang-img">
  									<img src="/img/react.png" alt="react" />
  									</div>
  									<ProgressBar className="m-3 probar" variant="info" animated now={70} />
  								</div>
  								<div className="lang-wrap">
  									<div className="lang-img">
  									<img src="/img/vuejs.png" alt="vue.js" />
  									</div>
  									<ProgressBar className="m-3 probar" variant="info" animated now={50} />
  								</div>
  								<div className="lang-wrap">
  									<div className="lang-img">
  									<img src="/img/scss.png" alt="scss" />
  									</div>
  									<ProgressBar className="m-3 probar" variant="info" animated now={60} />
  								</div>
								</div>
						</div>
						<div className="card-wrap" id="3">
									<h3 className="sub-title">Back-End</h3>
								<div className="lang-wrapper">
								  <div className="lang-wrap">
  									<div className="lang-img">
  									<img src="/img/node.png" alt="node.js" />
  									</div>
  									<ProgressBar className="m-3 probar" variant="info" animated now={40} />
  								</div>
  								<div className="lang-wrap">
  									<div className="lang-img">
  									<img src="/img/sql.png" alt="mysql" />
  									</div>
  									<ProgressBar className="m-3 probar" variant="info" animated now={40} />
  								</div>
  								<div className="lang-wrap">
  									<div className="lang-img">
  									<img src="/img/fire.png" alt="firebase" />
  									</div>
  									<ProgressBar className="m-3 probar" variant="info" animated now={60} />
  								</div>
								</div>
						</div>
				</div>
			</div>
    </div>
  );
}

export default Bar;
