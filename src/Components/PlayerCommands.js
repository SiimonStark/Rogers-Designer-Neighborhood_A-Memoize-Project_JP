import React, { Component } from 'react';
import GridInput from './GridInput';
import FlexInput from './FlexInput';

class PlayerCommands extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }
  render() {
    return (
      <section className="PlayerCommands">
        <GridInput updateInputs={this.props.updateInputs} />
        <FlexInput updateInputs={this.props.updateInputs} />
      </section>
    );
  }
}

export default PlayerCommands;