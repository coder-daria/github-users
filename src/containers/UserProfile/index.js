// Dependencies
import React, { Component } from "react";
import PropTypes from "prop-types";
// Custom
import {
  Avatar,
  Content,
  Header,
  IconWrapper,
  Li,
  Link,
  Nickname,
  Property,
  ReposList,
  Value
} from "./styles";
import Skeleton from "../../components/Skeleton";

class UserProfile extends Component {
  handleClick = () => {
    this.props.history.goBack();
    this.props.clearLastUserProfile();
  };

  componentDidMount() {
    const { getUserDetails, login } = this.props;
    getUserDetails(login);
  }

  render() {
    const data = this.props.userDetails;
    const user = data.user || {};
    const repos = data.repos || [];

    return (
      <div>
        {!this.props.userDetails.user && <Skeleton />}
        {this.props.userDetails.user && (
          <div>
            <Header>
              <IconWrapper
                iconName="arrowLeft"
                size={32}
                onClick={this.handleClick}
              />
              <Nickname>{user.login}</Nickname>
            </Header>
            <Avatar src={user.avatar_url} />
            <Content>
              <ul>
                <Li>
                  <Property>Name</Property>
                  <Value>{user.name}</Value>
                </Li>
                <Li>
                  <Property>From</Property>
                  <Value>{user.location ? user.location : "-"}</Value>
                </Li>
                <Li>
                  <Property>Email</Property>
                  <Value>{user.email ? user.email : "-"}</Value>
                </Li>
                <Li>
                  <Property>Repositories</Property>
                  <Value>{repos.length}</Value>
                </Li>
                <ReposList>
                  {repos.map((repo, index) => {
                    return (
                      <Link href={repo.svn_url} key={index}>
                        <IconWrapper iconName="github" size={16} />
                        {repo.name}
                      </Link>
                    );
                  })}
                </ReposList>
              </ul>
            </Content>
          </div>
        )}
      </div>
    );
  }
}

UserProfile.propTypes = {
  userDetails: PropTypes.object.isRequired,
  login: PropTypes.string.isRequired,
  getUserDetails: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired
};

export default UserProfile;
