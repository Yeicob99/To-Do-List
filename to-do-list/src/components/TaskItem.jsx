import React from "react";
import PropTypes from "prop-types";
import "../styles/TaskItem.css";

function TaskItem({
  task,
  editTaskId,
  editTaskText,
  setEditTaskText,
  editTask,
  saveEdit,
  handleDelete
}) {
  return (
    <div className="task-wrapper">
      <li key={task.id} className="task-item" onDoubleClick={() => editTask(task)}>
        {editTaskId === task.id ? (
          <input
            value={editTaskText}
            onChange={(e) => setEditTaskText(e.target.value)}
            onBlur={() => saveEdit(task.id)}
            autoFocus
          />
        ) : (
          <>
            {task.text}
            <button className="delete-button" onClick={() => handleDelete(task.id)}> Eliminar </button>
          </>
        )}
      </li>
    </div>
  );
}

export default TaskItem;
TaskItem.propTypes = {
  task: PropTypes.object.isRequired,
  editTaskId: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  editTaskText: PropTypes.string,
  setEditTaskText: PropTypes.func,
  editTask: PropTypes.func,
  saveEdit: PropTypes.func,
  handleDelete: PropTypes.func,
};
