import { useState } from "react";
import LinkButton from "./children/link";

function App() {
  const title: string = "Todo App";
  const [num, setNum] = useState(0);
  const [tasks, setTasks] = useState<string[]>([]);
  const [task, setTask] = useState("");

  const addTask = () => {
    setTasks([...tasks, task]);
    setTask("");
  };

  const addNumber = (val: number): number => {
    return num + val;
  }

  function addNumber2(val: number): number {
    return num + val
  }


  return (
    <div className="App">
      <div>
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button onClick={addTask}>Add Task</button>
      </div>
      <ul>
        {tasks.map((t, index) => (
          <li key={index}>{t}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;