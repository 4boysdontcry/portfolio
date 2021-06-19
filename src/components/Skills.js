import React from 'react';
import styled, { css } from 'styled-components'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap-icons'

import { Card } from 'react-bootstrap'

/* ****************** styled ****************** */
const SkillWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`


/* ****************** component ****************** */
const Skills = () => {
  return (
    <SkillWrapper>
      <Card bg="secondary" text="light" className="mr-2">
        <Card.Header>Publishing</Card.Header>
        <Card.Body>
          <Card.Title>Card Title </Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the bulk
            of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>
      <Card bg="secondary" text="light" className="mr-2">
        <Card.Header>Front-End</Card.Header>
        <Card.Body>
          <Card.Title>Card Title </Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the bulk
            of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>
      <Card bg="secondary" text="light">
        <Card.Header>Back-End</Card.Header>
        <Card.Body>
          <Card.Title>Card Title </Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the bulk
            of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>
    </SkillWrapper>
  );
}

export default Skills;
