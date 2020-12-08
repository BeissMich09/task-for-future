import React from "react";
import Users from "./Users";
import loading from "./../../assets/img/loading.gif";
import { connect } from "react-redux";
import {
  addNewUser,
  changeModalWindowState,
  changeSortArrayState,
  getUsers,
} from "../../redux/redusers/user-reducer";
class UsersContainer extends React.Component {
  state = {
    activePage: 15,
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
  };
  componentDidMount() {
    fetch(
      "http://www.filltext.com/?rows=15&id={number|1000}&firstName={firstName}&delay=3&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}"
    )
      .then((res) => res.json())
      .then((data) => {
        this.props.getUsers(data);
      });
  }

  modalWindowStateChange = (array, value, id) => {
    let copyUsers = array.slice();
    let findUser = copyUsers.find((item) => item.id === id);
    if (findUser !== undefined) {
      findUser.personalInfo = value;
    }
    this.setState({
      users: copyUsers,
    });
  };

  onChangeInputValue = (value) => {
    this.setState({ inputValue: value.trim() });
  };

  sortArray = (array, field) => {
    let newArray;
    console.log("props.sortArrayState", this.props.sortArrayState);
    if (this.props.sortArrayState) {
      newArray = array.slice().sort(function (a, b) {
        console.log("сортировка по фолс");
        if (a[field] > b[field]) return -1;
        if (a[field] < b[field]) return 1;
        return 0;
      });
    } else {
      newArray = array.slice().sort(function (a, b) {
        console.log("сортировка по тру");
        if (a[field] > b[field]) return 1;
        if (a[field] < b[field]) return -1;
        return 0;
      });
    }
    return newArray;
  };

  render() {
    return this.props.users.length !== 0 ? (
      <div>
        <Users
          sortArray={this.sortArray}
          filterUsers={this.props.filterUsers}
          addNewUser={this.addNewUser}
          sortArrayState={this.props.sortArrayState}
          changeSortArrayState={this.props.changeSortArrayState}
          users={this.props.users}
          inputValue={this.state.inputValue}
          onChangeInputValue={this.onChangeInputValue}
          modalWindowState={this.props.modalWindowState}
          changeModalWindowState={this.props.changeModalWindowState}
        />
      </div>
    ) : (
      <img src={loading} alt="" />
    );
  }
}

let mapStateToProps = (state) => {
  // console.log("state in usersconteiner", state.usersReducer.sortArrayState);
  return {
    users: state.usersReducer.users,
    sortArrayState: state.usersReducer.sortArrayState,
    modalWindowState: state.usersReducer.modalWindowState,
    filterUsers: state.usersReducer.filterUsers,
  };
};

export default connect(mapStateToProps, {
  getUsers,
  changeSortArrayState,
  addNewUser,
  changeModalWindowState,
})(UsersContainer);
