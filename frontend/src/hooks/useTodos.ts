import {useEffect, useState} from "react";
import {Todo} from "../model/Todo";
import {getTodoByApi} from "../services/TodoApiServices";



export default function useTodos() {
    const [todos, setTodos] = useState<Todo[]>([])

    useEffect(() =>{
       getTodoByApi()
           .then(data => setTodos(data))
    },[])

    const addTodo = (newTodo: Todo) => {
        setTodos((allTodos) => [...allTodos, newTodo])
    }
    console.log( todos )
    return {todos, addTodo}
}
