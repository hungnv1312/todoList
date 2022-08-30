import React from "react";
import "./style.css";

const CheckBox = ({ ...rest }) => {
  return <input className="checkbox-default" type="checkbox" {...rest} />
};

export default CheckBox;
