import { useState } from 'react';
import React from 'react';
import './styles/App.css';
import TaskItem from './components/TaskItem';

//Creamos la funcion App, que es la funcion principal de la aplicacion
function App() {

  //Creamos estado para guardar la tarea
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);


  //Creamos estado de editar una tarea
  const [ editTaskId, setEditTaskId] = useState(null);
  const [ editTaskText, setEditTaskText] = useState('');

  //funcion para manejar el evento de agregar una tarea
  const handleAddTask = () => {
    if (task.trim() === '') return;

    const newTask = {
      id: Date.now(),
      text: task,
    };

    //Agregamos la nueva tarea al estado de tareas
    setTasks([...tasks, newTask]);
    console.log(newTask);
    setTask('');
  }; 

  // Funcion para filtrar las tareas para eliminar la tarea con el id correspondiente
  const handleDelete = (id) => {
    const newTasks = tasks.filter(task => task.id !== id);
    setTasks(newTasks);
    console.log(newTasks);
  };

  // Funcion para editar una tarea
  const editTask = (task) => {
    setEditTaskId(task.id);
    setEditTaskText(task.text);
  };

  // Funcion para guardar la tarea editada
  const saveEdit = (id) => {
    const updatedTasks = tasks.map((task) => 
      task.id === id ? { ...task, text: editTaskText } : task
    );
  
    setTasks(updatedTasks);
    setEditTaskId(null);
    setEditTaskText('');
    console.log(updatedTasks);
  };
  

  return (
    <div className="app-container">
      <h1>My To-Do List</h1>
      <input className="input-task" 
        type="text" 
        placeholder="Add a new task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button onClick={handleAddTask}>add task</button>
      <ul>
        {tasks.map((task) => (
          <TaskItem 
            key={task.id}
            task={task}
            editTaskId={editTaskId}
            editTaskText={editTaskText}
            setEditTaskText={setEditTaskText}
            editTask={editTask}
            saveEdit={saveEdit}
            handleDelete={handleDelete}
          />
        ))}
      </ul>
    </div>
  );
}

export default App;
