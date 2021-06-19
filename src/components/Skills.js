import React from 'react';
import styled, { css } from 'styled-components'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap-icons'

import { Card, ProgressBar } from 'react-bootstrap'

/* ****************** styled ****************** */
const SkillWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2em;
`
const CardWrap = styled.div`
  width: 33.3333%
`


/* ****************** component ****************** */
const Skills = () => {
  return (
    <SkillWrapper id="skill">
      <CardWrap>
        <Card bg="dark" text="light" className="m-1">
          <Card.Header className="font-weight-bold"><Card.Title>Publishing</Card.Title></Card.Header>
          <Card.Body>
            <Card.Text>
            <Card.Text>HTML5</Card.Text>
            <ProgressBar className="m-3" variant="danger" animated now={80} />
            <Card.Text>CSS3</Card.Text>
            <ProgressBar className="m-3" variant="primary" animated now={80} />
            <Card.Text>Javascript</Card.Text>
            <ProgressBar className="m-3" variant="warning" animated now={70} />
            </Card.Text>
          </Card.Body>
        </Card>
      </CardWrap>
      <CardWrap>
        <Card bg="dark" text="light" className="m-1">
          <Card.Header className="font-weight-bold"><Card.Title>Front-End</Card.Title></Card.Header>
          <Card.Body>
            <Card.Text>
            <Card.Text>React </Card.Text>
            <ProgressBar className="m-3" variant="primary" animated now={60} />
            <Card.Text>Vue.js </Card.Text>
            <ProgressBar className="m-3" variant="success" animated now={50} />
            <Card.Text>Firebase </Card.Text>
            <ProgressBar className="m-3" variant="warning" animated now={60} />
            </Card.Text>
          </Card.Body>
        </Card>
      </CardWrap>
      <CardWrap>
        <Card bg="dark" text="light" className="m-1">
          <Card.Header className="font-weight-bold"><Card.Title>Back-End</Card.Title></Card.Header>
          <Card.Body>
            <Card.Text>
            <Card.Text>mySQL</Card.Text>
            <ProgressBar className="m-3" variant="info" animated now={50} />
            <Card.Text>node.js </Card.Text>
            <ProgressBar className="m-3" variant="success" animated now={50} />
            <Card.Text>AWS </Card.Text>
            <ProgressBar className="m-3" variant="primary" animated now={40} />
            </Card.Text>
          </Card.Body>
        </Card>
      </CardWrap>
    </SkillWrapper>
  );
}

export default Skills;