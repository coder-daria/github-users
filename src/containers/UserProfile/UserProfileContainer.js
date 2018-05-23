// Details
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
// Custom
import UserProfile from "./";
import { fetchUserDetails } from "../../actions/asyncActions";
import { clearLastUserProfile } from "../../actions";

const mapStateToProps = (state, ownProps) => {
  const login = ownProps.match.params.login;
  return {
    userDetails: state.userDetails,
    login
  };
};

const mapDispatchToProps = dispatch => {
  return {
    clearLastUserProfile: () => dispatch(clearLastUserProfile()),
    getUserDetails: userId => dispatch(fetchUserDetails(userId))
  };
};

const UserProfileContainer = connect(mapStateToProps, mapDispatchToProps)(
  UserProfile
);

const UserDetailsWithRouter = withRouter(UserProfileContainer);

export default UserDetailsWithRouter;
