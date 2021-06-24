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
					<h2 className="ment">
						INTRO
						<br />
						DUCE
					</h2>
					<div className="arrow"></div>
					<h2>FRONT-END DEVELOPER</h2>
					<h3>황준택 </h3>
				</div>
			</div>
		</div>
	);
}

export default Main;
