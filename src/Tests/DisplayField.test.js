import React from 'react';
import DisplayField from '../Components/DisplayField';
import { shallow } from 'enzyme';

let mockState = {
  gridContainer: true,
  gridSquares: [
    "fieldSquare square-1",
    "fieldSquare square-2",
    "fieldSquare square-3",
    "fieldSquare square-4"
  ]
};

describe('DisplayField', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
        <DisplayField />
      );
  });

  it('should match snapShot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should have default state', () => {
    expect(wrapper.state()).toEqual(mockState);
  })
});