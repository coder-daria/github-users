// Details
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
// Custom
import User from "./";
import { fetchUserDetails } from "../../actions/asyncActions";

const mapDispatchToProps = dispatch => {
  return {
    onUserClick: login => dispatch(fetchUserDetails(login))
  };
};

const UserContainer = connect(null, mapDispatchToProps)(User);

const UserWithRouter = withRouter(UserContainer);

export default UserWithRouter;
