import React, { Component } from 'react';

class Prompts extends Component {
  constructor() {
    super()
    this.state = {
      prompts: {
        0: '# 1: Grid the field 2x2, for 4 total squares',
        1: '# 2: Align the Roads to the edge of the grid',
        2: '# 3: Give space around the trees & Align them to the left of each grid',
        3: '# 4: Center the house in the grid square'
      },
      currentPrompt: 1
    }
  }
  checkPrompt = () => {
    console.log('feature coming soon: checkPrompt')
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
        <button id="Prompt-check" onClick={this.checkPrompt}>Check</button>
      </footer>
    );
  }
}

export default Prompts;