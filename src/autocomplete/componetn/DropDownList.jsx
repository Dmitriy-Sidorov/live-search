import React from "react";

const DropDownList = (props) => {
  const { dropDownOptions } = props;
  return (
    <div className="drop-down-list">
      {dropDownOptions.map((option, index) => (
        <div className="drop-down-list__item" key={index}>{option}</div>
      ))}
    </div>
  );
};

export default DropDownList;
