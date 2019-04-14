import React, { Component } from 'react';
// import BurgerMenu from './BurgerMenu';

class DisplayField extends Component {
  constructor() {
    super()
    this.state = {
      gridSquares: ['square-1']
    }
  }

  render() {
    return (
      <main className="DisplayField">
        <div className="grass"></div>
        <section className="field-container">
          {this.state.gridSquares.map(square => <div className={square}>{square}</div>)}
        </section>
      </main>
    );
  }
}

export default DisplayField;