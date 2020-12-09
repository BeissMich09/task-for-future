import React from "react";
import Users from "./Users";
import { connect } from "react-redux";
import {
  addNewUser,
  changeIsFetching,
  changeModalWindowState,
  changeSortArrayState,
  getUsers,
} from "../../redux/redusers/user-reducer";
class UsersContainer extends React.Component {
  dataRequest = (value) => {
    fetch(
      `http://www.filltext.com/?rows=${value}&id={number|1000}&firstName={firstName}&delay=3&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}`
    )
      .then((res) => res.json())
      .then((data) => {
        this.props.getUsers(data);
        this.props.changeIsFetching(false);
      });
  };

  sortArray = (array, field) => {
    let newArray;
    if (this.props.sortArrayState) {
      newArray = array.slice().sort(function (a, b) {
        console.log("сортировка по фолс");
        if (a[field] > b[field]) return -1;
        if (a[field] < b[field]) return 1;
        return 0;
      });
    } else {
      newArray = array.slice().sort(function (a, b) {
        if (a[field] > b[field]) return 1;
        if (a[field] < b[field]) return -1;
        return 0;
      });
    }
    return newArray;
  };

  render() {
    return (
      <div>
        <div>
          <button
            onClick={() => {
              this.dataRequest(50);
              this.props.changeIsFetching(true);
            }}
          >
            Запросить 50 пользователей
          </button>
          <button
            onClick={() => {
              this.dataRequest(1000);
              this.props.changeIsFetching(true);
            }}
          >
            Запросить 1000 пользователей
          </button>
        </div>
        <Users
          sortArray={this.sortArray}
          filterUsers={this.props.filterUsers}
          addNewUser={this.addNewUser}
          sortArrayState={this.props.sortArrayState}
          changeSortArrayState={this.props.changeSortArrayState}
          users={this.props.users}
          onChangeInputValue={this.onChangeInputValue}
          modalWindowState={this.props.modalWindowState}
          changeModalWindowState={this.props.changeModalWindowState}
          isFetching={this.props.isFetching}
        />
      </div>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    users: state.usersReducer.users,
    sortArrayState: state.usersReducer.sortArrayState,
    modalWindowState: state.usersReducer.modalWindowState,
    filterUsers: state.usersReducer.filterUsers,
    isFetching: state.usersReducer.isFetching,
  };
};

export default connect(mapStateToProps, {
  getUsers,
  changeSortArrayState,
  addNewUser,
  changeModalWindowState,
  changeIsFetching,
})(UsersContainer);
