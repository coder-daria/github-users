// Dependencies
import React from "react";
import ReactDOM from "react-dom";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
// Custom
import User from "../../components/User";
import {
  Avatar,
  Container,
  IconWrapper,
  Nickname
} from "../../components/User/styles";

configure({ adapter: new Adapter() });

describe("<User />", () => {
  const history = { push: jest.fn() };
  const user = "Sam";
  const wrapper = shallow(
    <User avatar_url="https://some-url.com" history={history} login={user} />
  );

  it("should have handleClick method", () => {
    wrapper.instance().handleClick();
    expect(history.push.mock.calls.length).toBe(1);
    expect(history.push).toBeCalledWith(`/users/${user}`);
  });
  it("should render Container", () => {
    expect(wrapper.find(Container).length).toBe(1);
    expect(wrapper.find(Container).props().onClick).toBe(
      wrapper.instance().handleClick
    );
  });
  it("should render Avatar", () => {
    expect(wrapper.find(Avatar).length).toBe(1);
    expect(wrapper.find(Avatar).props().src).toBe("https://some-url.com");
  });
  it("should render Nickname", () => {
    expect(wrapper.find(Nickname).length).toBe(1);
    expect(
      wrapper
        .find(Nickname)
        .children()
        .text()
    ).toBe("Sam");
  });
  it("should render IconWrapper", () => {
    expect(wrapper.find(IconWrapper).length).toBe(1);
    expect(wrapper.find(IconWrapper).props().iconName).toBe("arrowRight");
  });
});
