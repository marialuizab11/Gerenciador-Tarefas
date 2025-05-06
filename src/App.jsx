import { useState } from "react";
import AddTasks from "./components/AddTasks";
import Tasks from "./components/Tasks";

function App() {
  //State é uma lista
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Estudar React",
      description: "Ver o vídeo completo do felipe no youtube",
      isCompleted: false,
    },
    {
      id: 2,
      title: "Fazer marketing da loja",
      description: "Tirar fotos, postar no instagram, responder os clientes",
      isCompleted: false,
    },
    {
      id: 3,
      title: "Ver aula 1 da jornada full stack",
      description:
        "No canal da hashtag, ver aula 1 que fala sobre a configuração e utlização do react",
      isCompleted: false,
    },
  ]);

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
    const newTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(newTasks);
  }

  return (
    <div className="w-screen h-screen bg-amber-700 flex justify-center p-6">
      <div className="w-[500px]">
        <h1 className="text-3xl text-slate-300 font-bold text-center">
          Gerenciador de Tarefas
        </h1>
        <AddTasks />
        <Tasks tasks={tasks} onTaskClick={onTaskClick} onDeleteClick={onDeleteClick}/>
      </div>
    </div>
  );
}

export default App;
