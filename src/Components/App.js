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
      ]
    }
  }
  updateInputs = (field, userInput) => {
    let grid = this.state.playerInputs[0].gridInputs;
    let flex = this.state.playerInputs[1].flexInputs;
    
    grid[field] = userInput;
    flex[field] = userInput;

    console.log('grid', grid)
    console.log('flex', flex)
    this.setState({
      playerInputs: [
        {gridInputs: grid},
        {flexInputs: flex}
      ]
    })
  }

  render() {
    console.log('player Inputs: ', this.state.playerInputs)
    return (
      <div className="App">
        <Header />
        <DisplayField updateInputs={this.updateInputs} />
        <PlayerCommands updateInputs={this.updateInputs} />
        <Prompts updateInputs={this.updateInputs} />
      </div>
    );
  }
}

export default App;