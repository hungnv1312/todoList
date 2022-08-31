import * as TYPE from "./contants";

export const initState = {
  todoList: [
    {
      id: 1,
      title: "Do homework",
      completed: false,
      description: "Lorem lorem ipsum....",
      dueDate: 1662113303,
      piority: "Normal",
    },
  ],
  searchTitle: "",
};

const todoReducer = (state, action) => {
  switch (action.type) {
    case TYPE.ADD_NEW_TASK:
      return {
        ...state,
        todoList: [...state.todoList, action.payload],
      };
    case TYPE.UPDATE_TASK:
      return;
    case TYPE.REMOVE_TASK:
      return;
    case TYPE.SEARCH_TITLE:
      return;
    default:
      return state;
  }
};

export default todoReducer;
