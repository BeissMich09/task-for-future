import React from "react";
import style from "./ModaleWindow.module.css";

const ModalWindow = (props) => {
  return (
    <div>
      <div>
        <p>id:</p>{" "}
        <input
          value={+props.inputValueId}
          type="text"
          onChange={(e) =>
            props.changeValueInputInMW("inputValueId", +e.target.value)
          }
        />
      </div>
      <div>
        <p>First Name:</p>{" "}
        <input
          value={props.inputValueFirstName}
          type="text"
          onChange={(e) =>
            props.changeValueInputInMW("inputValueFirstName", e.target.value)
          }
        />
      </div>
      <div>
        <p>Last Name:</p>{" "}
        <input
          value={props.inputValueLastName}
          type="text"
          onChange={(e) =>
            props.changeValueInputInMW("inputValueLastName", e.target.value)
          }
        />
      </div>
      <div>
        <p>Email:</p>{" "}
        <input
          value={props.inputValueEmail}
          type="email"
          pattern="@"
          onChange={(e) =>
            props.changeValueInputInMW("inputValueEmail", e.target.value)
          }
        />
      </div>
      <div>
        <p>Phone:</p>{" "}
        <input
          value={props.inputValuePhone}
          type="text"
          onChange={(e) =>
            props.changeValueInputInMW("inputValuePhone", e.target.value)
          }
        />
      </div>
      <button
        onClick={() => {
          props.addNewUser(
            props.createNewUser(
              props.inputValueId,
              props.inputValueFirstName,
              props.inputValueLastName,
              props.inputValueEmail,
              props.inputValuePhone
            )
          );
        }}
        disabled={
          props.inputValueId &&
          props.inputValueFirstName &&
          props.inputValueLastName &&
          props.inputValueEmail &&
          props.inputValuePhone
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
