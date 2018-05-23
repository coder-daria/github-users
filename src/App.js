//Dependencies
import React, { Component } from "react";
import { Router, Route, Switch } from "react-router-dom";
import createBrowserHistory from "history/createBrowserHistory";
import { connect } from "react-redux";
//Custom
import MainPage from "./containers/MainPage";
import UserProfileContainer from "./containers/UserProfile/UserProfileContainer";
import { fetchSearchedUsers, fetchUsers } from "./actions/asyncActions";

const history = createBrowserHistory();

export class AppContainer extends Component {
  componentDidMount() {
    const { getUsers } = this.props;
    getUsers();
  }

  searchUsers = event => {
    const userName = event.target.value;
    if (userName.length > 0) {
      const { getSearchedUsers } = this.props;
      getSearchedUsers(userName);
    } else {
      const { getUsers } = this.props;
      getUsers();
    }
  };

  render() {
    const users = this.props.users;
    return (
      <div>
        <Router history={history}>
          <Switch>
            <Route
              exact
              path="/"
              render={routerProps => (
                <MainPage
                  {...routerProps}
                  searchUsers={this.searchUsers}
                  users={users}
                />
              )}
            />
            <Route
              path="/users/:login"
              render={routerProps => <UserProfileContainer {...routerProps} />}
            />
          </Switch>
        </Router>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    users: state.users
  };
};

const mapDispatchToProps = {
  getUsers: fetchUsers,
  getSearchedUsers: fetchSearchedUsers
};

const App = connect(mapStateToProps, mapDispatchToProps)(AppContainer);

export default App;
