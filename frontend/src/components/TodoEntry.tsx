import {Todo} from "../model/Todo";

type TodoEntryProps ={
    todo: Todo
}

export default function TodoEntry({todo}: TodoEntryProps){
    return(
        <div>
            <h3>{todo.description}</h3>
            <p>{todo.status}</p>
        </div>
    )
}
