import {Todo} from "../model/Todo";
import "./TodoEntry.css"
import {statuses} from "../globals/globals";
import {deleteTodoByApi, putTodoByApi} from "../services/TodoApiServices";
import {useNavigate} from "react-router-dom";

type TodoEntryProps = {
    todo: Todo
    onUpdate: (todo: Todo) => void
    onDelete: (id: string) => void
}

export default function TodoEntry({todo, onUpdate, onDelete}: TodoEntryProps) {
    const navigate = useNavigate()

    const updateStatus = (newStatus: string) => {
        const updatedTodo: Todo = {...todo, status: newStatus}
        putTodoByApi(todo.id, updatedTodo)
        onUpdate(updatedTodo)
    }

    const increaseStatus = () => {
        const newStatus = statuses[statuses.indexOf(todo.status) + 1]
        updateStatus(newStatus)
    }


    const decreaseStatus = () => {
        const newStatus = statuses[statuses.indexOf(todo.status) - 1]
        updateStatus(newStatus)
    }

    const deleteTodo = () => {
        deleteTodoByApi(todo.id)
        if(todo.id){
            onDelete(todo.id)
        }
    }

    const navigateDetails = () => {

    }


    return (
        <div className={"todo-entry"}>
            <h4 onClick={navigateDetails}>{todo.description}</h4>
            {todo.status !== "OPEN" ? <button onClick={decreaseStatus}>{"<< regress"}</button> : null}
            {todo.status !== "DONE" ? <button onClick={increaseStatus}>{"progress >>"}</button> : null}
            {todo.status === "DONE" ? <button onClick={deleteTodo}>Delete</button> : null}

        </div>
    )
}
