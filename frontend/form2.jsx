import React from 'react';
import { withRouter } from "react-router-dom";
import './assets/form2.css';

class Form2 extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.history.push('/form3');
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  render() {
    return (
      <div className="form2-container">
        <h3>Please describe your ideal partner below.</h3>
        <textarea
          className="form2-box"
          onChange={this.handleChange}
          />
        <div className="button-wrapper">
          <input
            className="continue-button"
            type="submit"
            value="SAVE AND CONTINUE"
            onClick={this.handleSubmit}
            />
        </div>
      </div>
    );
  }
}

export default withRouter(Form2);
