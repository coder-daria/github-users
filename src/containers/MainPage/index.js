// Dependencies
import React from "react";
import PropTypes from "prop-types";
// Custom
import List from "../../components/List";
import Search from "../../components/Search";

const MainPage = (props) => (
  <div>
    <Search 
      searchUsers={props.searchUsers} 
    />
    <List 
      users={props.users} 
      history={props.history} 
    />
  </div>
);

MainPage.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      avatar_url: PropTypes.string,
      login: PropTypes.string,
      id: PropTypes.number
    })
  ),
  history: PropTypes.object.isRequired,
  searchUsers: PropTypes.func.isRequired
};

export default MainPage;
