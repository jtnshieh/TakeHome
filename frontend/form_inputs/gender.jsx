import React from 'react';

class Gender extends React.Component {
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
        <h4>YOUR GENDER</h4>
        <select value={this.state.value} onChange={this.handleChange}>
          <option value="female">Female</option>
          <option value="male">Male</option>
        </select>
        <p>Select your gender.</p>
      </div>
    );
  }
}

export default Gender;
