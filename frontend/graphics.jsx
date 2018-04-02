import React from 'react';
import './assets/graphics.css';
import Image from './assets/sparkler.jpg';

const Graphics  = () => (
  <div className="graphics">
    <div className="image-wrapper">
      <img className="image" src = {Image} alt="image"/>
    </div>
    <div className="overlay">
      <p>
        We'd like to get to know you better.
        Tell us about yourself and the sort of someone you'd
      </p>
      <p>
        like to meet. Don&#39;t worry, no one will see this besides
        the matchmakers at Tawkify.
      </p>
    </div>
  </div>
);

export default Graphics;
