import React from 'react';
import styled, { css } from 'styled-components'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import { Col, Image, Card } from 'react-bootstrap'


/* ****************** styled ****************** */
import '../css/contact.css'


/* ****************** component ****************** */

const Contact = () => {
  return (
    <div className="contact-wrapper">
      <div className="contact-wrap">
        <h3>CONTACT</h3>
        <div className="call-wrapper">
          <div className="call"><a callto="010-8724-7111"></a></div>
          <div className="call"><a href=""></a></div>
          <div className="call"><a href=""></a></div>
        </div>
      </div>
    </div>
  );
}

export default Contact;