import {Todo} from "../model/Todo";
import TodoList from "./TodoList";
import "./TodoBoard.css";
import {statuses} from "../globals/globals";
import {useEffect, useState} from "react";
import ListTitle from "./ListTitle";


type TodoBoardProps = {
    todos: Todo[]
    onUpdate: (todo:Todo) => void
    onDelete: (id: string ) => void
}

export default function TodoBoard({todos, onUpdate, onDelete}: TodoBoardProps) {

    const [filteredTodos, setFilteredTodos] = useState<Todo[][]>([[]])

    const filterTodos = () => statuses.map(status =>{
       return todos.filter(todo => todo.status === status)
    })

    useEffect(()=>{
        setFilteredTodos(filterTodos())
    },[todos])

    return (
        <div className={"todo-board"}>
            <div className={"list-title-container"}>
                {statuses.map(status => <ListTitle status={status}/>)}
            </div>
            <div className={"list-container"}>
                {filteredTodos.map(todos => <TodoList todos={todos}
                                                      onUpdate={onUpdate}
                                                      onDelete={onDelete}/>)}
            </div>
        </div>
    )
}