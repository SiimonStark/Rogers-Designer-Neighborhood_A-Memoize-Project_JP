import React, { Component } from 'react';

class GridInput extends Component {
  constructor() {
    super()
    this.state = {
      ruleInput: '',
      valueInput: '',
    }
  }
  render() {
    return (
      <form className="GridInput">
        <h4>Grid-Input:</h4>
        <input className="gridRule" value={this.state.ruleInput} type="text" placeholder="Rule" />
        <input className="gridValue" value={this.state.valueInput} type="text" placeholder="Value" />
      </form>
    );
  }
}

export default GridInput;