import React from "react";

const UsersFilter = (props) => {
  return (
    <div>
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
