import { createStore } from "redux";
// Custom
import reducer from "../../reducer/reducer";
import { getUsers, getUserDetails, getSearchedUsers } from "../../actions";

let initialState;
let store;

const user = {
  avatar_url: "https://some-url.com",
  name: "Peter",
  login: "Peter_210",
  location: "London, UK",
  email: "peter_210@gmail.com"
};
const users = [user, user];

beforeEach(() => {
  initialState = {
    users: [],
    userDetails: {}
  };
  store = createStore(reducer, initialState);
});

it("handles GET_USERS", () => {
  let action = getUsers(users);
  let newState = reducer(initialState, action);

  expect(newState).not.toEqual(initialState);
  expect(newState.users).toEqual(users);
  expect(newState.users[0]).toEqual(user);
});

it("handles GET_USER_DETAILS", () => {
  let action = getUserDetails("Peter_210");
  let newState = reducer(initialState, action);

  expect(newState).not.toEqual(initialState);
});

xit("handles GET_SEARCHED_USERS", () => {
  let action = getSearchedUsers("Peter_210");
  let newState = reducer(initialState, action);

  expect(newState).not.toEqual(initialState);
  expect(newState.users[0]).toEqual(user);
});
