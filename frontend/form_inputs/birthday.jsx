import React from 'react';
import '../assets/form_inputs_css/birthday.css';

class Location extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      month: '',
      day: '',
      year: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(field) {
    return e => this.setState({
      [field]: e.target.value
    });
  }

  render() {
    return (
      <div>
        <h4>YOUR BIRTHDAY</h4>
        <div>
          <input id="birthday-input" type="text" value={this.state.value} onChange={this.handleChange('month')}/>
          <input id="birthday-input" type="text" value={this.state.value} onChange={this.handleChange('day')}/>
          <input id="birthday-input" type="text" value={this.state.value} onChange={this.handleChange('year')}/>
        </div>
        <p>Where are you located?</p>
      </div>
    );
  }
}

export default Location;
