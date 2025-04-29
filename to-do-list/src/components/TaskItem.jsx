import React from "react";
import PropTypes from "prop-types";

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
    
      <li key={task.id} onDoubleClick={() => editTask(task)}>
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
            <button onClick={() => handleDelete(task.id)}> Eliminar </button>
          </>
        )}
      </li>
    
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
