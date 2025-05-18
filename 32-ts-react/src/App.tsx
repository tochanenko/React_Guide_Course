import React, { useState } from 'react';
import Todos from './components/Todos';
import Todo from './models/todo';
import NewTodo from './components/NewTodo';
import TodosContextProvider from './store/todos-context';

function App() {


  return (
    <TodosContextProvider>
      <NewTodo />
      <Todos />
    </TodosContextProvider>
  );
}

export default App;
