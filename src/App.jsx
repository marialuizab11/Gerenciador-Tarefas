import { useRef, useState, useEffect } from "react";
import AddTasks from "./components/AddTasks";
import Tasks from "./components/Tasks";

function App() {
  //State é uma lista
  const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem("tasks")) || []);

  //hook do React para salvarmos a task no armazenamento do navegador
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  //hook do React para gerarmos um id incremental e único para a tarefa
  const nextId = useRef(1);

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
      id: nextId.current,
      title: title,
      description: description,
      isCompleted: false,
    };
    setTasks([...tasks, newTask]);
    nextId.current += 1;
  }

  return (
    <div className="w-screen h-screen bg-amber-700 flex justify-center p-6 ">
      <div className="w-[500px] space-y-6">
        <h1 className="text-3xl text-slate-100 font-bold text-center">
          Gerenciador de Tarefas
        </h1>
        <AddTasks onAddTaskSubmit={onAddTaskSubmit} /> 
        <Tasks tasks={tasks} onTaskClick={onTaskClick} onDeleteClick={onDeleteClick}/>
      </div>
    </div>
  );
}

export default App;
