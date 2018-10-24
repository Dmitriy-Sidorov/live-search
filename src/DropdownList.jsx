import React, { Component } from "react";

const DropdownList = (props) => {
  const { dropdownOptions } = props;
  return (
    <div className="podskazka">
      {dropdownOptions.map((option, index) => (
        <div key={index}>{option}</div>
      ))}
    </div>
  );
};

export default DropdownList;
