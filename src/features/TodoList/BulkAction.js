import React from "react";
import { Button } from "../../components/Button";
import { updateTask, removeTask, toggleBulkAction } from "../../store/actions";
import { useTodo } from "../../store/hooks";

const BulkAction = ({ id }) => {
  const [, dispatch] = useTodo();

  return (
    <div className="bulk-action">
      <span className="bulk-action-text">Bulk Action:</span>
      <div className="bulk-action-btn">
        <Button className="btn btn-blue">Done</Button>
        <Button
          className="btn btn-danger"
          onClick={() => dispatch(removeTask(id))}
        >
          Remove
        </Button>
      </div>
    </div>
  );
};

export default BulkAction;
