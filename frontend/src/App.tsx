import './App.css';

import useTodos from "./hooks/useTodos";
import TodoBoard from "./pages/TodoBoard";
import Title from "./components/Title";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import TodoDetail from "./pages/TodoDetail";


function App() {

    const {todos, addTodo, updateTodo, deleteTodo} = useTodos()

    return (
        <div className="App">
            <BrowserRouter>
                <Title/>
                <Routes>
                    <Route path={"/"} element={<TodoBoard
                        todos={todos}
                        onUpdate={updateTodo}
                        onDelete={deleteTodo}
                        addTodo={addTodo}
                    />}/>
                    <Route path={"todo/:id"} element={<TodoDetail
                        todos={todos}
                        updateTodo={updateTodo}
                    />}/>
                </Routes>
            </BrowserRouter>

        </div>
    );
}

export default App;
