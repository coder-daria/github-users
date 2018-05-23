// Dependencies
import React from "react";
import PropTypes from "prop-types";
// Custom
import { Container, IconWrapper, Input } from "./styles";

const Search = (props) => (
  <Container>
    <IconWrapper iconName="search" size={32} />
    <Input
      type="text"
      placeholder="Search by login"
      onChange={props.searchUsers}
    />
  </Container>
);

Search.propTypes = {
  searchUsers: PropTypes.func.isRequired
};

export default Search;
