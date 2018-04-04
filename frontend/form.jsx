import React from 'react';
import { withRouter } from "react-router-dom";
import './assets/form.css';
import Gender from './form_inputs/gender';
import Location from './form_inputs/location';
import Height from './form_inputs/height';
import Occupation from './form_inputs/occupation';
import IncomeToggle from './form_inputs/income_toggle';
import SexualOrientation from './form_inputs/sexual_orientation';
import Birthday from './form_inputs/birthday';
import HeightToggle from './form_inputs/height_toggle';
import Income from './form_inputs/income';
import Interests from './form_inputs/interests';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.history.push('/form2');
  }

  render() {
    return (
      <div>
        <h2 className="title">Tell us a bit about yourself</h2>
        <h4 className="subtitle">
          Tell us a bit about yourself and who you'd like to meet.
          The more we know, the better.
          Be candid--this
        </h4>
        <h4 className="subtitle">
          info is for our eyes only. Tawkify profiles and photos will
          forever be 100% confidential.
        </h4>
        <div className="input-sections">
          <div className="input-section">
            <Gender/>
            <SexualOrientation/>
          </div>
          <div className="input-section">
            <Location/>
            <Birthday/>
          </div>
          <div className="input-section">
            <Height/>
            <HeightToggle/>
          </div>
          <div className="input-section">
            <Occupation/>
            <Income/>
          </div>
          <div className="input-section">
            <IncomeToggle/>
            <Interests/>
          </div>
        </div>
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

export default withRouter(Form);
