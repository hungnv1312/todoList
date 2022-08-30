import React from "react";
import "./style.css";

const Textarea = ({ label, children, ...rest }) => {
  return (
    <div className="textarea-default">
      {label && <label>{label}</label>}
      <textarea {...rest}>{children}</textarea>
    </div>
  );
};

export default Textarea;
