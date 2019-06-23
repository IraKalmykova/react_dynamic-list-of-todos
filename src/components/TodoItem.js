import React from 'react';
import '../App.css';

const TodoItem = (props) => {
  return (
    <tr>
      <td><a href="#" onClick={() => props.selectUser(props.userId)}>{props.name}</a></td>
      <td>{props.title}</td>
      <td class={props.completed ? 'completed-true' : 'completed-false'}>{props.status}</td>
    </tr>
  )
}

export default TodoItem;