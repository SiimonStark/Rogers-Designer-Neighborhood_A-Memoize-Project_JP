import React, { Component } from 'react';
// import BurgerMenu from './BurgerMenu';

class DisplayField extends Component {
  constructor() {
    super()
    this.state = {
      gridSquares: ['square-1','square-2','square-3','square-4'],
      gridContainer: true
    }
  }

  render() {
    const fieldStyle = { display: 'grid', border: '1px solid red', gridTemplateAreas: `"square-1 square-2" "square-3 square-4"` };
    return (
      <main className="DisplayField">
        <div className="grass"></div>
        {  this.state.gridContainer ?
            <section className="field-container" style={fieldStyle}>
            {this.state.gridSquares.map(square => <div className={square}>{square}</div>)}
            </section> :
            <section className="field-container">
              {this.state.gridSquares.map(square => <div className={square}>{square}</div>)}
            </section>
        }
      </main>
    );
  }
}

export default DisplayField;