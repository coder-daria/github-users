// Dependencies
import React from "react";
import ReactDOM from "react-dom";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
// Custom
import MainPage from "../../containers/MainPage";
import Search from "../../components/Search";
import List from "../../components/List";

configure({ adapter: new Adapter() });

describe("<MainPage />", () => {
  const user = {
    avatar_url: "https://some-url.com",
    history: {},
    key: 1,
    login: "Peter",
    userId: 1
  };
  const users = [user, user];
  const searchUsers = jest.fn();
  const history = { push: jest.fn() };

  const wrapper = shallow(
    <MainPage 
      searchUsers={searchUsers}
      users={users}
      history={history} 
    />
  );

  it("should render Search", () => {
    expect(wrapper.find(Search).length).toBe(1);
    expect(wrapper.find(Search).props().searchUsers).toBe(searchUsers);
  });
  it("should render List", () => {
    expect(wrapper.find(List).length).toBe(1);
    expect(wrapper.find(List).props().users).toEqual(users);
    expect(wrapper.find(List).props().history).toBe(history);
  });
});
