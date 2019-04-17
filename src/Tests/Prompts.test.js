import React from 'react';
import Prompts from '../Components/Prompts';
import { shallow } from 'enzyme';

let updatePromptAnsMock = jest.fn();
let mockPlayerInputs = [
  {gridInputs: []},
  {flexInputs: []}
];
let mockPrompts = [
  {
    question: "# 1: Grid the field 2x2, for 4 total squares",
    answers: {
      display: "grid",
      gridTemplateAreas: `"square-1 square-2" "square-3 square-4"`
    },
    correctAns: false
  },
  {
    question: "# 2: Align the Roads to the edge of the grid",
    answers: {
      display: "grid",
      gridTemplateAreas: `"square-1 square-2" "square-3 square-4"`
    },
    correctAns: false
  },
  {
    question:
      "# 3: Give space around the trees & Align them to the left of each grid",
    answers: {
      display: "grid",
      gridTemplateAreas: `"square-1 square-2" "square-3 square-4"`
    },
    correctAns: false
  },
  {
    question: "# 4: Center the house in the grid square",
    answers: {
      display: "grid",
      gridTemplateAreas: `"square-1 square-2" "square-3 square-4"`
    },
    correctAns: false
  },
  {
    question: "No more Prompts!!",
    answers: undefined,
    correctAns: undefined
  }
];

describe('Prompts', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <Prompts
        playerInputs={mockPlayerInputs}
        updatePromptAns={updatePromptAnsMock}
      />
    );
  });

  it("should match Snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should match conditional Snapshot', () => {
    wrapper.state({showButtow: false})
    expect(wrapper).toMatchSnapshot();
  });

  it('should have default state', () => {
    expect(wrapper.state()).toEqual({
      prompts: mockPrompts,
      currentPrompt: 0,
      showButton: true
    });
  });

  it.skip('should onClick of the button invoke checkPrompts', () => {
    let mockIndex = wrapper.state('currentPrompt');
    mockPlayerInputs[0].gridInputs.push(
        {gridField0:{gridRule: '', gridValue: ''}}
      );
    console.log('test', mockPlayerInputs);

    wrapper.instance().checkPrompt();
    wrapper.instance().compareGrid(mockIndex);
    expect(wrapper.state()).toEqual({
      prompts: [
        {
          question: "# 1: Grid the field 2x2, for 4 total squares",
          answers: {
            display: "grid",
            gridTemplateAreas: `"square-1 square-2" "square-3 square-4"`
          },
          correctAns: true
        }
      ]
    });
  });

  it.skip('should onClick of the button invoke checkPrompts', () => {
    wrapper.state({currentPrompt: 1})
    let mockIndex = wrapper.state('currentPrompt');
    mockPlayerInputs[1].flexInputs.push(
        {flexField0:{flexRule: '', flexValue: ''}}
      );
    console.log('test', mockPlayerInputs);

    wrapper.instance().checkPrompt();
    wrapper.instance().compareFlex(mockIndex);
    expect(wrapper.state()).toEqual({
      prompts: [
        {
          question: "# 2: Align the Roads to the edge of the grid",
          answers: {
            display: "grid",
            gridTemplateAreas: `"square-1 square-2" "square-3 square-4"`
          },
          correctAns: true
        }
      ]
    });
  });

  it('should invoke updateCorrectPrompts() if compareGrid() has been invoked', () => {
    let mockIndex = wrapper.state("currentPrompt");
    wrapper.instance().compareGrid(mockIndex);
    wrapper.instance().updateCorrectPrompt();
    expect(updatePromptAnsMock).toHaveBeenCalled();
  });
});