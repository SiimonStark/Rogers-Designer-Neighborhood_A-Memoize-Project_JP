import React, { Component } from 'react';

class GridInput extends Component {
  constructor() {
    super()
    this.state = {
      gridField0: {gridRule: '', gridValue: ''},
      inputCounter: 0,
      inputMapList: [0]
    }
  }
  handleGridChange = (e) => {
    const {value, id, className} = e.target
    let gridRule = this.state[id].gridRule
    let gridValue = this.state[id].gridValue;

    className === 'gridRule'
      ? gridRule = value
      : gridValue = value

    this.setState({[id]: {gridRule, gridValue}});
  }
  addInputField = () => {
    let counter = this.state.inputCounter + 1;
    let list = this.state.inputMapList;
    let fields = `gridField${counter}`;
    let newInput = {gridRule: '', gridValue: ''};

    list.push(counter)

    this.setState({inputCounter: counter, inputMapList: list, [fields]: newInput});
  }
  render() {
    console.log('GridState: ',this.state)

    return (
      <form className="GridInput">
        <h4>Grid-Input:</h4>
        {this.state.inputMapList.map((inputField, ind) => { return (
          <div className={'inputGroup' + ind}>
            <input id={'gridField' + ind} onChange={this.handleGridChange}  className="gridRule" type="text" placeholder="Rule" />
            <input id={'gridField' + ind} onChange={this.handleGridChange}  className="gridValue" type="text" placeholder="Value" />
          </div>
        )})}
        <input id="addInput" onClick={this.addInputField} value="+" type="button" />
      </form>
    );
  }
}

export default GridInput;