import {
  CLEAR_LAST_USER_PROFILE,
  GET_USERS,
  GET_USER_DETAILS,
  GET_SEARCHED_USERS
} from "../actions";

const initialState = {
  users: [],
  userDetails: {}
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CLEAR_LAST_USER_PROFILE:
      return Object.assign({}, state, { userDetails: {} });
    case GET_USERS:
      return Object.assign({}, state, { users: action.content });
    case GET_USER_DETAILS:
      return Object.assign({}, state, { userDetails: action.content });
    case GET_SEARCHED_USERS:
      return Object.assign({}, state, { users: action.content });
    default:
      return state;
  }
};

export default reducer;
