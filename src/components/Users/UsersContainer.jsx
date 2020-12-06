import React from "react";
import Users from "./Users";
import loading from "./../../assets/img/loading.gif";
class UsersContainer extends React.Component {
  state = {
    users: [],
    filterUsers: [],
    sortArr: false,
    inputValue: "",
    modalWindowState: false,
    inputValueId: "",
    inputValueFirstName: "",
    inputValueLastName: "",
    inputValueEmail: "",
    inputValuePhone: "",
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
        this.setState({
          users: data.map((item) => {
            return {
              ...item,
              modalWindowState: false,
            };
          }),
        });
      });
  }

  modalWindowStateChange = (array, value, id) => {
    let copyUsers = array.slice();
    let findUser = copyUsers.find((item) => item.id === id);
    if (findUser !== undefined) {
      findUser.modalWindowState = value;
    }
    this.setState({
      users: copyUsers,
    });
  };

  changeArr = (newArr) => {
    this.setState({ users: newArr });
  };

  onChangeFilterUsers = (newArr) => {
    if (this.state.inputValue === "") {
      this.setState({ filterUsers: [] });
    } else {
      this.setState({ filterUsers: newArr });
    }
  };

  changeCkickCount = (param) => {
    this.setState({ sortArr: param });
  };

  onChangeInputValue = (value) => {
    this.setState({ inputValue: value.trim() });
  };

  changeModaleWindowState = (field, value) => {
    this.setState({ [field]: value });
  };

  onChangeValueInModaleWindow = (field, value) => {
    if (field === "inputValueId") {
      this.setState({ [field]: value });
    } else {
      this.setState({ [field]: value.trim() });
    }
  };

  addNewUser = (user) => {
    let arr = this.state.users;
    console.log(user);
    let newArr = arr.slice();
    newArr.splice(0, 0, user);
    this.setState({
      users: newArr,
      inputValueId: "",
      inputValueFirstName: "",
      inputValueLastName: "",
      inputValueEmail: "",
      inputValuePhone: "",
    });
  };

  render() {
    return this.state.users.length !== 0 ? (
      <div>
        <Users
          addNewUser={this.addNewUser}
          state={this.state}
          filterUsers={this.state.filterUsers}
          changeArr={this.changeArr}
          changeCkickCount={this.changeCkickCount}
          sortArr={this.state.sortArr}
          users={this.state.users}
          inputValue={this.state.inputValue}
          onChangeInputValue={this.onChangeInputValue}
          onChangeFilterUsers={this.onChangeFilterUsers}
          changeModaleWindowState={this.changeModaleWindowState}
          onChangeValueInModaleWindow={this.onChangeValueInModaleWindow}
          modalWindowStateChange={this.modalWindowStateChange}
          handlePageChange={this.handlePageChange}
        />
      </div>
    ) : (
      <img src={loading} alt="" />
    );
  }
}

export default UsersContainer;
