import axios from "axios";

const api = {
  fetchUsers: () => axios.get("https://api.github.com/users?since=135"),
  fetchUser: login => axios.get(`https://api.github.com/users/${login}`),
  fetchUserRepos: url => axios.get(url),
  fetchSearchedUsers: login =>
    axios.get(
      `https://api.github.com/search/users?q=${login}+in:login&per_page=10`
    )
};

export default api;
