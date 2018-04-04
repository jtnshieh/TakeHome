import React from 'react';

class Income extends React.Component {
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

  incomeOptions() {
    const incomeOptions = [];
    const incomes = [
      "Less than $40,000",
      "$40,000-$60,000",
      "$60,000-$80,000",
      "$80,000-$100,000",
      "$100,000-$125,000",
      "$125,000-$150,000",
      "$150,000-$200,000",
      "$200,000-$250,000",
      "$250,000-500,000",
      "$500,000-$1,000,000",
      "Rather not say"
    ];
    incomes.forEach((income,idx) => {
      incomeOptions.push(<option key={idx}>{income}</option>);
    });
    return incomeOptions;
  }

  render() {
    return (
      <div>
        <h4>INCOME</h4>
        <select value={this.state.value} onChange={this.handleChange}>
          <option value="" selected disabled hidden>Select</option>
          {this.incomeOptions()}
        </select>
        <p>Why? This is one form of an indicator...</p>
      </div>
    );
  }
}

export default Income;
