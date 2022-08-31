import React, { useState } from "react";
import { Button } from "../../components/Button";
import CardItem from "../../components/CardItem/CardItem";
import { DatePick } from "../../components/DatePick";
import { Input } from "../../components/Input";
import { Select } from "../../components/Select";
import { Textarea } from "../../components/Textarea";
import { useTodo } from "../../store/hooks";
import moment from "moment";

import "./style.css";

const TodoList = () => {
  const [state] = useTodo();
  const todoList = state.todoList;
  const [openUpdate, setOpenUpdate] = useState(false);

  const toggleUpdate = () => {
    setOpenUpdate(!openUpdate);
  };

  console.log("todoList,", todoList);
  //   id: 1,
  //   title: "Do homework",
  //   completed: false,
  //   description: "Lorem lorem ipsum....",
  //   dueDate: "12 May 2024",
  //   piority: "Normal",
  return (
    <div className="task border-left">
      <h3 className="task-heading">TodoList</h3>
      <div className="task-body">
        <div className="form">
          <div className="form-control">
            <Input placeholder="Search ..." />
          </div>
          {todoList &&
            todoList.map(
              ({ id, title, completed, description, dueDate, piority }) => {
                return (
                  <div className="form-control" key={id}>
                    <CardItem
                      completed={completed}
                      title={title}
                      removeAction={() => {}}
                      detailAction={toggleUpdate}
                    />
                    {openUpdate && (
                      <div className="update-form-wrap">
                        <div className="form-control">
                          <Input value={title} />
                        </div>
                        <div className="form-control">
                          <Textarea label="Description" rows={8}>
                            {description}
                          </Textarea>
                        </div>
                        <div className="form-control">
                          <div className="box">
                            <div className="box-item">
                              <DatePick
                                label="Due Date"
                                selected={dueDate ? moment(dueDate, "X").toDate(): false}
                                onChange={(e) => console.log(e)}
                              />
                            </div>
                            <div className="box-item">
                              <Select
                                label="Piority"
                                defaultValue={piority}
                                options={["Low", "Normal", "High"]}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="form-control mt-50">
                          <Button className="btn btn-green w-100">
                            Update
                          </Button>
                        </div>
                      </div>
                    )}
                  </div>
                );
              }
            )}
          {/* <div className="form-control">
            <CardItem />
          </div>
          <div className="form-control">
            <CardItem />
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default TodoList;
