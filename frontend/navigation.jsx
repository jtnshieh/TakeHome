import React from 'react';
import './assets/navigation.css';

class Navigation extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.step === "1") {
      this.button1.className = "active";
      this.button2.classList.remove('active');
      this.button3.classList.remove('active');
    } else if (nextProps.step === "2") {
      this.button2.className = "active";
      this.button1.classList.remove('active');
      this.button3.classList.remove('active');
    } else if (nextProps.step === "3") {
      this.button3.className = "active";
      this.button2.classList.remove('active');
      this.button1.classList.remove('active');
    }
  }

  render() {
    return (
      <div className="container">
        <ul className="progressbar">
          <li
            className="active"
            ref={(el) => {this.button1 = el;}}
            >
            ABOUT YOURSELF
          </li>
          <li
            ref={(el) => {this.button2 = el;}}
            >
            IDEAL PARTNER
          </li>
          <li
            ref={(el) => {this.button3 = el;}}
            >
            ADD PHOTOS
          </li>
        </ul>
      </div>
    );
  }
}

export default Navigation;
