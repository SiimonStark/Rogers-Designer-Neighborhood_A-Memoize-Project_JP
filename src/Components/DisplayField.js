import React, { Component } from 'react';
// import BurgerMenu from './BurgerMenu';

class DisplayField extends Component {
  constructor() {
    super()
    this.state = {
      gridContainer: true,
      gridSquares: [
        "fieldSquare square-1",
        "fieldSquare square-2",
        "fieldSquare square-3",
        "fieldSquare square-4"
      ]
    };
  }

  render() {
    const fieldStyle = { display: 'grid', gridTemplateAreas: `"square-1 square-2" "square-3 square-4"` };
    
    return (
      <main className="DisplayField">
        <div className="grass" />
        <div className="road1--container">
          <div className="road1 positionRoad"></div>
        </div>
        <div className="road2--container">
          <div className="road2 positionRoad"></div>
        </div>
        {this.state.gridContainer ? (
          <section className="field-container" style={fieldStyle}>
            {this.state.gridSquares.map((square, ind) => (
              <div className={square}>
                <p>{'S: ' + [ind + 1]}</p>
                <div className="road--container">
                  <div className="road positionRoad" />
                </div>
                <div className="tree--container">
                  <div className="tree1 positionTree1" />
                  <div className="tree2 positionTree2" />
                  <div className="tree3 positionTree3" />
                </div>
                <div className="house--container">
                  <div className="house positionHouse" />
                </div>
              </div>
            ))}
          </section>
        ) : (
          <section className="field-container">
            {this.state.gridSquares.map(square => (
              <div className={square}>{square}</div>
            ))}
          </section>
        )}
      </main>
    );
  }
}

export default DisplayField;