import React, { useState, useEffect } from "react";
import { Button } from "../../components/Button";
import CardItem from "../../components/CardItem/CardItem";
import { DatePick } from "../../components/DatePick";
import { Input } from "../../components/Input";
import { Select } from "../../components/Select";
import { Textarea } from "../../components/Textarea";
import { useTodo } from "../../store/hooks";
import { searchTask } from "../../store/actions";
import moment from "moment";
import UpdateForm from "./UpdateForm";
import BulkAction from "./BulkAction";

import "./style.css";

const TodoList = () => {
  const [state, dispatch] = useTodo();
  const todoList = state.todoList;
  const bulkActionState = state.bulkAction;
  const [searchTitle, setSearchTitle] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  console.log("bulkActionState>>", bulkActionState);

  const handleSearch = (val) => {
    setSearchTitle(val);
  };

  useEffect(() => {
    const results = todoList.filter(({ title }) =>
      title.toLowerCase().includes(searchTitle.toLowerCase())
    );
    console.log("result>>", results);
    setSearchResults(results);
  }, [searchTitle, todoList]);


  return (
    <div className="task border-left">
      <h3 className="task-heading">TodoList</h3>
      <div className="task-body">
        <div className="form">
          <div className="form-control">
            <Input
              value={searchTitle}
              placeholder="Search ..."
              onChange={(e) => handleSearch(e.target.value)}
            />
          </div>
          {searchResults.sort( (a ,b) => a.dueDate - b.dueDate ).map(({ ...rest }, i) => {
            return (
              <React.Fragment key={i}>
                <UpdateForm {...rest} />
                {bulkActionState && <BulkAction {...rest} />}
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TodoList;
