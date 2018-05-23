// Dependencies
import * as React from "react";
import PropTypes from "prop-types";
// Custom
import UserContainer from "../User/UserContainer";
import { Container } from "./styles";

const List = (props) => (
  <Container>
    {props.users.map((user, index) => {
      return (
        <UserContainer
          avatar_url={user.avatar_url}
          history={props.history}
          key={index}
          login={user.login}
          userId={user.id}
        />
      );
    })}
  </Container>
);

List.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      avatar_url: PropTypes.string.isRequired,
      login: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired
    })
  ),
  history: PropTypes.object.isRequired
};

export default List;
