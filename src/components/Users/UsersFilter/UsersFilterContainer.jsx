import React from "react";
import { connect } from "react-redux";
import {
  changeSearchInputValue,
  getFilterUsers,
  getUsers,
} from "../../../redux/redusers/user-reducer";
import UsersFilter from "./UsersFilter";

class UsersFilterContainer extends React.Component {
  arrFilter = (value) => {
    let result = this.props.users.filter(function (item) {
      return (
        item.firstName.trim().includes(value.trim()) ||
        item.lastName.trim().includes(value.trim()) ||
        item.email.trim().includes(value.trim()) ||
        item.phone.trim().includes(value.trim()) ||
        item.id.toString().includes(value.trim())
      );
    });
    return result;
  };
  render() {
    return (
      <UsersFilter
        arrFilter={this.arrFilter}
        users={this.props.users}
        filterUsers={this.props.filterUsers}
        searchInputValue={this.props.searchInputValue}
        changeSearchInputValue={this.props.changeSearchInputValue}
        getFilterUsers={this.props.getFilterUsers}
      />
    );
  }
}

let mapStateToProps = (state) => {
  return {
    filterUsers: state.usersReducer.usersFilter,
    users: state.usersReducer.users,
    searchInputValue: state.usersReducer.searchInputValue,
  };
};

export default connect(mapStateToProps, {
  getUsers,
  getFilterUsers,
  changeSearchInputValue,
})(UsersFilterContainer);
