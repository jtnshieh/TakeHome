import React from 'react';
import './assets/header.css';
// import headerImage from './assets/header_right_box.jpg';

const Header  = () => (
  <div className = "header">
    <div className = "header-left">
      <h1 className = "Tawkify">Tawkify</h1>
      <div className = "links">
        <h3>How it works</h3>
        <h3>FAQ</h3>
        <h3>Stories</h3>
        <h3>Sign In</h3>
      </div>
    </div>
    <div className = "header-right">
      <h3 className = "number">(888)494-7280</h3>
      <div className = "chat-button">
        <i className="fas fa-phone" data-fa-transform="rotate-90"></i>
        <div>
          <span>Chat with a love expert</span>
          <span>CLICK HERE FOR FREE SCREENING</span>
        </div>
      </div>
    </div>
  </div>
);

export default Header;
