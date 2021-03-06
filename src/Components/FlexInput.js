import React, { Component } from 'react';

class FlexInput extends Component {
  constructor() {
    super()
    this.state = {
      flexField0: {flexRule: '', flexValue: ''},
      inputCounter: 0,
      inputMapList: [0]
    }
  }
  handleFlexChange = (e) => {
    const {value, id, className} = e.target
    let flexRule = this.state[id].flexRule
    let flexValue = this.state[id].flexValue;

    className === 'flexRule'
      ? flexRule = value
      : flexValue = value

    if (flexRule.length > 3 && flexValue.length > 3) {
      this.props.updateInputs(id, { [flexRule]: flexValue });
    }
    this.setState({[id]: {flexRule, flexValue}});
  }
  addInputField = () => {
    let counter = this.state.inputCounter + 1;
    let list = this.state.inputMapList;
    let fields = `flexField${counter}`;
    let newInput = {flexRule: '', flexValue: ''};

    list.push(counter)

    this.setState({inputCounter: counter, inputMapList: list, [fields]: newInput});
  }
  render() {
    return (
      <form className="FlexInput">
        <h4>Flex-Input:</h4>
        {this.state.inputMapList.map((inputField, ind) => { return (
          <div key={ind} className={'flexInput inputGroup' + ind}>
            <input id={'flexField' + ind} onChange={this.handleFlexChange}  className="flexRule" type="text" placeholder="Rule" />
            <span className="colon">:</span>
            <input id={'flexField' + ind} onChange={this.handleFlexChange}  className="flexValue" type="text" placeholder="Value" />
          </div>
        )})}
        <input id="addInput" onClick={this.addInputField} value="+" type="button" />
      </form>
    );
  }
}

export default FlexInput;