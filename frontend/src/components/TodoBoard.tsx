import {Todo} from "../model/Todo";
import TodoList from "./TodoList";
import "./TodoBoard.css";
import {statuses} from "../globals/globals";
import {useEffect, useState} from "react";


type TodoBoardProps = {
    todos: Todo[]
}

export default function TodoBoard({todos}: TodoBoardProps) {

    const [filteredTodos, setFilteredTodos] = useState<Todo[][]>([[]])

    const filterTodos = () => statuses.map(status =>{
       return todos.filter(todo => todo.status === status)
    })

    useEffect(()=>{
        setFilteredTodos(filterTodos())
    },[todos])

    console.log(filteredTodos)

    return (
        <div className={"todo-board"}>
            {filteredTodos.map(todos => <TodoList todos={todos}/>)}
        </div>
    )
}