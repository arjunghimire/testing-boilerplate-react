import React from "react";
import { shallow, mount, render } from "enzyme";
import Login from "../Login";
import renderer from "react-test-renderer";
describe("Login Component", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<Login />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("should render without throwing an error", () => {
    const wrapper = shallow(<Login />);
    expect(shallow(<Login />).find(".login").length).toBe(1);
  });
  it("renders a email input", () => {
    expect(shallow(<Login />).find("#email").length).toEqual(1);
  });
  it("renders a password input", () => {
    expect(shallow(<Login />).find("#password").length).toEqual(1);
  });

  describe("Email input", () => {
    it("should respond to change event and change the state of the Login Component", () => {
      const wrapper = shallow(<Login />);
      wrapper.find("#email").simulate("change", {
        target: { name: "email", value: "blah@gmail.com" }
      });
      expect(wrapper.state("email")).toEqual("blah@gmail.com");
    });
  });

  describe("Password input", () => {
    it("should respond to change event and change the state of the Login Component", () => {
      const wrapper = shallow(<Login />);
      wrapper
        .find("#password")
        .simulate("change", { target: { name: "password", value: "cats" } });
      expect(wrapper.state("password")).toEqual("cats");
    });
  });
});
