import React from "react";
import Pagination from "react-js-pagination";
import Paginator from "../Paginator/Paginator";
import ModalWindowContainer from "./ModalWindow/ModalWindowContainer";
import UserContainer from "./User/UserContainer";
import style from "./Users.module.css";
import UsersFilterContainer from "./UsersFilter/UsersFilterContainer";
import loading from "./../../assets/img/loading.gif";

const Users = (props) => {
  console.log("page", props.activePage);
  let elemUser =
    props.filterUsers === undefined || props.filterUsers.length === 0
      ? props.users
          .slice((props.activePage - 1) * 50, props.activePage * 50)
          .map((user) => {
            return (
              <UserContainer
                key={user.id + user.firstName}
                users={props.users}
                user={user}
              />
            );
          })
      : props.filterUsers
          .slice((props.activePage - 1) * 50, props.activePage * 50)
          .map((user) => {
            return (
              <UserContainer
                key={user.id}
                user={user}
                users={props.filterUsers}
              />
            );
          });

  return (
    <div className={style.item}>
      {(props.filterUsers === undefined || props.filterUsers.length === 0
        ? props.users.length
        : props.filterUsers.length) <= 50 ? null : (
        <Pagination
          activeClass={style.activeA}
          linkClass={style.linkA}
          innerClass={style.pagination}
          itemClass={style.itemLi}
          activePage={props.activePage}
          activeLinkClass={style.activePage}
          itemsCountPerPage={50}
          totalItemsCount={
            props.filterUsers === undefined || props.filterUsers.length === 0
              ? props.users.length
              : props.filterUsers.length
          }
          pageRangeDisplayed={5}
          onChange={props.handlePageChange}
        />
      )}
      <UsersFilterContainer />
      <button
        className={style.buttonAdd}
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
      <div className={style.table}>
        <div className={style.nav}>
          <span
            onClick={() => {
              props.changeSortArrayState(props.sortArray(props.users, "id"));
            }}
          >
            id {props.sortArrayState ? <div>↓</div> : <div>↑</div>}
          </span>
          <span
            onClick={() => {
              props.changeSortArrayState(
                props.sortArray(props.users, "firstName")
              );
            }}
          >
            First Name {props.sortArrayState ? <div>↓</div> : <div>↑</div>}
          </span>
          <span
            onClick={() => {
              props.changeSortArrayState(
                props.sortArray(props.users, "lastName")
              );
            }}
          >
            Last Name {props.sortArrayState ? <div>↓</div> : <div>↑</div>}
          </span>
          <span
            onClick={() => {
              props.changeSortArrayState(props.sortArray(props.users, "email"));
            }}
          >
            Email {props.sortArrayState ? <div>↓</div> : <div>↑</div>}
          </span>
          <span
            onClick={() => {
              props.changeSortArrayState(props.sortArray(props.users, "phone"));
            }}
          >
            Phone {props.sortArrayState ? <div>↓</div> : <div>↑</div>}
          </span>
        </div>
        <div>
          <div className={style.usersList}>
            {props.isFetching ? (
              <img className={style.img} src={loading} alt="loader" />
            ) : props.users.length === 0 ? (
              <div>Нет данных</div>
            ) : (
              elemUser
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Users;
