import React, { Component } from 'react';
import BurgerMenu from './BurgerMenu';

class Header extends Component {
  constructor() {
    super()
    this.state = {
      showBurgerMenu: false
    }
  }
  showBurgerMenu = () => {
    this.state.showBurgerMenu
      ? this.setState({showBurgerMenu: false})
      : this.setState({showBurgerMenu: true});
  }
  render() {
    let menu;
    this.state.showBurgerMenu ? menu = <BurgerMenu/> : menu = null;
    return (
      <header>
      <div className="sky"></div>
      <div className="logo">
      </div>
        <nav>
          <button onClick={this.showBurgerMenu}>MENU</button>
          {menu}
        </nav>
      </header>
    );
  }
}

export default Header;