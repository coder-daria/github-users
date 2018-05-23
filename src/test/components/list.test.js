// Dependencies
import React from "react";
import ReactDOM from "react-dom";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
// Custom
import List from "../../components/List";
import { Container } from "../../components/List/styles";

configure({ adapter: new Adapter() });

describe("<List />", () => {
  const user = {
    avatar_url: "https://some-url.com",
    history: {},
    key: 1,
    login: "Peter",
    userId: 1
  };
  const wrapper = shallow(<List users={[user, user]} />);
  it("should render Container", () => {
    expect(wrapper.find(Container).length).toBe(1);
    expect(wrapper.find(Container).children()).toHaveLength(2);
  });
});
