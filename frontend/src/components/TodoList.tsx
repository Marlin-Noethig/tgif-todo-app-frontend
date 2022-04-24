import {Todo} from "../model/Todo";
import TodoEntry from "./TodoEntry";
import "./TodoList.css";


type TodoListProps = {
    todos: Todo[]
    onUpdate: (todo: Todo) => void
    onDelete: (id: string) => void
}

export default function TodoList({todos, onUpdate, onDelete}: TodoListProps) {

    return (
        <div className={"todo-list"}>
            {todos.map(todo => <TodoEntry key={todo.id}
                                          todo={todo}
                                          onUpdate={onUpdate}
                                          onDelete={onDelete}/>)}
        </div>
    )
}