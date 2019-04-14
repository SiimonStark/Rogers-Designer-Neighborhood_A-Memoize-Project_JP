import React, { Component } from 'react';

class BurgerMenu extends Component {
  render() {
    return (
      <aside className="BurgerMenu">
        <ul>
          <li>Reset Game</li>
          <li>Skip Prompt</li>
          <li>Save Progress</li>
          <li>Docs: Grid</li>
          <li>Docs: Flex</li>
        </ul>
      </aside>
    );
  }
}

export default BurgerMenu;