import {Todo} from "../model/Todo";
import {useState} from "react";

type EditDetailsProps = {
    todo: Todo
    toggleCreate: () => void
}




export default function EditDetails({todo, toggleCreate}:EditDetailsProps){
    const [description, setDescription] = useState(todo.description)
    const [status, setStatus] = useState(todo.status)


    return(
        <div>
            <form>
                <label>Edit description:
                    <input type={"text"}
                           value={description}/>
                </label>
                <label>Edit status:
                    <input/>
                </label>
                <input type={"submit"} onClick={toggleCreate} value={"save"}/>
            </form>
        </div>
    )
}