import React from 'react';
import styled, { css } from 'styled-components'
import 'bootstrap/dist/css/bootstrap.min.css';



/* ****************** styled ****************** */
import '../css/main.css'


/* ****************** component ****************** */
const Main = () => {

	return (
		<div className="main-wrapper" id="main">
			<div className="main-wrap">
				<div className="text-wrap">
					<div className="ment-wrapper">
						<h2 className="ment wow animate__backInDown">Hi, This is Henry <span className="hand">π</span></h2>
					</div>
					<div className="subject-wrapper wow animate__fadeInLeft animate__delay-1s">
						<p className="article">
							νλ‘ νΈμλ κ°λ°μ <span className="myname">ν©μ€ν</span>μλλ€. <br />
						</p>
						<p className="article2">
							ν¨μ¨μ μΈ μ½λμ λ μ’μ UXλ₯Ό μν΄ κ³΅λΆν©λλ€.
						</p>
					</div>
					<button className="bt-resume wow animate__heartBeat"><a href="https://www.notion.so/RESUME-5b9f93d48b104fd5b906b15fedcd16f0" target="_blank">Resume</a></button>
				</div>
			</div>
		</div>
	);
}

export default Main;
