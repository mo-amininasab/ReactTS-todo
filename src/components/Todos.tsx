import React from 'react';

import TodoItem from './TodoItem';

import Todo from '../models/todo';

import classes from './Todos.module.css';

interface Props {
  items: Todo[];
}

const Todos: React.FC<Props> = (props) => {
  return (
    <ul className={classes.todos}>
      {props.items.map((item) => (
        <TodoItem key={item.id} text={item.text} />
      ))}
    </ul>
  );
};

export default Todos;
