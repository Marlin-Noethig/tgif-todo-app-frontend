import {useNavigate, useParams} from "react-router-dom";
import {Todo} from "../model/Todo";
import ViewDetails from "../components/ViewDetails";
import {useState} from "react";
import EditDetails from "../components/EditDetails";

type TodoDetailsProps = {
    todos: Todo[]
    updateTodo: (todo: Todo) => void
}

export default function TodoDetail({todos, updateTodo}:TodoDetailsProps){

    const params = useParams()
    const id = params.id

    const navigate = useNavigate()

    const todo = todos.find(todo => todo.id === id)

    const [editEnabled, setEditEnabled] = useState(false)


    const toggleCreate = () => {
      setEditEnabled(!editEnabled)
    }

    if (todo === undefined) {
        return <div>Todo not found</div>
    }

    const navigateBack = () => {
      navigate("/")
    }

    return(
        <div className={"details-page"}>
            {!editEnabled? <ViewDetails todo={todo} toggleCreate={toggleCreate}/> : <EditDetails todo={todo} toggleCreate={toggleCreate}/>}
            <button onClick={navigateBack}>Back</button>
        </div>
    )
}