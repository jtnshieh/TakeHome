import React from 'react';
import './assets/header.css';
import headerImage from './assets/images/header_right_box.jpg';
import Logo from './assets/images/tawkify_logo.png';

const Header  = () => (
  <div className = "header">
    <div className = "header-left">
      <div className="Tawkify">
        <img src={Logo}></img>
      </div>
      <div className = "links">
        <h3>How it works</h3>
        <h3>FAQ</h3>
        <h3>Stories</h3>
        <h3>Sign In</h3>
      </div>
    </div>
    <div className = "header-right">
      <h3 className = "number">{String.fromCharCode(49) + "(888)494-7280"}</h3>
      <div className = "chat-button">
        <img src = {headerImage} alt="image"/>
      </div>
    </div>
  </div>
);

export default Header;
