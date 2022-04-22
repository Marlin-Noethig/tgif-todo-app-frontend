import {Todo} from "../model/Todo";
import "./TodoEntry.css"
import {statuses} from "../globals/globals";
import axios from "axios";
import {deleteTodoByApi, putTodoByApi} from "../services/TodoApiServices";

type TodoEntryProps ={
    todo: Todo
}

export default function TodoEntry({todo}: TodoEntryProps){

    const updateStatus = (newStatus: string) =>{
        const updatedTodo: Todo = {...todo, status: newStatus}
        putTodoByApi(todo.id, updatedTodo)
    }

    const increaseStatus = () =>{
        const newStatus = statuses[statuses.indexOf(todo.status) + 1]
        updateStatus(newStatus)
    }


    const decreaseStatus = () => {
        const newStatus = statuses[statuses.indexOf(todo.status) - 1]
        updateStatus(newStatus)
    }

    const onDelete = () =>{
       deleteTodoByApi(todo.id)
    }

    return(
        <div className={"todo-entry"}>
            <h4>{todo.description}</h4>
            {todo.status !== "OPEN" ? <button onClick={decreaseStatus}>Recede</button> : null}
            {todo.status !== "DONE" ? <button onClick={increaseStatus}>Proceed</button> : null}
            {todo.status === "DONE" ? <button onClick={onDelete}>Delete</button> : null}
        </div>
    )
}
