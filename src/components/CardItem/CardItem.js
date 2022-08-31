import React from "react";
import { Button } from "../Button";
import { CheckBox } from "../CheckBox";

import "./style.css";

const CardItem = ({
  title,
  completed,
  checkProps,
  detailAction,
  removeAction,
}) => {
  return (
    <div className="card">
      <div className="card-head">
        <CheckBox checked={completed} {...checkProps} />{" "}
        <span>{title}</span>
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
