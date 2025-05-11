import { useState, useEffect } from "react";
import AddTasks from "./components/AddTasks";
import Tasks from "./components/Tasks";
import Title from "./components/Title"
import { v4 as uuidv4 } from 'uuid';

function App() {
  //State é uma lista
  const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem("tasks")) || []);

  //hook do React para salvarmos a task no armazenamento do navegador
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  function onTaskClick(taskId){
    const newTasks = tasks.map(task => {
      //Quando preciso atualizar o estado de uma tarefa
      if(task.id === taskId){
        return{... task, isCompleted: !task.isCompleted}
      } 

      return task
    });
    //Atualiza o estado
    setTasks(newTasks);
  }
  
  function onDeleteClick(taskId){
    //Filtra os que não foram clicados para ser deletado
    const newTasks = tasks.filter((task) => { 
      let bool = task.id !== taskId
      if(bool){
        return bool
      }     
    });
    setTasks(newTasks);
  }

  function onAddTaskSubmit(title, description){
    
    const newTask = {
      id: uuidv4(),
      title: title,
      description: description,
      isCompleted: false,
    };
    setTasks([...tasks, newTask]);
  }

  return (
    <div className="w-screen h-screen bg-amber-700 flex justify-center p-6 ">
      <div className="w-[500px] space-y-6">
        <Title>
          Gerenciador de Tarefas
        </Title>
        <AddTasks onAddTaskSubmit={onAddTaskSubmit} /> 
        <Tasks tasks={tasks} onTaskClick={onTaskClick} onDeleteClick={onDeleteClick}/>
      </div>
    </div>
  );
}

export default App;
