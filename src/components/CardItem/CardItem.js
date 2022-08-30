import React from "react";
import { Button } from "../Button";
import { CheckBox } from "../CheckBox";

import "./style.css";

const CardItem = ({ title, checkType, detailAction, removeAction }) => {
  return (
    <div className="card">
      <div className="card-head">
        <CheckBox checked={checkType} /> <span>{title}</span>
      </div>
      <div className="card-action">
        <Button className="btn btn-blue" onClick={detailAction}>
          Detail
        </Button>
        <Button className="btn btn-danger" onClick={removeAction}>
          Remove
        </Button>
      </div>
    </div>
  );
};

export default CardItem;
