import React from 'react'

interface Props {
  text: string;
  key: string
}

const TodoItem: React.FC<Props> = (props) => {
  return (
    <li key={props.key}>
      {props.text}
    </li>
  )
}

export default TodoItem
