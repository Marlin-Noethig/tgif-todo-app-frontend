import {Todo} from "../model/Todo";
import {useState} from "react";
import {StatusConfig} from "../configs/StatusConfig";

type EditDetailsProps = {
    todo: Todo
    toggleCreate: () => void
}


export default function EditDetails({todo, toggleCreate}: EditDetailsProps) {
    const [description, setDescription] = useState(todo.description)
    const [status, setStatus] = useState(todo.status)


    return (
        <div>
            <form>
                <label>Edit description:
                    <input type={"text"}
                           value={description}
                           onChange={e => setDescription(e.target.value)}/>
                </label>
                <label>Edit status:
                    <select value={status} onChange={e => setStatus(e.target.value)}>
                        {StatusConfig.statuses.map(status => <option
                            value={status}>{StatusConfig.renderStatus(status)}</option>)}
                    </select>
                </label>
                <input type={"submit"} onClick={toggleCreate} value={"save"}/>
            </form>
        </div>
    )
}