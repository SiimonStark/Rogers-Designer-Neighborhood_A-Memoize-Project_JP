import React from 'react';
import PlayerCommands from '../Components/PlayerCommands';
import { shallow } from 'enzyme';
import PropTypes from "prop-types";

let updateInputsMock = jest.fn();

describe('PlayerCommands', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<PlayerCommands updateInputs={updateInputsMock} />);
  });

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it.skip('should have props method to pass on', () => {
    console.log(wrapper.props('updateInputs'))
    expect(wrapper.props()).toEqual('updateInputs');
  });
});