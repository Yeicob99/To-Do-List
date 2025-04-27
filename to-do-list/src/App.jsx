import { useState } from 'react';

//Creamos la funcion App, que es la funcion principal de la aplicacion
function App() {

  //Creamos estado para guardar la tarea
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);

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
  }; // <-- Closing bracket added here

  // Funcion para filtrar las tareas para eliminar la tarea con el id correspondiente
  const handleDelete = (id) => {
    const newTasks = tasks.filter(task => task.id !== id);
    setTasks(newTasks);
    console.log(newTasks);
  };

  return (
    <div className="app-container">
      <h1>Mi To-Do List</h1>
      <input 
        type="text" 
        placeholder="Escribe una tarea"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button onClick={handleAddTask}>add task</button>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            {task.text}
            <button onClick={() => handleDelete(task.id)}> Eliminar </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
