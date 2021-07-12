import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import WOW from 'wowjs'


/* ****************** styled ****************** */
import '../css/contact.css'


/* ****************** component ****************** */

const Contact = () => {
  
  useEffect(() => {
    new WOW.WOW().init();
  }, []);

  return (
    <div className="contact-wrapper" id="contact">
      <div className="contact-wrap">
        <h3 className="title">CONTACT</h3>
        <div className="call-wrapper">
          <div className="call wow animate__backInLeft"><a href="tel:010-8724-7111">📞 +82(0)10-8724-7111</a></div>
          <div className="call wow animate__backInRight"><a href="mailto:hgy02166@gmail.com">📬 hgy02166@gmail.com</a></div>
          <div className="call wow animate__backInLeft"><a href="https://github.com/4boysdontcry" target="_blank"><i className="fa fa-github" /> github.com/4boysdontcry</a></div>
        </div>
      </div>
      <div className="move-box"><a href="#main">Back to Top</a></div>
    </div>
  );
}

export default Contact;