import React from "react";
import style from "./ModaleWindow.module.css";

const ModalWindow = (props) => {
  const createNewUser = (id, firstName, lastName, email, phone) => {
    let newUser = {
      id,
      firstName,
      lastName,
      email,
      phone,
      modalWindowState: false,
    };
    return newUser;
  };

  return (
    <div>
      <div>
        <p>id:</p>{" "}
        <input
          value={+props.state.inputValueId}
          type="text"
          onChange={(e) =>
            props.onChangeValueInModaleWindow("inputValueId", +e.target.value)
          }
        />
      </div>
      <div>
        <p>First Name:</p>{" "}
        <input
          value={props.state.inputValueFirstName}
          type="text"
          onChange={(e) =>
            props.onChangeValueInModaleWindow(
              "inputValueFirstName",
              e.target.value
            )
          }
        />
      </div>
      <div>
        <p>Last Name:</p>{" "}
        <input
          value={props.state.inputValueLastName}
          type="text"
          onChange={(e) =>
            props.onChangeValueInModaleWindow(
              "inputValueLastName",
              e.target.value
            )
          }
        />
      </div>
      <div>
        <p>Email:</p>{" "}
        <input
          value={props.state.inputValueEmail}
          type="email"
          pattern="@"
          onChange={(e) =>
            props.onChangeValueInModaleWindow("inputValueEmail", e.target.value)
          }
        />
      </div>
      <div>
        <p>Phone:</p>{" "}
        <input
          value={props.state.inputValuePhone}
          type="text"
          onChange={(e) =>
            props.onChangeValueInModaleWindow("inputValuePhone", e.target.value)
          }
        />
      </div>
      <button
        onClick={() => {
          props.addNewUser(
            createNewUser(
              props.state.inputValueId,
              props.state.inputValueFirstName,
              props.state.inputValueLastName,
              props.state.inputValueEmail,
              props.state.inputValuePhone
            )
          );
        }}
        disabled={
          props.state.inputValueId &&
          props.state.inputValueFirstName &&
          props.state.inputValueLastName &&
          props.state.inputValueEmail &&
          props.state.inputValuePhone
            ? false
            : true
        }
      >
        Добавить в таблицу
      </button>
    </div>
  );
};

export default ModalWindow;
