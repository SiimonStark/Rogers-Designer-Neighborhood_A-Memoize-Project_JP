import React from 'react';
import ReactDOM from 'react-dom';
import App from '../Components/App';
import { shallow } from "enzyme";

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

const defaultState = {
  playerInputs: [{ gridInputs: [] }, { flexInputs: [] }],
  promptAnswers: []
};

describe('App', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it('should match screenshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should have default state', () => {
    expect(wrapper.state()).toEqual(defaultState);
  });
})