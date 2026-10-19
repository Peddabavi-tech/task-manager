import { useState } from "react";
import TaskForm from "./TaskForm";
import TaskList from "./TaskList";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]);

  function addTask(task) {
    setTasks((previousTasks) => [
      ...previousTasks,
      { ...task, id: Date.now() },
    ]);
  }

  function deleteTask(id) {
    setTasks((previousTasks) =>
      previousTasks.filter((task) => task.id !== id)
    );
  }

  return (
    <div className="app">
      <header className="header">
        <h1>Task Manager</h1>
        <p>Organize your work. Achieve your goals.</p>
      </header>

      <main className="layout">
        <section className="form-section">
          <TaskForm onAddTask={addTask} />
        </section>

        <section className="tasks-section">
          <div className="section-heading">
            <h2>Your Tasks</h2>
            <span className="task-count">
              {tasks.length} {tasks.length === 1 ? "task" : "tasks"}
            </span>
          </div>

          <TaskList
            tasks={tasks}
            onDeleteTask={deleteTask}
          />
        </section>
      </main>
    </div>
  );
}

export default App;