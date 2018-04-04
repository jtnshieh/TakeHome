import React from 'react';
import '../assets/form_inputs_css/income_toggle.css';

class HeightToggle extends React.Component {
  constructor(props) {
    super(props);
    this.changeToHoverColor = this.changeToHoverColor.bind(this);
    this.changeBackColor = this.changeBackColor.bind(this);
    this.changeToClickColor = this.changeToClickColor.bind(this);
  }

  changeToClickColor(event) {
    event.preventDefault();
    const background = window.getComputedStyle(event.target, null).getPropertyValue("background-color");
    if (background === "rgb(169, 169, 169)") {
      event.target.style.backgroundColor = "#00B9D7";
    }
    if (event.target.className === "no-button") {
      this.yesButton.style.backgroundColor = "rgb(188, 190, 192)";
    } else {
      this.noButton.style.backgroundColor = "rgb(188, 190, 192)";
    }
  }

  changeToHoverColor(event) {
    event.preventDefault();
    const background = window.getComputedStyle(event.target, null).getPropertyValue("background-color");
    if (background === "rgb(188, 190, 192)") {
      event.target.style.backgroundColor = "#a9a9a9";
    }
  }

  changeBackColor(event) {
    event.preventDefault();
    const background = window.getComputedStyle(event.target, null).getPropertyValue("background-color");
    if (background === "rgb(169, 169, 169)") {
      event.target.style.backgroundColor = "#BCBEC0";
    }
  }

  render() {
    return (
      <div>
        <label className="switch" style={{marginTop:"78px"}}>
          <div
            className="yes-button"
            ref={(el) => {this.yesButton = el;}}
            onClick={this.changeToClickColor}
            onMouseOver={this.changeToHoverColor}
            onMouseLeave={this.changeBackColor}
            >
            YES
          </div>
          <div
            className="no-button"
            ref={(el) => {this.noButton = el;}}
            onClick={this.changeToClickColor}
            onMouseOver={this.changeToHoverColor}
            onMouseLeave={this.changeBackColor}
            >
            NO
          </div>
        </label>
        <p>Is height a factor in your match preferences?</p>
      </div>
    );
  }
}

export default HeightToggle;
