import React from "react";
import "./style.css";

const Input = ({ label, ...rest }) => {
  return (
    <div className="input-default">
      {label && <label>{label}</label>}
      <input type="text" {...rest} />
    </div>
  );
};

export default Input;
