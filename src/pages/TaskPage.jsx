import { ChevronLeftIcon } from "lucide-react";
import { useNavigate, useSearchParams } from "react-router-dom";
import Title from "../components/Title"

function TaskPage(){
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const title = searchParams.get("title");
    const description = searchParams.get("description");
    return(
        <div className="w-screen h-screen bg-amber-700 p-6 flex justify-center">
            <div className="w-[500px] space-y-6 ">
                <div className="relative mb-6">
                    <button onClick={() => navigate(-1)} className="absolute left-0 bottom-0 text-slate-100">
                        <ChevronLeftIcon />
                    </button>
                    <Title>
                        Detalhes da Tarefa
                    </Title>
                </div>
                

                <div className="bg-slate-200 p-4 rounded-md">
                    <h2 className="text-xl font-bold text-red-700">{title}</h2>
                    <p className="text-red-700">{description}</p>
                </div>
            </div>
        </div>
    );
}

export default TaskPage;