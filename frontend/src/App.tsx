import './App.css';

import useTodos from "./hooks/useTodos";
import TodoBoard from "./components/TodoBoard";
import CreateTodo from "./components/CreateTodo";
import Title from "./components/Title";


function App() {

    const  {todos, addTodo, updateTodo, deleteTodo} = useTodos()

  return (
    <div className="App">
        <Title/>
        <CreateTodo addTodo={addTodo}/>
        <TodoBoard
            todos={todos}
            onUpdate={updateTodo}
            onDelete={deleteTodo}
        />
    </div>
  );
}

export default App;
