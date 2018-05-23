// Dependencies
import React, { Component } from "react";
import PropTypes from "prop-types";
// Custom
import {
  Avatar,
  Container,
  IconWrapper,
  Nickname,
} from "./styles";

class User extends Component {
  handleClick = () => {
    this.props.history.push(`/users/${this.props.login}`);
  };

  render() {
    return (
      <Container onClick={this.handleClick}>
        <Avatar src={this.props.avatar_url} />
        <Nickname>{this.props.login}</Nickname>
        <IconWrapper iconName="arrowRight" size={32} />
      </Container>
    );
  }
}

User.propTypes = {
  avatar_url: PropTypes.string.isRequired,
  history: PropTypes.object.isRequired,
  login: PropTypes.string.isRequired,
};

export default User;
