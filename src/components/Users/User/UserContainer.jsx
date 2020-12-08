import React from "react";
import { connect } from "react-redux";
import { personalInfoStateChange } from "../../../redux/redusers/user-reducer";
import User from "./User";

class UserContainer extends React.Component {
  render() {
    return (
      <User
        users={this.props.users}
        personalInfoStateChange={this.props.personalInfoStateChange}
        user={this.props.user}
        allUsers={this.props.allUsers}
      />
    );
  }
}
let mapStateToProps = (state) => {
  return {
    allUsers: state.usersReducer.users,
  };
};
export default connect(mapStateToProps, { personalInfoStateChange })(
  UserContainer
);
