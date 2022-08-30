import React, { useState } from "react";
import { Button } from "../../components/Button";
import CardItem from "../../components/CardItem/CardItem";
import { DatePick } from "../../components/DatePick";
import { Input } from "../../components/Input";
import { Select } from "../../components/Select";
import { Textarea } from "../../components/Textarea";

import "./style.css";

const TodoList = () => {
  const [openUpdate, setOpenUpdate] = useState(false);

  const toggleUpdate = () => {
    setOpenUpdate(!openUpdate);
  };

  console.log(openUpdate)

  return (
    <div className="task border-left">
      <h3 className="task-heading">TodoList</h3>
      <div className="task-body">
        <div className="form">
          <div className="form-control">
            <Input placeholder="Search ..." />
          </div>
          <div className="form-control">
            <CardItem title="Test work" removeAction={() => {}} detailAction={toggleUpdate} />
            {openUpdate && (
              <div className="update-form-wrap">
                <div className="form-control">
                  <Input />
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
                      <Select
                        label="Piority"
                        options={["Low", "Normal", "High"]}
                      />
                    </div>
                  </div>
                </div>
                <div className="form-control mt-50">
                  <Button className="btn btn-green w-100">Update</Button>
                </div>
              </div>
            )}
          </div>
          <div className="form-control">
            <CardItem />
          </div>
          <div className="form-control">
            <CardItem />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodoList;
