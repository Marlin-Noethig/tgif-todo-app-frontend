import React, {useEffect, useState} from 'react';
import './App.css';

import useTodos from "./hooks/useTodos";
import TodoBoard from "./components/TodoBoard";
import {Todo} from "./model/Todo";


function App() {

    const  todos: Todo[] | undefined = useTodos()


  return (
    <div className="App">
        <TodoBoard todos={todos} />
    </div>
  );
}

export default App;
