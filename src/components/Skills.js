import React from 'react';
import styled, { css } from 'styled-components'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap-icons'

import { Card, ProgressBar } from 'react-bootstrap'
import Bar from './Bar'
import SkillDesc from './SkillDesc'

/* ****************** styled ****************** */
import '../css/skills.css'

/* ****************** component ****************** */
const Skills = ({ lists }) => {
	return (
    <div className="skill-container" id="skills">
      <div className="title-wrap">
  				<h2 className="title">SKILLS</h2>
  			</div>
  		<div className="skill-wrapper" id="skill">
  			<Bar />
        {
          lists.map(v => <SkillDesc className="wow fadeInUp" lists={v} key={ v.id } /> )
        }
  		</div>
    </div>
	);
}

export default Skills;
