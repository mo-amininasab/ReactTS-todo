import React from 'react';

import TodoItem from './TodoItem';

import Todo from '../models/todo';

interface Props {
  items: Todo[];
}

const Todos: React.FC<Props> = (props) => {
  return (
    <ul>
      {props.items.map((item) => (
        <TodoItem key={item.id} text={item.text}/>
      ))}
    </ul>
  );
};

export default Todos;
