import React from "react";

const UsersFilter = (props) => {
  let value = props.inputValue;
  console.log("props.users в изерфильтр", props.users);

  let arrFilter = (value) =>
    props.users.filter(function (item) {
      console.log("value в функции", +value);
      console.log("item.firstName", item.firstName);
      console.log()
      return (
        item.firstName.trim().includes(value.trim()) ||
        item.lastName.trim().includes(value.trim()) ||
        item.email.trim().includes(value.trim()) ||
        item.phone.trim().includes(value.trim()) ||
        item.id.toString().includes(value.trim())
      );
    });

  return (
    <div>
      <input
        value={value}
        onChange={(e) => props.onChangeInputValue(e.target.value)}
        type="text"
      />
      <button
        onClick={() => {
          props.onChangeFilterUsers(arrFilter(props.inputValue));
        }}
      >
        Search
      </button>
    </div>
  );
};

export default UsersFilter;
