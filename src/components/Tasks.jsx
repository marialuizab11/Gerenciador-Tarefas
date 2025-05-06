import { ChevronRightIcon } from "lucide-react";
import { TrashIcon } from "lucide-react";

function Tasks({ tasks, onTaskClick, onDeleteClick }){
    console.log(tasks)
    return (
        <ul className="space-y-4 p-6 bg-slate-200 rounded-md shadow">
            {tasks.map((task) => 
                (<li key={task.id} className="flex gap-2" >
                    <button 
                       onClick={() => onTaskClick(task.id)}
                       className={`bg-red-700 w-full text-left text-white p-2 rounded-md ${task.isCompleted && 'line-through'}`}                       
                    >
                        {task.title}
                    </button> 
                    <button className="bg-red-700 p-2 rounded-md text-white">
                        <ChevronRightIcon />
                    </button>
                    <button onClick={() => onDeleteClick(task.id)} className="bg-red-700 p-2 rounded-md text-white">
                        <TrashIcon />
                    </button>
                </li>
            ))}
        </ul>
    )
}

export default Tasks;