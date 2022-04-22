import React, {useEffect, useState} from 'react';
import './App.css';

import useTodos from "./hooks/useTodos";
import TodoBoard from "./components/TodoBoard";
import CreateTodo from "./components/CreateTodo";
import Title from "./components/Title";


function App() {

    const  {todos, addTodo} = useTodos()

  return (
    <div className="App">
        <Title/>
        <CreateTodo addTodo={addTodo}/>
        <TodoBoard todos={todos} />
    </div>
  );
}

export default App;
