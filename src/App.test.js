import React from "react";
import ReactDOM from "react-dom";
import { AppContainer } from "./App";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

describe("<App />", () => {
  it("should render App", () => {
    const fakeGetUsers = jest.fn();
    const wrapper = shallow(<AppContainer getUsers={fakeGetUsers} />);
    expect(fakeGetUsers.mock.calls.length).toBe(1);
  });
});
