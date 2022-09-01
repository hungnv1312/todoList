import React from "react";
import { Button } from "../../components/Button";
import { bulkRemoveTasks } from "../../store/actions";
import { useTodo } from "../../store/hooks";

const BulkAction = () => {
  const [, dispatch] = useTodo();

  return (
    <div className="bulk-action">
      <span className="bulk-action-text">Bulk Action:</span>
      <div className="bulk-action-btn">
        <Button className="btn btn-blue">Done</Button>
        <Button
          className="btn btn-danger"
          onClick={() => dispatch(bulkRemoveTasks())}
        >
          Remove
        </Button>
      </div>
    </div>
  );
};

export default BulkAction;
