import React, { Component } from 'react';

class Prompts extends Component {
  constructor() {
    super()
    this.state = {
      prompts: {
        0: '# 1: Grid the field 3x3, for 9 total squares',
        1: ''
      },
      currentPrompt: 0
    }
  }
  render() {
    return (
      <footer className="Prompts">
        <article>
          <h3>Prompt Instructions:</h3>
          <p className="question">
            {this.state.prompts[this.state.currentPrompt]}
          </p>
        </article>
      </footer>
    );
  }
}

export default Prompts;