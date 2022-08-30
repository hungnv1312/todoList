import React, { useState } from "react";
import DatePicker from "react-datepicker";
import { GoCalendar } from 'react-icons/go';

import "react-datepicker/dist/react-datepicker.css";
import "./style.css";

const DatePick = ({ label, onChange, ...rest }) => {
  const [startDate, setStartDate] = useState(new Date());

  const handleChange = (value) => {
    setStartDate(value);
    if (onChange) onChange(value);
  };

  return (
    <div className="date-wrap">
      {label && <label>{label}</label>}
      <div className="date-picker-wrap">
        <DatePicker
          className="date-picker"
          selected={startDate}
          onChange={(date) => handleChange(date)}
          dateFormat="d MMMM yyyy"
          minDate={new Date()}
          showDisabledMonthNavigation
          {...rest}
        />
        <span className="date-icon">
          <GoCalendar />
        </span>
      </div>
    </div>
  );
};

export default DatePick;
