import React from "react";

const AddInfoUser = (props) => {
  const { city, state, streetAddress, zip } = props.user.address;
  return (
    <div>
      <p>{props.user.description}</p>
      <p>{`${city} ${state} ${streetAddress} ${zip}`}</p>
    </div>
  );
};
export default AddInfoUser;
