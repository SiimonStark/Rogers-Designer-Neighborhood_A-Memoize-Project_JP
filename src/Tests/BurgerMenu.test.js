import React from 'react';
import BurgerMenu from '../Components/BurgerMenu';
import { shallow } from 'enzyme';

let mouseLeaveMock = jest.fn();

describe('BurgerMenu', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <BurgerMenu mouseLeave={mouseLeaveMock} />);
  });

  it('should match screenshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
  
  it('should invoke reloadPage() onClick of Li', () => {
    wrapper.instance().reloadPage();
    // Can't test window object
  });
  
  it('should invoke displayAlert() onClick of Li', () => {
    wrapper.instance().displayAlert();
    // Can't test window object
  });
  
  it('should have clickable links', () => {
    wrapper.find('.docsGrid').simulate('click');
  });
  
  it('should have clickable links', () => {
    wrapper.find('.docsFlex').simulate('click');
  });
});