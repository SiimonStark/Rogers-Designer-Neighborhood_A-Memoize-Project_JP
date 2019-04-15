import React, { Component } from 'react';

class Prompts extends Component {
  constructor() {
    super()
    this.state = {
      prompts: {
        0: {
          question: "# 1: Grid the field 2x2, for 4 total squares",
          answers: {
            display: "grid",
            gridTemplateAreas: `"square-1 square-2" "square-3 square-4"`
          }
        },
        1: {
          question: "# 2: Align the Roads to the edge of the grid",
          answers: {
            display: "grid",
            gridTemplateAreas: `"square-1 square-2" "square-3 square-4"`
          }
        },
        2: {
          question:
            "# 3: Give space around the trees & Align them to the left of each grid",
          answers: {
            display: "grid",
            gridTemplateAreas: `"square-1 square-2" "square-3 square-4"`
          }
        },
        3: {
          question: "# 4: Center the house in the grid square",
          answers: {
            display: "grid",
            gridTemplateAreas: `"square-1 square-2" "square-3 square-4"`
          }
        }
      },
      currentPrompt: 0
    };
  }
  checkPrompt = () => {
    let currentCounter = this.state.currentPrompt += 1;
    console.log(currentCounter);
    this.setState({currentPrompt: currentCounter})
  }
  render() {
    return (
      <footer className="Prompts">
        <article>
          <h3>Prompt Instructions:</h3>
          <p className="question">
            {this.state.prompts[this.state.currentPrompt].question}
          </p>
        </article>
        <button id="Prompt-check" onClick={this.checkPrompt}>
          Check
        </button>
      </footer>
    );
  }
}

export default Prompts;