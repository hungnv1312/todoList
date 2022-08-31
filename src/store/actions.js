import * as TYPE from "./contants";

export const addNewTask = (payload) => ({
  type: TYPE.ADD_NEW_TASK,
  payload,
});

export const updateTask = (id, payload) => ({
  type: TYPE.UPDATE_TASK,
  id,
  payload,
});

export const removeTask = (id) => ({
  type: TYPE.REMOVE_TASK,
  id,
});

export const toggleBulkAction = (payload) => ({
  type: TYPE.BULK_ACTION,
  payload,
});
