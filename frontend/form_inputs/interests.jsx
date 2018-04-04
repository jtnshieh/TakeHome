import React from 'react';
import '../assets/form_inputs_css/occupation.css';

const DEFAULT_HEIGHT = 20;

class Interests extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      height: DEFAULT_HEIGHT,
      value: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.setTextareaHeight = this.setTextareaHeight.bind(this);
  }

  setTextareaHeight() {
    const element = this.ghost;

    this.setState({
      height: element.clientHeight,
    });
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  getExpandableField() {
    const isOneLine = this.state.height <= DEFAULT_HEIGHT;
    const { height, value } = this.state;
    return (
      <textarea
        className="textarea"
        style={{
          height,
          resize: isOneLine ? "none" : null
          }}
        value={value}
        onChange={this.handleChange}
        onKeyUp={this.setTextareaHeight}
      />
    );
  }

  getGhostField() {
    return (
      <div
        className="textarea textarea--ghost"
        ref={(el) => this.findGhost(el)}
        aria-hidden="true"
      >
        {this.state.value}
      </div>
    );
  }

  findGhost(el) {
    this.ghost = el;
  }

  render() {
    return (
      <div>
        <h4>INTERESTS</h4>
        <form className="occupation-container">
          {this.getExpandableField()}
          {this.getGhostField()}
        </form>
        <p>
          Tell us a little more about yourself and what you like to do.
          We read everything, so please share!
        </p>
      </div>
    );
  }
}

export default Interests;
