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
                <div className="skill-desc">반응형 웹 <br /> 페이지 구조화</div>
							</div>
							<div className="lang-wrap wow animate__backInUp">
								<div className="lang-img">
									<img src="/img/css.png" alt="css" />
								</div>
                <div className="skill-desc">스타일링 <br /> 애니메이션</div>
							</div>
							<div className="lang-wrap wow animate__backInUp">
								<div className="lang-img">
									<img src="/img/jas.png" alt="javascript" />
								</div>
                <div className="skill-desc">동적화면 구현 <br /> ajax 통신</div>
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
              <div className="skill-desc">virtual DOM 구현 <br /> 라이브러리 사용</div>
              </div>
              <div className="lang-wrap wow animate__backInUp">
                <div className="lang-img">
                <img src="/img/vuejs.png" alt="vue.js" />
                </div>
                <div className="skill-desc">컴포넌트 구성 <br /> MVVM 패턴 이해</div>
              </div>
              <div className="lang-wrap wow animate__backInUp">
                <div className="lang-img">
                <img src="/img/scss.png" alt="scss" />
                </div>
                <div className="skill-desc">스타일링 가능 <br /> 변수사용 가능</div>
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
                <div className="skill-desc">single thread 이해 <br /> 모듈 사용가능</div>
              </div>
              <div className="lang-wrap wow animate__backInUp">
                <div className="lang-img">
                <img src="/img/sql.png" alt="mysql" />
                </div>
                <div className="skill-desc">DB설계 경험 <br /> 서버와의 통신 이해</div>
              </div>
              <div className="lang-wrap wow animate__backInUp">
                <div className="lang-img">
                <img src="/img/fire.png" alt="firebase" />
                </div>
                <div className="skill-desc">배포 <br /> 데이터베이스 사용</div>
              </div>
            </div>
          </div>

				</div>
			</div>
		</div>
	);
}

export default Skills;
