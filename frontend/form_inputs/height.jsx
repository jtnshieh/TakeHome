import React from 'react';

class Height extends React.Component {
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

  heightsOptions() {
    const heightsOptions = [];
    const heights = ['4 ft.','4 ft. 1 in.','4 ft. 2 in.','4 ft. 3 in.',
    '4 ft. 4 in.','4 ft. 5 in.','4 ft. 6 in.','4 ft. 7 in.','4 ft. 8 in.',
    '4 ft. 9 in.','4 ft. 10 in.','4 ft. 11 in.','5 ft.','5 ft. 1 in.',
    '5 ft. 2 in.','5 ft. 3 in.','5 ft. 4 in.','5 ft. 5 in.','5 ft. 6 in.',
    '5 ft. 7 in.','5 ft. 8 in.','5 ft. 9 in.','5 ft. 10 in.','5 ft. 11 in.',
    '6 ft.','6 ft. 1 in.','6 ft. 2 in.','6 ft. 3 in.', '6 ft. 4 in.',
    '6 ft. 5 in.','6 ft. 6 in.','6 ft. 7 in.','6 ft. 8 in.','6 ft. 9 in.',
    '6 ft. 10 in.','6 ft. 11 in.','7 ft.'
    ];
    heights.forEach((height,idx) => {
      heightsOptions.push(<option key={idx}>{height}</option>);
    });
    return heightsOptions;
  }

  render() {
    return (
      <div>
        <h4>YOUR HEIGHT</h4>
        <select value={this.state.value} onChange={this.handleChange}>
          <option value="" selected disabled hidden>Select</option>
          {this.heightsOptions()}
        </select>
        <p>What is your height?</p>
      </div>
    );
  }
}

export default Height;
