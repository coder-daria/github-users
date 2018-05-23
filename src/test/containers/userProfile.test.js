// Dependencies
import React from "react";
import ReactDOM from "react-dom";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
// Custom
import UserProfile from "../../containers/UserProfile";

import {
  Avatar,
  Content,
  Header,
  IconWrapper,
  Li,
  Link,
  Nickname,
  Property,
  ReposList,
  Value
} from "../../containers/UserProfile/styles";

configure({ adapter: new Adapter() });

describe("UserProfile", () => {
  const repo = {
    name: "repo",
    svn_url: "svn://id/peter_200"
  };
  const userDetails = {
    user: {
      avatar_url: "https://some-url.com",
      name: "Peter",
      login: "Peter_210",
      location: "London, UK",
      email: "peter_210@gmail.com"
    },
    repos: [repo, repo]
  };
  const history = { goBack: jest.fn() };
  const clearLastUserProfile = jest.fn();
  const getUserDetails = jest.fn();

  const wrapper = shallow(
    <UserProfile
      userDetails={userDetails}
      history={history}
      login="Peter_210"
      getUserDetails={getUserDetails}
      clearLastUserProfile={clearLastUserProfile}
    />
  );

  it("should have getUserDetails method", () => {
    expect(getUserDetails.mock.calls.length).toBe(1);
    expect(getUserDetails).toBeCalledWith("Peter_210");
  });
  it("should have handleClick method", () => {
    const handleClick = wrapper.instance().handleClick;
    handleClick();
    expect(clearLastUserProfile.mock.calls.length).toBe(1);
    expect(history.goBack.mock.calls.length).toBe(1);
    expect(history.goBack).toBeCalledWith();
  });

  describe("Header", () => {
    expect(wrapper.find(Header).length).toBe(1);
    it("should render 2 children", () => {
      expect(wrapper.find(Header).children().length).toBe(2);
      expect(wrapper.find(Header).children(IconWrapper)).toBeDefined();
      expect(wrapper.find(Header).children(Nickname)).toBeDefined();
    });
    it("should render Nickname", () => {
      expect(
        wrapper
          .find(Header)
          .children(Nickname)
          .children()
          .text()
      ).toBe("Peter_210");
    });
  });
  it("should render Avatar with props", () => {
    expect(wrapper.find(Avatar).props().src).toBe("https://some-url.com");
  });

  describe("Content", () => {
    expect(wrapper.find(Content).length).toBe(1);
    it("should render 1 <ul/>", () => {
      expect(wrapper.find(Content).children("ul").length).toBe(1);
    });
    it("should render 4 <li/>", () => {
      expect(
        wrapper
          .find(Content)
          .children("ul")
          .children(Li).length
      ).toBe(4);
    });
    it("should render Link with props", () => {
      expect(
        wrapper
          .find(Content)
          .children("ul")
          .children(ReposList)
          .children(Link).length
      ).toBe(2);
    });
  });
});
