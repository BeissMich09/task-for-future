import React from "react";
import Pagination from "react-js-pagination";
import Paginator from "../Paginator/Paginator";
import ModalWindow from "./ModalWindow/ModalWindow";
import User from "./User/User";
import style from "./Users.module.css";
import UsersFilter from "./UsersFilter/UsersFilter";

const Users = (props) => {
  let sortArr = props.sortArr;

  let elemUser =
    props.filterUsers.length === 0
      ? props.users.map((user) => {
          return (
            <User
              modalWindowStateChange={props.modalWindowStateChange}
              changeModaleWindowState={props.changeModaleWindowState}
              key={user.id}
              users={props.state.users}
              user={user}
              addInfoState={props.state.addInfoState}
            />
          );
        })
      : props.filterUsers.map((user) => {
          return (
            <User
              changeModaleWindowState={props.changeModaleWindowState}
              key={user.id}
              user={user}
              modalWindowStateChange={props.modalWindowStateChange}
              users={props.state.filterUsers}
              addInfoState={props.state.addInfoState}
            />
          );
        });
  let newArray;
  const sortArray = (array, field) => {
    console.log(field);
    if (sortArr) {
      sortArr = false;
      props.changeCkickCount(sortArr);
      newArray = array.slice().sort(function (a, b) {
        if (a[field] > b[field]) return -1;
        if (a[field] < b[field]) return 1;
        return 0;
      });
    } else {
      sortArr = true;
      props.changeCkickCount(sortArr);
      newArray = array.slice().sort(function (a, b) {
        if (a[field] > b[field]) return 1;
        if (a[field] < b[field]) return -1;
        return 0;
      });
    }
    return newArray;
  };

  const openCloseModalWindow = () => {
    if (props.state.modalWindowState) {
      return false;
    } else {
      return true;
    }
  };

  return (
    <div className={style.item}>
      <Paginator
        totalItemsCount={props.state.users.length}
        pageSize={10}
        currentPage={1}
        // onPageChange={onPageChanged}
      />
      {/* <Pagination
        activePage={props.state.activePage}
        itemsCountPerPage={50}
        totalItemsCount={props.state.users.length}
        pageRangeDisplayed={5}
        onChange={props.handlePageChange.bind(this)}
      /> */}
      <UsersFilter
        onChangeFilterUsers={props.onChangeFilterUsers}
        users={props.state.users}
        onChangeInputValue={props.onChangeInputValue}
        inputValue={props.state.inputValue}
      />
      <button
        onClick={() => {
          props.changeModaleWindowState(
            "modalWindowState",
            openCloseModalWindow()
          );
        }}
      >
        Add
      </button>
      {props.state.modalWindowState ? (
        <ModalWindow
          addNewUser={props.addNewUser}
          state={props.state}
          onChangeValueInModaleWindow={props.onChangeValueInModaleWindow}
        />
      ) : null}
      <div className={style.nav}>
        <p
          onClick={() => {
            props.changeArr(sortArray(props.state.users, "id"));
          }}
        >
          id {sortArr ? <div>↓</div> : <div>↑</div>}
        </p>
        <p
          onClick={() => {
            props.changeArr(sortArray(props.state.users, "firstName"));
          }}
        >
          First Name {sortArr ? <div>↓</div> : <div>↑</div>}
        </p>
        <p
          onClick={() => {
            props.changeArr(sortArray(props.state.users, "lastName"));
          }}
        >
          Last Name {sortArr ? <div>↓</div> : <div>↑</div>}
        </p>
        <p
          onClick={() => {
            props.changeArr(sortArray(props.state.users, "email"));
          }}
        >
          Email {sortArr ? <div>↓</div> : <div>↑</div>}
        </p>
        <p
          onClick={() => {
            props.changeArr(sortArray(props.state.users, "phone"));
          }}
        >
          Phone {sortArr ? <div>↓</div> : <div>↑</div>}
        </p>
      </div>
      <div>
        <p>{elemUser}</p>
      </div>
    </div>
  );
};

export default Users;
