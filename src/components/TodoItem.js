import React from 'react';
import '../App.css';
import User from './User';

const TodoItem = (props) => {
  return (
    <tr key={props.key} className="table__row">
      <User name={props.name}/>
      <td className="table__column">{props.title}</td>
      <td className={props.completed ? 'table__column completed-true' : 'table__column completed-false'}>{props.status}</td>
    </tr>
  )
}

export default TodoItem;