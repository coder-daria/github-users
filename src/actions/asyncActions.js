import api from "../services/api";
import { getUserDetails, getUsers, getSearchedUsers } from "./";

export const fetchSearchedUsers = params => dispatch => {
  api
    .fetchSearchedUsers(params)
    .then(response => {
      dispatch(getSearchedUsers(response.data.items));
    })
    .catch(error => console.log(error));
};


export const fetchUserDetails = params => dispatch => {
  api
    .fetchUser(params)
    .then(user => {
      return api.fetchUserRepos(user.data.repos_url)
      .then(repos => {
        return {
          user: user.data,
          repos: repos.data
        }
      })
    })
    .then(response => {
      dispatch(getUserDetails(response));
    })
    .catch(error => console.log(error));
};

export const fetchUsers = params => dispatch => {
  api
    .fetchUsers(params)
    .then(response => {
      dispatch(getUsers(response.data));
    })
    .catch(error => console.log(error));
};
