import React, {useEffect, useState} from 'react';
import './App.css';

import useTodos from "./hooks/useTodos";
import TodoBoard from "./components/TodoBoard";
import {Todo} from "./model/Todo";
import CreateTodo from "./components/CreateTodo";
import axios from "axios";


function App() {

    const  todos: Todo[] | undefined = useTodos()

    const addTodoToApi = (newTodo:Todo) => {
        axios.post("api/todo", newTodo)
            .then(response => response.data)
            .catch(console.error)
    }

  return (
    <div className="App">
        <TodoBoard todos={todos} />
        <CreateTodo addTodoToApi={addTodoToApi} />
    </div>
  );
}

export default App;
