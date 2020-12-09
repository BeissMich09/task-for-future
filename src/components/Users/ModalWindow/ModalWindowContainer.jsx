import React from "react";
import { connect } from "react-redux";
import {
  addNewUser,
  changeValueInputInMW,
} from "../../../redux/redusers/user-reducer";
import ModalWindow from "./ModalWindow";

class ModalWindowContainer extends React.Component {
  createNewUser = (id, firstName, lastName, email, phone) => {
    let newUser = {
      id,
      firstName,
      lastName,
      email,
      phone,
      personalInfo: false,
    };
    return newUser;
  };

  render() {
    return (
      <ModalWindow
        inputValueId={this.props.inputValueId}
        inputValueFirstName={this.props.inputValueFirstName}
        inputValueLastName={this.props.inputValueLastName}
        inputValueEmail={this.props.inputValueEmail}
        inputValuePhone={this.props.inputValuePhone}
        addNewUser={this.props.addNewUser}
        createNewUser={this.createNewUser}
        changeValueInputInMW={this.props.changeValueInputInMW}
      />
    );
  }
}

let mapStateToProps = (state) => {
  return {
    inputValueId: state.usersReducer.inputValueId,
    inputValueFirstName: state.usersReducer.inputValueFirstName,
    inputValueLastName: state.usersReducer.inputValueLastName,
    inputValueEmail: state.usersReducer.inputValueEmail,
    inputValuePhone: state.usersReducer.inputValuePhone,
  };
};

export default connect(mapStateToProps, {
  addNewUser,
  changeValueInputInMW,
})(ModalWindowContainer);
