import {Todo} from "../model/Todo";
import TodoEntry from "./TodoEntry";
import "./TodoList.css";


type TodoListProps = {
    todos: Todo[]
}

export default function TodoList({todos}: TodoListProps) {


    const getStatus = (): string => {

        try {
            switch (todos[0].status) {
                case "OPEN":
                    return "Open"
                case "IN_PROGRESS":
                    return "In Progress"
                case "DONE":
                    return "Done"
                default:
                    return ""
            }
        }
        catch (error){
            return "Nothing here"
        }
    }


    return (
        <div className={"todo-list"}>
            <h2>{getStatus()}</h2>
            {todos.map(todo => <TodoEntry key={todo.id} todo={todo}/>)}
        </div>
    )
}