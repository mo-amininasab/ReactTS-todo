import React, { useState } from 'react';
import NewTodo from './components/NewTodo';

import Todos from './components/Todos';

import Todo from './models/todo';

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodoHandler = (todoText: string) => {
    const newTodo = new Todo(todoText);
    setTodos((prevState) => prevState.concat(newTodo));
  };

  return (
    <div>
      <Todos items={todos} />
      <NewTodo onAddTodo={addTodoHandler} />
    </div>
  );
}

export default App;
