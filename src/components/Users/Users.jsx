import React from "react";
import Pagination from "react-js-pagination";
import Paginator from "../Paginator/Paginator";
import ModalWindowContainer from "./ModalWindow/ModalWindowContainer";
import User from "./User/User";
import UserContainer from "./User/UserContainer";
import style from "./Users.module.css";
import UsersFilter from "./UsersFilter/UsersFilter";
import UsersFilterContainer from "./UsersFilter/UsersFilterContainer";

const Users = (props) => {
  let elemUser =
    props.filterUsers === undefined || props.filterUsers.length === 0
      ? props.users.map((user) => {
          return (
            <UserContainer key={user.id} users={props.users} user={user} />
          );
        })
      : props.filterUsers.map((user) => {
          return (
            <UserContainer
              key={user.id}
              user={user}
              users={props.filterUsers}
            />
          );
        });

  console.log("this.props.changeSortArrayState", props.changeSortArrayState);
  return (
    <div className={style.item}>
      {/* <Paginator
        totalItemsCount={props.state.users.length}
        pageSize={10}
        currentPage={1}
        // onPageChange={onPageChanged}
      /> */}
      {/* <Pagination
        activePage={props.state.activePage}
        itemsCountPerPage={50}
        totalItemsCount={props.state.users.length}
        pageRangeDisplayed={5}
        onChange={props.handlePageChange.bind(this)}
      /> */}
      <UsersFilterContainer />
      <button
        onClick={() => {
          props.changeModalWindowState(
            "modalWindowState",
            !props.modalWindowState
          );
        }}
      >
        Add
      </button>
      {props.modalWindowState ? <ModalWindowContainer /> : null}
      <div className={style.nav}>
        <p
          onClick={() => {
            props.changeSortArrayState(props.sortArray(props.users, "id"));
          }}
        >
          id {props.sortArrayState ? <div>↓</div> : <div>↑</div>}
        </p>
        <p
          onClick={() => {
            props.changeSortArrayState(
              props.sortArray(props.users, "firstName")
            );
          }}
        >
          First Name {props.sortArrayState ? <div>↓</div> : <div>↑</div>}
        </p>
        <p
          onClick={() => {
            props.changeSortArrayState(
              props.sortArray(props.users, "lastName")
            );
          }}
        >
          Last Name {props.sortArrayState ? <div>↓</div> : <div>↑</div>}
        </p>
        <p
          onClick={() => {
            props.changeSortArrayState(props.sortArray(props.users, "email"));
          }}
        >
          Email {props.sortArrayState ? <div>↓</div> : <div>↑</div>}
        </p>
        <p
          onClick={() => {
            props.changeSortArrayState(props.sortArray(props.users, "phone"));
          }}
        >
          Phone {props.sortArrayState ? <div>↓</div> : <div>↑</div>}
        </p>
      </div>
      <div>
        <p>{elemUser}</p>
      </div>
    </div>
  );
};

export default Users;
