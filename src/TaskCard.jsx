function TaskCard({ task, onDeleteTask }) {
  const formattedDate = new Date(
    `${task.dueDate}T12:00:00`
  ).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  return (
    <article className="task-card">
      <div className="task-card-content">
        <h3>{task.name}</h3>
        <p className="due-date">
          <span>Due date:</span> {formattedDate}
        </p>
        <span
          className={`priority priority-${task.priority.toLowerCase()}`}
        >
          {task.priority} Priority
        </span>
      </div>

      <button
        className="delete-button"
        type="button"
        onClick={() => onDeleteTask(task.id)}
        aria-label={`Delete ${task.name}`}
      >
        Delete
      </button>
    </article>
  );
}

export default TaskCard;