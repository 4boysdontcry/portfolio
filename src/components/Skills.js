import React from 'react';
import styled, { css } from 'styled-components'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap-icons'

import { Card, ProgressBar } from 'react-bootstrap'

/* ****************** styled ****************** */
import '../css/skills.css'


/* ****************** component ****************** */
const Skills = () => {
  return (
    <div className="skill-wrapper" id="skill">
      <div className="skill-wrap">
        <h2 className="title">SKIILS</h2>
        <div className="card-wrap">
              <Card.Text>
                <h3 className="sub-title">Publishing</h3>
                <Card.Text>
                  <img src="" alt="" />
                </Card.Text>
                <ProgressBar className="m-3" variant="dark" animated now={80} />
                <Card.Text>CSS3</Card.Text>
                <ProgressBar className="m-3" variant="dark" animated now={80} />
                <Card.Text>Javascript</Card.Text>
                <ProgressBar className="m-3" variant="dark" animated now={70} />
                </Card.Text>
                <Card.Text>
                <h3 className="sub-title">Front-End</h3>
                <Card.Text>HTML5</Card.Text>
                <ProgressBar className="m-3" variant="dark" animated now={80} />
                <Card.Text>CSS3</Card.Text>
                <ProgressBar className="m-3" variant="dark" animated now={80} />
                <Card.Text>Javascript</Card.Text>
                <ProgressBar className="m-3" variant="dark" animated now={70} />
              </Card.Text>
        </div>
      </div>
    </div>
  );
}

export default Skills;
