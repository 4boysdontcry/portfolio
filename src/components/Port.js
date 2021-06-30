import React from 'react';
import styled, { css } from 'styled-components'
import 'bootstrap/dist/css/bootstrap.css';

import { Badge } from 'react-bootstrap'


/* ****************** styled ****************** */
import '../css/port.css'


/* ****************** component ****************** */
const Port = () => {
	return (
		<div id="port" className="port-wrapper">
			<h3 className="title">PORTFOLIO</h3>
			<div className="port-wrap">

				<div className="port">

					<div className="img-wrapper">
						<img src="/img/back.jpg" alt="" />
					</div>

					<div className="article-wrapper">
						<h4 className="subject">PUBLISHING</h4>
						<div className="article-wrap">
							<h5 className="desc">LGe clone coding</h5>
							<div className="badge-wrapper">
								<Badge variant="secondary">HTML5</Badge>
								<Badge variant="secondary">CSS3</Badge>
								<Badge variant="secondary">JS</Badge>
							</div>
							<div className="bt-wrapper">
								<button className="bt-visit bt-git"><a href="https://github.com/4boysdontcry" target="_blank">github</a></button>
								<button className="bt-visit bt-site"><a href="https://jth-lge.web.app" target="_blank">visit site</a></button>
							</div>
						</div>
					</div>

				</div>

			</div>
		</div>
	);
}

export default Port;
