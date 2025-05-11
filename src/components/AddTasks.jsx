import { useState } from "react";
import Input from "./Input"


// eslint-disable-next-line react/prop-types
function AddTasks({ onAddTaskSubmit }){
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    return (
        <div className="space-y-4 p-6 bg-slate-200 rounded-md shadow flex flex-col">
            <Input   
                type="text"
                placeholder="Digite o titulo da tarefa"
                value={title}
                onChange={(event) => setTitle(event.target.value)}
            />
            <Input 
                type="text" 
                placeholder="Descrição da tarefa" 
                value={description} 
                onChange={(event) => setDescription(event.target.value)}
            />
            <button 
                onClick={() => {
                    //verificação para nao adicionar tarefa vazia
                    //o trim resolve a adicão de tarefas apenas com espaços
                    if(!title.trim() ){
                        return alert("A tarefa não pode ser vazia.");
                    }
                    onAddTaskSubmit(title, description);
                    setTitle("");
                    setDescription("");
                } } 
                className="bg-red-700 text-white px-4 py-2 rounded-md"
                > 
                Adicionar tarefa
                </button>
        </div>)
}

export default AddTasks;