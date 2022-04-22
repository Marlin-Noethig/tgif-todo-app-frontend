import {Todo} from "../model/Todo";
import TodoEntry from "./TodoEntry";


type TodoBoardProps = {
    todos: Todo[] | undefined
}

export default function TodoBoard({todos}:TodoBoardProps){

    if (todos === undefined){
        return <div>
            No Todos retrieved!
        </div>
    }

    return(
        <div>
            {todos.map(todo => <TodoEntry key={todo.id} todo={todo} />)}
        </div>
    )
}