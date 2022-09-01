import { NewTask } from "./features/NewTask";
import { TodoList } from "./features/TodoList";

import "./common.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <NewTask />
        <TodoList />
      </div>
    </div>
  );
}

export default App;
