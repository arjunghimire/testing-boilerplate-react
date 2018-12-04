import React from "react";
import { shallow } from "enzyme";
import Counter from "../Counter";
import renderer from "react-test-renderer";

describe("Counter Component", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<Counter />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("should render without throwing an error", () => {
    const wrapper = shallow(<Counter />);
    const countState = wrapper.state().counter;
    expect(countState).toEqual(0);
  });

  it("should respond to change event and increase value by 1", () => {
    const wrapper = shallow(<Counter />);
    wrapper.find("button.increment").simulate("click");
    const text = wrapper.find(".counter").text();
    expect(text).toEqual("Count: 1");
  });
  it("should respond to change event and decrease value by 1", () => {
    const wrapper = shallow(<Counter />);
    wrapper.find("button.decrement").simulate("click");
    const text = wrapper.find(".counter").text();
    expect(text).toEqual("Count: -1");
  });
});
