import * as TYPE from "./contants";

// {
//     id: 1,
//     title: "Do homework",
//     completed: false,
//     description: "Lorem lorem ipsum....",
//     dueDate: 1662113303,
//     piority: "Normal",
//   },
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
    {
      id: 2,
      title: "Do AAAA",
      completed: false,
      description: "Lorem lorem ipsum....",
      dueDate: 1662113303,
      piority: "Normal",
    },
  ],
};

const todoReducer = (state, action) => {
  switch (action.type) {
    case TYPE.ADD_NEW_TASK:
      return {
        ...state,
        todoList: [...state.todoList, action.payload],
      };
    case TYPE.UPDATE_TASK:
      // const index = state.todoList.findIndex((todo) => todo.id === action.id);

      return {
        ...state,
        todoList: state.todoList.map((todo) => {
          if (todo.id == action.id) {
            return {
              ...todo,
              title: action.payload.title,
              description: action.payload.description,
              dueDate: action.payload.dueDate,
              piority: action.payload.piority,
            };
          }
          return todo;
        }),
      };
    case TYPE.SET_COMPLETED:
      return {
        ...state,
        todoList: state.todoList.map((todo) => {
          if (todo.id == action.id) {
            return {
              ...todo,
              completed: !todo.completed,
            };
          }
          return todo;
        }),
      };
    case TYPE.REMOVE_TASK:
      return {
        ...state,
        todoList: state.todoList.filter(({ id }) => id !== action.id),
      };
    case TYPE.BULK_REMOVE_TASKS:
      return {
        ...state,
        todoList: state.todoList.filter(({ completed }) => completed !== true),
      };
    default:
      return state;
  }
};

export default todoReducer;
