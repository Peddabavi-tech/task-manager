import { useState } from "react";

function TaskForm({ onAddTask }) {
  const [name, setName] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [priority, setPriority] = useState("Medium");

  function handleSubmit(event) {
    event.preventDefault();

    if (!name.trim() || !dueDate) {
      return;
    }

    onAddTask({
      name: name.trim(),
      dueDate,
      priority,
    });

    setName("");
    setDueDate("");
    setPriority("Medium");
  }

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <h2>Add New Task</h2>
      <p className="form-description">
        Fill in the details below to create a task.
      </p>

      <label htmlFor="task-name">Task Name</label>
      <input
        id="task-name"
        type="text"
        placeholder="e.g. Finish React assignment"
        value={name}
        onChange={(event) => setName(event.target.value)}
        required
      />

      <label htmlFor="due-date">Due Date</label>
      <input
        id="due-date"
        type="date"
        value={dueDate}
        onChange={(event) => setDueDate(event.target.value)}
        required
      />

      <label htmlFor="priority">Priority</label>
      <select
        id="priority"
        value={priority}
        onChange={(event) => setPriority(event.target.value)}
      >
        <option value="Low">Low</option>
        <option value="Medium">Medium</option>
        <option value="High">High</option>
      </select>

      <button className="add-button" type="submit">
        + Add Task
      </button>
    </form>
  );
}

export default TaskForm;