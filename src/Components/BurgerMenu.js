import React, { Component } from 'react';

class BurgerMenu extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }
  reloadPage = () => {
    window.location.reload(true);
  }
  displayAlert = () => {
    alert('Feature Coming Soon');
  }

  render() {
    
    return (
      <aside className="BurgerMenu" onMouseLeave={this.props.mouseLeave}>
        <ul>
          <li onClick={this.reloadPage}>Reset Game</li>
          <li onClick={this.displayAlert}>Skip Prompt</li>
          <li onClick={this.displayAlert}>Save Game</li>
          <li>
            <a
              href="https://developer.mozilla.org/en-US/docs/Web/CSS/grid"
              target="blank"
            >
              Docs: Grid
            </a>
          </li>
          <li>
            <a
              href="https://developer.mozilla.org/en-US/docs/Web/CSS/flex"
              target="blank"
            >
              Docs: Flex
            </a>
          </li>
        </ul>
      </aside>
    );
  }
}

export default BurgerMenu;