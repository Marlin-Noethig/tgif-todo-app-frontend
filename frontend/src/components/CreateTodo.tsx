import {FormEvent, useState} from "react";
import {Todo} from "../model/Todo";


type CreateTodoProps = {
    addTodoToApi: (newTodo: Todo) => void
}

export default function CreateTodo({addTodoToApi}: CreateTodoProps){


    const [newDescription, setNewDescription] = useState<string>("")

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        if (newDescription === ""){
            alert("Please fill in a description!")
        }


        const newTodo: Todo = {
            description: newDescription,
            status: "OPEN"
        }
        setNewDescription("")
        addTodoToApi(newTodo)
    }



    return(
        <div>
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