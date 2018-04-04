import React from 'react';

class Location extends React.Component {
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
        <h4>LOCATION</h4>
        <form>
          <input type="text" value={this.state.value} onChange={this.handleChange}/>
        </form>
        <p>Where are you located?</p>
      </div>
    );
  }
}

export default Location;
