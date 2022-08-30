import React, { useState } from "react";
import "./style.css";

const Select = ({ label, options, defaultValue, onChange, ...rest }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentValue, setCurrentValue] = useState(defaultValue ? defaultValue : null);
 console.log(currentValue)
  const toggleSelect = () => setIsOpen(!isOpen);

  const handleValueChange = (value) => {
    setCurrentValue(value);
  };

  const handleChange = (value) => {
    handleValueChange(value);
    if (onChange) onChange(value);
    setIsOpen(false);
  };

  return (
    <div className="select-wrap">
      {label && <label>{label}</label>}
      <div className="select" {...rest}>
        <div className="select-header" onClick={toggleSelect}>
          <span>{currentValue !== null ? currentValue : "Please select"}</span>
          <span>{isOpen ? <span>&#9650;</span> : <span>&#9660;</span>}</span>
        </div>
        {isOpen && (
          <div className="select-body">
            <div className="select-list">
              {options &&
                options.map((val, i) => (
                  <div
                    className="select-item"
                    onClick={() => handleChange(val)}
                    key={i}
                  >
                    {val}
                  </div>
                ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Select;
