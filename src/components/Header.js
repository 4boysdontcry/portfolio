import React, {useCallback} from 'react';
import styled, { css } from 'styled-components'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap-icons'

/* ****************** styled ****************** */
import '../css/header.css'
import Navi from './Navi'

/* ****************** component ****************** */

const Header = () => {
  const menu = document.getElementsByClassName("menu-bar")

  // function onShow() {
  //   this.find('.navi-wrap').css("display", "flex")
  // }

  const onShowNavi = useCallback(() => {
		this.find('.navi-wrap').css("display", "flex")
	}, [])

  return (
    <div className="header-wrapper">
      <div className="header-wrap">
        <a className="logo-wrapper" href="/">
          <img src="/img/logo.jpg" className="d-inline-block align-top" />
          <h1>Henry's Portfolio</h1>
        </a>
        <div className="icon-wrapper">
          <a href="https://github.com/4boysdontcry" target="blank">
           <i className="fa fa-github header-icon" />
          </a>
        </div>
        <Navi onShowNavi={onShowNavi} />
      </div>
    </div>
  );
}

export default Header;