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
      promptAnswers: {
        1: false,
        2: false,
        3: false,
        4: false
      }
    }
  }
  updateInputs = (field, userInput) => {
    let grid = this.state.playerInputs[0].gridInputs;
    let flex = this.state.playerInputs[1].flexInputs;
    
    grid[field] = userInput;
    flex[field] = userInput;

    this.setState({
      playerInputs: [
        {gridInputs: grid},
        {flexInputs: flex}
      ]
    })
  }
  updatePromptAns = (prompt) => {
    switch(prompt) {
      case 1:
      break;
      default: console.log('invalid')
    }

  }

  render() {
    console.log('player Inputs: ', this.state.playerInputs)
    return (
      <div className="App">
        <Header />
        <DisplayField updateInputs={this.updateInputs} />
        <PlayerCommands updateInputs={this.updateInputs} />
        <Prompts playerInputs={this.state.playerInputs}
          updatePromptAns= {this.updatePromptAns} />
      </div>
    );
  }
}

export default App;