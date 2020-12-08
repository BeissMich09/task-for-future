import React from "react";
import AddInfoUser from "./AddInfoUser/AddInfoUser";
import style from "./User.module.css";

const User = (props) => {
  let modalWindow = (array) => {
    let copyArr = array.slice();
    let user = copyArr.find((item) => item.id === props.user.id);
    if (user !== undefined) {
      if (user.personalInfo) {
        return (user.personalInfo = false);
      } else {
        return (user.personalInfo = true);
      }
    }
  };

  return (
    <div>
      <div
        onClick={() => {
          props.personalInfoStateChange(
            props.allUsers,
            modalWindow(props.users),
            props.user.id
          );
        }}
        className={style.item}
      >
        <p>{props.user.id}</p>
        <p>{props.user.firstName}</p>
        <p>{props.user.lastName}</p>
        <p>{props.user.email}</p>
        <p>{props.user.phone}</p>
      </div>
      <div>
        {props.user.personalInfo ? (
          props.user.address !== undefined ? (
            <AddInfoUser user={props.user} />
          ) : (
            <div>Нет данных</div>
          )
        ) : null}
      </div>
    </div>
  );
};

export default User;
