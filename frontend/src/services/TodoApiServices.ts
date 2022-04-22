import {Todo} from "../model/Todo";
import axios from "axios";

export function getTodoByApi(){
   return axios.get("api/todo")
        .then(response => response.data)
        .catch(console.error)
}

export function postTodoByApi(todo: Todo){
   return axios.post("api/todo", todo)
        .then(response => response.data)
        .catch(console.error)
}

export function putTodoByApi(id: string | undefined, todo: Todo){
   axios.put(`/api/todo/${id}`, todo)
       .then(response => response.data)
       .catch(console.error)
}


export function deleteTodoByApi(id: string | undefined){
   axios.delete(`api/todo/${id}`)
       .then(response => response.data)
       .catch(console.error)
}

