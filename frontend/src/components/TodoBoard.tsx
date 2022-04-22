import {Todo} from "../model/Todo";
import TodoEntry from "./TodoEntry";


type TodoBoardProps = {
    todos: Todo[] | undefined
}

export default function TodoBoard({todos}: TodoBoardProps) {

    if (todos === undefined) {
        return <div>
            No Todos retrieved!
        </div>
    }


    const statuses: string[] = ["OPEN", "IN"]

    const openTodos = todos.filter(todo => todo.status === "OPEN")
    const inProgressTodos = todos.filter(todo => todo.status === "IN_PROGRESS")
    const doneTodos = todos.filter(todo => todo.status === "DONE")


    return (
        <div className={"todo-board"}>
            <div>
                OPEN
                {openTodos.map(todo => <TodoEntry key={todo.id} todo={todo}/>)}
            </div>
            <div>
                IN PROGRESS
                {inProgressTodos.map(todo => <TodoEntry key={todo.id} todo={todo}/>)}
            </div>
            <div>
                DONE
                {doneTodos.map(todo => <TodoEntry key={todo.id} todo={todo}/>)}
            </div>

        </div>
    )
}