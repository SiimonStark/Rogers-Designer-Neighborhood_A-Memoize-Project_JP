import React from "react";
import GridInput from "../Components/GridInput";
import { shallow } from "enzyme";

let updateInputsMock = jest.fn();
let mockState = {
  gridField0: { gridRule: "", gridValue: "" },
  inputCounter: 0,
  inputMapList: [0]
};

describe("Gridnput", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<GridInput updateInputs={updateInputsMock} />);
  });

  it("should match snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should have default state", () => {
    expect(wrapper.state()).toEqual(mockState);
  });

  it.skip("when input is updated, it should invoke handleGridChange()", () => {
    const mockEvent = { target: { value: "d" } };
    wrapper.instance().handleGridChange(mockEvent);
  });
  
  it('should addInput field onClick of "+" button', () => {
    expect(wrapper.state('inputCounter')).toEqual(0)
    wrapper.find("#addInput").simulate("click");
    wrapper.find("#addInput").simulate("click");
    expect(wrapper.state("inputCounter")).toEqual(2);
    expect(wrapper.state("inputMapList").length).toEqual(3);
    expect(wrapper.find("div").length).toEqual(3);
    expect(wrapper).toMatchSnapshot();
  });
});
