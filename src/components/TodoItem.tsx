import React from 'react';

import classes from './TodoItem.module.css';

interface Props {
  text: string;
  key: string;
}

const TodoItem: React.FC<Props> = (props) => {
  return (
    <li className={classes.item} key={props.key}>
      {props.text}
    </li>
  );
};

export default TodoItem;
