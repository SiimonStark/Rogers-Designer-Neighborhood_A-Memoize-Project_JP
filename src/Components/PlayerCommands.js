import React, { Component } from 'react';
import GridInput from './GridInput';
import FlexInput from './FlexInput';

class PlayerCommands extends Component {
  render() {
    return (
      <section className="PlayerCommands">
        <GridInput />
        <FlexInput />
      </section>
    );
  }
}

export default PlayerCommands;