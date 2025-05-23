import { ChevronRightIcon } from "lucide-react";
import { TrashIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Button from "./Button"

// eslint-disable-next-line react/prop-types
function Tasks({ tasks, onTaskClick, onDeleteClick }){
    const navigate = useNavigate();

    function onSeeDetailsClick(task){
        const query = new URLSearchParams();
        query.set("title", task.title);
        query.set("description", task.description);
        navigate(`/task?${query.toString()}`);
    }

    return (
        <ul className="space-y-4 p-6 bg-slate-200 rounded-md shadow">
            {/* eslint-disable-next-line react/prop-types */}
            {tasks.map((task) => 
                (<li key={task.id} className="flex gap-2" >
                    <button 
                       onClick={() => onTaskClick(task.id)}
                       className={`bg-red-700 w-full text-left text-white p-2 rounded-md ${task.isCompleted && 'line-through'}`}                       
                    >
                        {task.title}
                    </button> 
                    {/* () => {return onSeeDetailsClick(task)}
                        Arrow function é uma função que retorna algo
                    */}
                    <Button onClick={() => onSeeDetailsClick(task)} >
                        <ChevronRightIcon />
                    </Button>
                    <Button onClick={() => onDeleteClick(task.id)} >
                        <TrashIcon />
                    </Button>
                </li>
            ))}
        </ul>
    )
}

export default Tasks;