import React, { Component } from 'react';

class FlexInput extends Component {
  constructor() {
    super()
    this.state = {
      ruleInput: '',
      valueInput: '',
    }
  }
  render() {
    return (
      <form className="FlexInput">
        <h4>Flex-Input:</h4>
        <input className="flexRule" value={this.state.ruleInput} type="text" placeholder="Rule" />
        <input className="flexValue" value={this.state.valueInput} type="text" placeholder="Value" />
      </form>
    );
  }
}

export default FlexInput;