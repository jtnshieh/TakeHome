import React from 'react';
import { withRouter } from "react-router-dom";
import './assets/form3.css';

class Form3 extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
  }

  render() {
    return (
      <div className="form3-container">
        <h2>Upload recent photos of yourself</h2>
        <div className="form3-description">
          <p>
            We ask that you upload at least 2 pictures of yourself; but
            upload as many as you'd like. We encourage
          </p>
          <p>
            you to review your pictures perdiocially to make sure they're
            up to date. Snapshots and selfies just
          </p>
          <p>
            fine here. Remember this image is for our internal use and
            will not be shared with potential matches -
          </p>
          <p>
            you will also be able to swap it out later if you wish.
          </p>
        </div>
        <div className="image-upload-area">
          <i className="far fa-image fa-4x"></i>
          <span>
            Drag and drop a photo
          </span>
        </div>
        <input
          className="file-button"
          value="CHOOSE FILE"
          readOnly/>
        <p>
          {"Your pictures must be 4 megabytes or smaller. If you have problems, please contact us at"
            + String.fromCharCode(49) + "(646)791-3283"}
        </p>
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

export default withRouter(Form3);
