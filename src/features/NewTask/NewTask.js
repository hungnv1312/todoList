import React, { useState } from "react";
import { Button } from "../../components/Button";
import { DatePick } from "../../components/DatePick";
import { Input } from "../../components/Input";
import { Select } from "../../components/Select";
import { Textarea } from "../../components/Textarea";
import { addNewTask } from "../../store/actions";
import { useTodo } from "../../store/hooks";
import moment from "moment";

import "./style.css";

const NewTask = () => {
  const [, dispatch] = useTodo();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState(new Date());
  const [piority, setPiority] = useState("Normal");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title == "") {
      alert("please input title");
    }
    const id = new Date().getTime();
    const convertToTimestamp = Number(moment(dueDate).format("X"));
    const payload = {
      id,
      title,
      description,
      dueDate: convertToTimestamp,
      piority,
      completed: false,
    };
    // console.log(payload);
    dispatch(addNewTask(payload));
  };

  return (
    <div className="task">
      <h3 className="task-heading">New Task</h3>
      <div className="task-body">
        <form className="form">
          <div className="form-control">
            <Input
              placeholder="Add new task..."
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="form-control">
            <Textarea
              label="Description"
              rows={8}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div className="form-control">
            <div className="box">
              <div className="box-item">
                <DatePick label="Due Date" onChange={(v) => setDueDate(v)} />
              </div>
              <div className="box-item">
                <Select
                  onChange={(v) => setPiority(v)}
                  label="Piority"
                  defaultValue={piority}
                  options={["Low", "Normal", "High"]}
                />
              </div>
            </div>
          </div>
          <div className="form-control mt-50">
            <Button onClick={handleSubmit} className="btn btn-green w-100">
              Add
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewTask;
