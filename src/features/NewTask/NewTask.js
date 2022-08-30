import React from "react";
import { Button } from "../../components/Button";
import { DatePick } from "../../components/DatePick";
import { Input } from "../../components/Input";
import { Select } from "../../components/Select";
import { Textarea } from "../../components/Textarea";
import "./style.css";

const NewTask = () => {
  return (
    <div className="task">
      <h3 className="task-heading">New Task</h3>
      <div className="task-body">
        <form className="form">
          <div className="form-control">
            <Input placeholder="Add new task..." />
          </div>
          <div className="form-control">
            <Textarea label="Description" rows={8} />
          </div>
          <div className="form-control">
            <div className="box">
              <div className="box-item">
                <DatePick label="Due Date" />
              </div>
              <div className="box-item">
                <Select label="Piority" options={["Low", "Normal", "High"]} />
              </div>
            </div>
          </div>
          <div className="form-control mt-50">
            <Button className="btn btn-green w-100">Add</Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewTask;
