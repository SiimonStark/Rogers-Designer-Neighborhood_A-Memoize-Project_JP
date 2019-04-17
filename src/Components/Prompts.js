import React, { Component } from 'react';

class Prompts extends Component {
  constructor(props) {
    super(props)
    this.state = {
      prompts: [
        {
          question: "# 1: Grid the field 2x2, for 4 total squares",
          answers: {
            display: "grid",
            gridTemplateAreas: `"square-1 square-2" "square-3 square-4"`
          },
          correctAns: false
        },
        {
          question: "# 2: Align the Roads to the edge of the grid",
          answers: {
            display: "grid",
            gridTemplateAreas: `"square-1 square-2" "square-3 square-4"`
          },
          correctAns: false
        },
        {
          question:
            "# 3: Give space around the trees & Align them to the left of each grid",
          answers: {
            display: "grid",
            gridTemplateAreas: `"square-1 square-2" "square-3 square-4"`
          },
          correctAns: false
        },
        {
          question: "# 4: Center the house in the grid square",
          answers: {
            display: "grid",
            gridTemplateAreas: `"square-1 square-2" "square-3 square-4"`
          },
          correctAns: false
        },
        {
          question: "No more Prompts!!",
          answers: undefined,
          correctAns: undefined
        }
      ],
      currentPrompt: 0,
      showButton: true
    };
  }
  checkPrompt = () => {
    let index = this.state.currentPrompt;

    switch(index) {
      case 0: this.compareGrid(index)
        break;
      case 1: this.compareFlex(index)
        break;
      case 2: this.compareFlex(index)
        break;
      case 3: this.compareFlex(index)
        break;
      case 4: 
        alert('More Coming Soon')
        this.setState({showButton: false})
        break;
      default: console.log('ERROR: Switch Statement');
    }
  }
  compareGrid = (index) => {
    let newPrompts = this.state.prompts;

    if (this.props.playerInputs[0].gridInputs['gridField0']) {
      newPrompts[index].correctAns = true;
      this.setState({ prompts: newPrompts, currentPrompt: 1 }
        , this.updateCorrectPrompt())
    }
  }
  compareFlex = (index) => {
    let newPrompts = this.state.prompts;

    if (this.props.playerInputs[1].flexInputs['flexField0']) {
      newPrompts[index].correctAns = true;
      index ++
      this.setState(
        { prompts: newPrompts, currentPrompt: index }
        , this.updateCorrectPrompt()
      );
    }
  }
  updateCorrectPrompt = () => {
    let promptsAns = this.state.prompts.map(prompt => prompt.correctAns);
    this.props.updatePromptAns(promptsAns);
  }
  render() {
    let button;
    this.state.showButton
      ? button = 
        <button 
          id="Prompt-check" 
          onClick={this.checkPrompt}>
          Check
        </button>
      : button = null;
    
    return (
      <footer className="Prompts">
        <article>
          <h3>Prompt Instructions:</h3>
          <p className="question">
            {this.state.prompts[this.state.currentPrompt].question}
          </p>
        </article>
        {button}
      </footer>
    );
  }
}

export default Prompts;