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

    const updateTodo = (updatedTodo: Todo) => {
        setTodos(
            todos.map((item: Todo) => (updatedTodo.id === item.id ? updatedTodo : item))
        )
    }

    const deleteTodo = (id: string) => {
        setTodos(
            todos.filter(todo => todo.id !== id)
        )
    }

    return {todos, addTodo, updateTodo, deleteTodo}
}
