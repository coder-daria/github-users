export const CLEAR_LAST_USER_PROFILE = "CLEAR_LAST_USER_PROFILE";
export const GET_USERS = "GET_USERS";
export const GET_USER_DETAILS = "GET_USER_DETAILS";
export const GET_SEARCHED_USERS = "GET_SEARCHED_USERS";

export const clearLastUserProfile = users => {
  return { type: CLEAR_LAST_USER_PROFILE};
};

export const getUsers = users => {
  return { type: GET_USERS, content: users };
};

export const getUserDetails = login => {
  return { type: GET_USER_DETAILS, content: login };
};

export const getSearchedUsers = login => {
  return { type: GET_SEARCHED_USERS, content: login };
};
