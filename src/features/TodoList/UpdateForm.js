import React, { useState, useEffect } from "react";
import { Button } from "../../components/Button";
import CardItem from "../../components/CardItem/CardItem";
import { DatePick } from "../../components/DatePick";
import { Input } from "../../components/Input";
import { Select } from "../../components/Select";
import { Textarea } from "../../components/Textarea";
import moment from "moment";
import { updateTask, removeTask, completedTask } from "../../store/actions";
import { useTodo } from "../../store/hooks";

const UpdateForm = ({
  id,
  title,
  completed,
  description,
  dueDate,
  piority,
}) => {
  const [, dispatch] = useTodo();
  const [openUpdate, setOpenUpdate] = useState(false);

  const [uTitle, setUTitle] = useState(title);
  const [uCompleted, setUCompleted] = useState(completed);
  const [uDescription, setUDescription] = useState(description);
  const [uDueDate, setUDueDate] = useState(dueDate);
  const [uPiority, setUPiority] = useState(piority);

  useEffect(() => {
    setUTitle(title);
    setUCompleted(completed);
    setUDescription(description);
    setUDueDate(dueDate);
    setUPiority(piority);
  }, [id, title, completed, dueDate, description, piority]);

  const toggleUpdate = () => {
    setOpenUpdate(!openUpdate);
  };

  const handleCheckbox = (e) => {
    // console.log(e.target.id);
    dispatch(completedTask(e.target.id))
  };

//   console.log(uCompleted);

  const handleUpdate = (id) => {
    if (uTitle == "") {
      alert("please input title");
    }
    const convertToTimestamp = Number(moment(uDueDate).format("X"));
    const payload = {
      title: uTitle,
      description: uDescription,
      completed: uCompleted,
      dueDate: convertToTimestamp,
      piority: uPiority,
    };

    dispatch(updateTask(id, payload));
    setOpenUpdate(false);
  };

  const handleRemove = (id) => {
    dispatch(removeTask(id));
  };

  return (
    <>
      <div className="form-control">
        <CardItem
        //   completed={uCompleted}
          checkboxProps={{
            id: id,
            checked: uCompleted,
            onChange: handleCheckbox,
          }}
          title={title}
          removeAction={() => handleRemove(id)}
          detailAction={toggleUpdate}
        />
        {openUpdate && (
          <div className="update-form-wrap">
            <div className="form-control">
              <Input
                value={uTitle}
                onChange={(e) => setUTitle(e.target.value)}
              />
            </div>
            <div className="form-control">
              <Textarea
                label="Description"
                rows={8}
                onChange={(e) => setUDescription(e.target.value)}
              >
                {uDescription}
              </Textarea>
            </div>
            <div className="form-control">
              <div className="box">
                <div className="box-item">
                  <DatePick
                    label="Due Date"
                    selected={moment(uDueDate, "X").toDate()}
                    onChange={(v) => setUDueDate(v)}
                  />
                </div>
                <div className="box-item">
                  <Select
                    label="Piority"
                    defaultValue={uPiority}
                    onChange={(v) => setUPiority(v)}
                    options={["Low", "Normal", "High"]}
                  />
                </div>
              </div>
            </div>
            <div className="form-control mt-50">
              <Button
                onClick={() => handleUpdate(id)}
                className="btn btn-green w-100"
              >
                Update
              </Button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default UpdateForm;
