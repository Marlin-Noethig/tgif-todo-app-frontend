import {Todo} from "../model/Todo";
import "./TodoEntry.css"
import {statuses} from "../globals/globals";
import {deleteTodoByApi, putTodoByApi} from "../services/TodoApiServices";
import useTodos from "../hooks/useTodos";

type TodoEntryProps = {
    todo: Todo
    onUpdate: (todo: Todo) => void
    onDelete: (id: string) => void
}

export default function TodoEntry({todo, onUpdate, onDelete}: TodoEntryProps) {


    const updateStatus = (newStatus: string): Todo => {
        const updatedTodo: Todo = {...todo, status: newStatus}
        putTodoByApi(todo.id, updatedTodo)
        return updatedTodo
    }

    const increaseStatus = () => {
        const newStatus = statuses[statuses.indexOf(todo.status) + 1]
        updateStatus(newStatus)
        onUpdate(updateStatus(newStatus))
    }


    const decreaseStatus = () => {
        const newStatus = statuses[statuses.indexOf(todo.status) - 1]
        onUpdate(updateStatus(newStatus))
    }

    const deleteTodo = () => {
        deleteTodoByApi(todo.id)
        if(todo.id){
            onDelete(todo.id)
        }
    }

    return (
        <div className={"todo-entry"}>
            <h4>{todo.description}</h4>
            {todo.status !== "OPEN" ? <button onClick={decreaseStatus}>Recede</button> : null}
            {todo.status !== "DONE" ? <button onClick={increaseStatus}>Proceed</button> : null}
            {todo.status === "DONE" ? <button onClick={deleteTodo}>Delete</button> : null}
        </div>
    )
}
