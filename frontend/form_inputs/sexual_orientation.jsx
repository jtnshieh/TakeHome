import React from 'react';

class SexualOrientation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  render() {
    return (
      <div>
        <h4>YOU ARE SEEKING</h4>
        <select value={this.state.value} onChange={this.handleChange}>
          <option value="" selected disabled hidden>Select</option>
          <option value="female">Female</option>
          <option value="male">Male</option>
          <option value="both">Both</option>
        </select>
        <p>Select the sexual orientation you're seeking.</p>
      </div>
    );
  }
}

export default SexualOrientation;
