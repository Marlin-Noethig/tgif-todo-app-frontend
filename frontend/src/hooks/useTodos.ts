import {useEffect, useState} from "react";
import {Todo} from "../model/Todo";
import axios from "axios";



export default function useTodos() {
    const [todos, setTodos] = useState<Todo[]>()

    useEffect(() =>{
        axios.get("api/todo")
            .then(response => setTodos(response.data))
            .catch(console.error)
    },[])

    return todos
}
