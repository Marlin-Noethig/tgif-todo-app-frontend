import {FormEvent, useState} from "react";
import {Todo} from "../model/Todo";
import {postTodoByApi} from "../services/TodoApiServices";
import "./CreateTodo.css"

type CreateTodoProps = {
    addTodo: (newTodo: Todo) => void
}

export default function CreateTodo({addTodo}: CreateTodoProps){


    const [newDescription, setNewDescription] = useState<string>("")

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        if (!newDescription){
            alert("Please fill in a description!")
            return
        }


        const newTodo: Todo = {
            description: newDescription,
            status: "OPEN"
        }

        postTodoByApi(newTodo)
            .then(addTodo)
            .catch(console.error)
        setNewDescription("")
    }



    return(
        <div className={"create-todo"}>
            <form onSubmit={handleSubmit}>
                <label>
                    Add new Todo:
                    <input
                        type={"text"}
                        value={newDescription}
                        onChange={e => {setNewDescription(e.target.value)}}/>
                </label>
                <input type={"submit"} value={"Add"}/>
            </form>
        </div>
    )
}