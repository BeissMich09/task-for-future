import React from "react";
import style from "./UsersFilter.module.css";

const UsersFilter = (props) => {
  return (
    <div className={style.item}>
      <input
        value={props.searchInputValue}
        onChange={(e) => props.changeSearchInputValue(e.target.value)}
        type="text"
      />
      <button
        onClick={() => {
          props.getFilterUsers(props.arrFilter(props.searchInputValue));
        }}
      >
        Search
      </button>
    </div>
  );
};

export default UsersFilter;
