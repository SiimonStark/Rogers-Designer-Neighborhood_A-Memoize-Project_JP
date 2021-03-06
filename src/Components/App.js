import React, { Component } from 'react';
import Header from './Header';
import DisplayField from './DisplayField';
import PlayerCommands from './PlayerCommands';

import Prompts from './Prompts';

class App extends Component {
  constructor() {
    super()
    this.state = {
      playerInputs: [
        {gridInputs: []},
        {flexInputs: []}
      ],
      promptAnswers: []
    }
  }
  updateInputs = (field, userInput) => {
    let grid = this.state.playerInputs[0].gridInputs;
    let flex = this.state.playerInputs[1].flexInputs;
    console.log(field.includes('grid'));
    console.log('flex',flex)
    field.includes('grid')
      ? grid.push(userInput)
      : flex.push(userInput);
    // field.includes('grid', () => {
    //   grid.push(userInput);
    // });
    // field.includes('flex', () => {
    //   flex.push(userInput);
    // });
    // flex[field] = userInput;

    this.setState({
      playerInputs: [
        {gridInputs: grid},
        {flexInputs: flex}
      ]
    })
  }
  updatePromptAns = (ans) => {
    this.setState({promptAnswers: ans})
  }

  render() {
    console.log(this.state.playerInputs)
    return (
      <div className="App">
        <Header />
        <DisplayField ans={this.state.promptAnswers} />
        <PlayerCommands updateInputs={this.updateInputs} />
        <Prompts playerInputs={this.state.playerInputs}
          updatePromptAns= {this.updatePromptAns} />
      </div>
    );
  }
}

export default App;