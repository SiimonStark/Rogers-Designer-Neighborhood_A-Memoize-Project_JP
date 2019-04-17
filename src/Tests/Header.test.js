import React from 'react';
import Header from '../Components/Header';
import BurgerMenu from '../Components/BurgerMenu';
import { shallow } from 'enzyme';

describe('Header', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Header />)
  });

  it('should match Snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should match conditional render Snapshot', () => {
    wrapper.find('button').simulate('click');
    expect(wrapper).toMatchSnapshot();
  });

  it('should have default state', () => {
    expect(wrapper.state('showBurgerMenu')).toEqual(false);
  });

  it('should toggle showBurgerMenu onClick &  showBurgerMenu() is invoked', () => {
    expect(wrapper.state("showBurgerMenu")).toEqual(false);
    wrapper.find('button').simulate('click');
    expect(wrapper.state("showBurgerMenu")).toEqual(true);
    wrapper.find("button").simulate("click");
    expect(wrapper.state("showBurgerMenu")).toEqual(false);
  });

  it('should toggle showBurgerMenu when mouseLeave() is invoked', () => {
    let burger = shallow(<BurgerMenu
      mouseLeave={wrapper.mouseLeave} />);
    
    expect(wrapper.state("showBurgerMenu")).toEqual(false);
    burger.find("aside").simulate("mouseLeave");
    wrapper.instance().showBurgerMenu();
    expect(wrapper.state("showBurgerMenu")).toEqual(true);
    burger.find("aside").simulate("mouseLeave");
    wrapper.instance().showBurgerMenu();
    expect(wrapper.state("showBurgerMenu")).toEqual(false);
  });
})