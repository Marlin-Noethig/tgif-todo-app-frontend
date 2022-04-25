import './App.css';

import useTodos from "./hooks/useTodos";
import TodoBoard from "./components/TodoBoard";
import CreateTodo from "./components/CreateTodo";
import Title from "./components/Title";
import {BrowserRouter, Routes, Route} from "react-router-dom";


function App() {

    const  {todos, addTodo, updateTodo, deleteTodo} = useTodos()

  return (
    <div className="App">
        <BrowserRouter>
            <Title/>
            <CreateTodo addTodo={addTodo}/>

            <Routes>
            <Route path={"/"} element={<TodoBoard
                todos={todos}
                onUpdate={updateTodo}
                onDelete={deleteTodo}
            />}/>
            </Routes>
        </BrowserRouter>

    </div>
  );
}

export default App;
