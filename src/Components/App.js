import React, { Component } from 'react';
import Header from './Header';
import DisplayField from './DisplayField';
import PlayerCommands from './PlayerCommands';

import Prompts from './Prompts';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Header/>
        <DisplayField />
        <PlayerCommands />
        <Prompts />
      </div>
    );
  }
}

export default App;