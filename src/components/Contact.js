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
        <h3 className="title">CONTACT</h3>
        <div className="call-wrapper">
          <div className="call"><a href="tel:010-8724-7111">📞 +82(0)10-8724-7111</a></div>
          <div className="call"><a href="mailto:hgy02166@gmail.com">📬 hgy02166@gmail.com</a></div>
          <div className="call"><a href="https://github.com/4boysdontcry" target="_blank"><i className="fa fa-github" /> github.com/4boysdontcry</a></div>
        </div>
      </div>
    </div>
  );
}

export default Contact;