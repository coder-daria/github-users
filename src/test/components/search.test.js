// Dependencies
import React from "react";
import ReactDOM from "react-dom";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
// Custom
import Search from "../../components/Search";
import { Container, IconWrapper, Input } from "../../components/Search/styles";

configure({ adapter: new Adapter() });

describe("<Search />", () => {
  const searchUsers = jest.fn();
  const wrapper = shallow(<Search searchUsers={searchUsers} />);

  it("should render Container", () => {
    expect(wrapper.find(Container).length).toBe(1);
    expect(wrapper.find(Container).children()).toHaveLength(2);
  });
  it("should render IconWrapper", () => {
    expect(wrapper.find(IconWrapper)).toHaveLength(1);
    expect(wrapper.find(IconWrapper).props().iconName).toBe("search");
  });
  it("should render Input", () => {
    expect(wrapper.find(Input).length).toBe(1);
    expect(wrapper.find(Input).props().type).toBe("text");
    expect(wrapper.find(Input).props().onChange).toBe(searchUsers);
  });
});
