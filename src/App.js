import { Button } from "./components/Button";
import { CheckBox } from "./components/CheckBox";
import { DatePick } from "./components/DatePick";
import { Select } from "./components/Select";
import { Textarea } from "./components/Textarea";
import { Input } from "./components/Input";
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
