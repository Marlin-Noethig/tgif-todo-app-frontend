import {Todo} from "../model/Todo";
import TodoList from "../components/TodoList";
import "./TodoBoard.css";
import {StatusConfig} from "../configs/StatusConfig";
import {useEffect, useState} from "react";
import ListTitle from "../components/ListTitle";
import CreateTodo from "../components/CreateTodo";


type TodoBoardProps = {
    todos: Todo[]
    addTodo: (newTodo: Todo) => void
    onUpdate: (todo:Todo) => void
    onDelete: (id: string ) => void
}

export default function TodoBoard({todos, onUpdate, onDelete, addTodo}: TodoBoardProps) {

    const [filteredTodos, setFilteredTodos] = useState<Todo[][]>([[]])

    useEffect(()=>{
        setFilteredTodos(StatusConfig.statuses.map(status =>{
            return todos.filter(todo => todo.status === status)
        }))
    },[todos])

    return (
        <div>
        <CreateTodo addTodo={addTodo}/>
        <div className={"todo-board"}>
            <div className={"list-title-container"}>
                {StatusConfig.statuses.map(status => <ListTitle status={status}/>)}
            </div>
            <div className={"list-container"}>
                {filteredTodos.map(todos => <TodoList todos={todos}
                                                      onUpdate={onUpdate}
                                                      onDelete={onDelete}/>)}
            </div>
        </div>
        </div>
    )
}