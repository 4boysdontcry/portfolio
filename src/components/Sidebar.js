import React, { useCallback } from 'react';
import styled, { css } from 'styled-components'
import 'bootstrap/dist/css/bootstrap.min.css';
import * as Scroll from 'react-scroll';
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'


/* ****************** styled ****************** */
import '../css/sidebar.css'


/* ****************** component ****************** */

const Sidebar = () => {
  
  const onClick = useCallback(e => {
    for(var i=0; i<4; i++) {
      e.target.parentNode.parentNode.childNodes[i].classList.remove('active')
    }
    e.target.parentNode.classList.add('active')
  }, [])
  
  return (
    <div className="side-wrapper">
      <div className="bar">

        <div className="box"><a href="#main" className="title" onClick={onClick}>MAIN</a></div>

        <div className="box"><a href="#skills" className="title" onClick={onClick}>SKILLS</a></div>

        <div className="box"><a href="#portfolio" className="title" onClick={onClick}>PORTFOLIO</a></div>

        <div className="box"><a href="#contact" className="title" onClick={onClick}>CONTACT</a></div>
      </div>
    </div>
  );
}

export default Sidebar;
