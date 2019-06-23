import React from 'react';
import '../App.css';
import {getAllTodos, getAllUsers}from '../api/users'
import TodoItem from './TodoItem'
import User from './User'

class TodoList extends React.Component {
  state = {
    selectedButton: false,
    todosList: [],
    users: [],
    selectedUser: false,
    sortCondition: 0,
  }

  selectUser = (userId) => {
    const copyUsers = {...this.state.users[userId-1]};
    const userData = Object.keys(copyUsers)
      .filter(el => el !== 'address' && el !== 'company' && el !== 'id')
      .map(el => el + ':' + ' ' + copyUsers[el]);
    this.setState({selectedUser: userData});
  }

  sortByStatus = () => {
    const copyTodosList = [...this.state.todosList];
    this.state.sortCondition ?
      copyTodosList.sort(this.compareStatusUp) :
      copyTodosList.sort(this.compareStatusDown);

    this.setState({
      todosList: copyTodosList,
      sortCondition: !this.state.sortCondition
    });
  }

  compareStatusUp = (statusA, statusB) => {
    return statusA.completed - statusB.completed;
  }

  compareStatusDown = (statusA, statusB) => {
    return statusB.completed - statusA.completed;
  }

  async componentDidMount() {
    const todosList = await getAllTodos();
    const users = await getAllUsers();
    const todos = todosList.map(item => {
      return {
        ...item,
        name: users
          .filter(user => user.id === item.userId)
          .map(user => user.name)
          .join(''),
        status: item.completed ? 'completed' : 'in progres',
      }
    });

    this.setState({
      todosList: todos,
      users,
    });
  }

  render () {
    return (
      <div>
        {
          this.state.selectedUser ?
            (<User user = {this.state.selectedUser}/>) :
              this.state.todosList.length > 0 ? (
                <table>
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Title</th>
                      <th><a href="#" onClick={this.sortByStatus}>Status <span>{this.state.sortCondition ? '↓' : '↑'}</span></a></th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      this.state.todosList.map(user => (
                        <TodoItem
                          name={user.name}
                          title={user.title}
                          status={user.status}
                          userId = {user.userId}
                          completed={user.completed}
                          selectUser={this.selectUser}
                        />
                      ))
                    }
                  </tbody>
                </table>
                ) : (
              <button className="load">Loading</button>
            )
        }
      </div>
    );
  }
}

export default TodoList;
