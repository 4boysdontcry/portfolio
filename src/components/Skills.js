import React from 'react';
import styled, { css } from 'styled-components'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap-icons'
import WOW from 'wowjs'


/* ****************** styled ****************** */
import '../css/skills.css'

/* ****************** component ****************** */
const Skills = ({ lists, onBars }) => {

	return (
    <div className="skill-container" id="skills">
      <div className="title-wrap">
        <h3>SKILLS</h3>
      </div>
			<div className="skill-wrap">
				<div className="card-wrapper">
				
					<div className="card-wrap" onClick={onBars} id="2">
						<h3 className="sub-title wow animate__fadeIn">Publishing</h3>
						<div className="lang-wrapper">
							<div className="lang-wrap wow animate__backInUp">
								<div className="lang-img">
									<img src="/img/html.png" alt="html" />
								</div>
                <div className="skill-desc">반응형 웹, 페이지 구조화</div>
							</div>
							<div className="lang-wrap wow animate__backInUp">
								<div className="lang-img">
									<img src="/img/css.png" alt="css" />
								</div>
                <div className="skill-desc">스타일링과 애니메이션</div>
							</div>
							<div className="lang-wrap wow animate__backInUp">
								<div className="lang-img">
									<img src="/img/jas.png" alt="javascript" />
								</div>
                <div className="skill-desc">네비게이션 구성, 탭메뉴 구현, ajax 통신</div>
							</div>
						</div>
					</div>

          <div className="card-wrap" onClick={ onBars } id="3">
            <h3 className="sub-title wow animate__fadeIn">Front-End</h3>
            <div className="lang-wrapper">
              <div className="lang-wrap wow animate__backInUp">
                <div className="lang-img">
                <img src="/img/react.png" alt="react" />
                </div>
              <div className="skill-desc">컴포넌트 페이지 구성</div>
              </div>
              <div className="lang-wrap wow animate__backInUp">
                <div className="lang-img">
                <img src="/img/vuejs.png" alt="vue.js" />
                </div>
                <div className="skill-desc">컴포넌트 페이지 구성</div>
              </div>
              <div className="lang-wrap wow animate__backInUp">
                <div className="lang-img">
                <img src="/img/scss.png" alt="scss" />
                </div>
                <div className="skill-desc">css를 대신하여 스타일링 가능</div>
              </div>
            </div>
          </div>

          <div className="card-wrap" onClick={ onBars } id="4">
            <h3 className="sub-title wow animate__fadeIn">Back-End</h3>
            <div className="lang-wrapper">
              <div className="lang-wrap wow animate__backInUp">
                <div className="lang-img">
                <img src="/img/node.png" alt="node.js" />
                </div>
                <div className="skill-desc">single thread 화면 구현</div>
              </div>
              <div className="lang-wrap wow animate__backInUp">
                <div className="lang-img">
                <img src="/img/sql.png" alt="mysql" />
                </div>
                <div className="skill-desc">DB설계 경험</div>
              </div>
              <div className="lang-wrap wow animate__backInUp">
                <div className="lang-img">
                <img src="/img/fire.png" alt="firebase" />
                </div>
                <div className="skill-desc">배포, 데이터베이스 사용</div>
              </div>
            </div>
          </div>

				</div>
			</div>
		</div>
	);
}

export default Skills;
