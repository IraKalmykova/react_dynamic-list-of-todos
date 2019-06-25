import React from 'react';
import '../App.css';
import TodoItem from './TodoItem';

const TodoList = (props) => {
  return (
    <div>
      <table className="table">
        <thead>
        <tr className="table__row">
          <th className="table__column">
            <button
              className="btn-sort"
              type="submit"
              onClick={props.sortBy}>
              Name
            </button>
          </th>
          <th className="table__column">
            <button
              className="btn-sort"
              type="submit"
              onClick={props.sortBy}>
              Title
            </button>
          </th>
          <th className="table__column">
            <button
              className="btn-sort"
              type="submit"
              onClick={props.sortBy}>
              Status
            </button>
          </th>
        </tr>
        </thead>
        <tbody>
        {
          props.todos.map(todo => (
            <TodoItem
              key={todo.id}
              name={todo.name}
              title={todo.title}
              status={todo.status}
              userId = {todo.userId}
              completed={todo.completed}
            />
          ))
        }
        </tbody>
      </table>
    </div>
  );
}

export default TodoList;
