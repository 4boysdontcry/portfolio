import React,{ useEffect } from 'react';
import styled, { css } from 'styled-components'
import 'bootstrap/dist/css/bootstrap.css';
import WOW from 'wowjs'

import { Badge } from 'react-bootstrap'


/* ****************** styled ****************** */
import '../css/port.css'


/* ****************** component ****************** */
const Port = () => {

  useEffect(() => {
    new WOW.WOW().init();
  }, []);

	return (
		<div id="portfolio" className="port-wrapper">
			<h3 className="title">PORTFOLIO</h3>
			<div className="port-wrap">

				<div className="port wow animate__fadeInLeft">
					<div className="img-wrapper">
						<img src="/img/lge.png" alt="" />
					</div>
						<h5 className="desc">LGe clone coding</h5>
					<div className="article-wrapper">
						<h4 className="subject">PUBLISHING</h4>
						<div className="article-wrap">
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

				<div className="port wow animate__fadeInDown">
					<div className="img-wrapper">
						<img src="/img/back.jpg" alt="" />
					</div>
						<h5 className="desc">REACT-SEARCH</h5>
					<div className="article-wrapper">
						<h4 className="subject">FRONT-END</h4>
						<div className="article-wrap">
							<div className="badge-wrapper">
								<Badge variant="secondary">React</Badge>
								<Badge variant="secondary">kakao API</Badge>
							</div>
							<div className="bt-wrapper">
								<button className="bt-visit bt-git"><a href="https://github.com/4boysdontcry" target="_blank">github</a></button>
								<button className="bt-visit bt-site"><a href="https://jth-lge.web.app" target="_blank">visit site</a></button>
							</div>
						</div>
					</div>
				</div>


				<div className="port wow animate__fadeInRight">
					<div className="img-wrapper">
						<img src="/img/gbook.png" alt="" />
					</div>
						<h5 className="desc">GBOOK</h5>
					<div className="article-wrapper">
						<h4 className="subject">BACK-END</h4>
						<div className="article-wrap">
							<div className="badge-wrapper">
								<Badge variant="secondary">Node.js</Badge>
								<Badge variant="secondary">Express</Badge>
								<Badge variant="secondary">MySQL</Badge>
							</div>
							<div className="bt-wrapper">
								<button className="bt-visit bt-git"><a href="https://github.com/4boysdontcry" target="_blank">github</a></button>
								<button className="bt-visit bt-site"><a href="http://3.36.198.155:3000/gbook" target="_blank">visit site</a></button>
							</div>
						</div>
					</div>
				</div>

			</div>
      <div className="bt-wrap">
        <button className="bt-more wow animate__fadeInUp">SEE MORE</button>
      </div>
		</div>
	);
}

export default Port;
