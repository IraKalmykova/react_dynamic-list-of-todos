import React from 'react';
import './App.css';
import TodoList from './components/TodoList'

class App extends React.Component {
  state = {
    disabled: false,
    todos: [],
    users: [],
    todosLoaded: false,
  }

  onLoad = () => {
    this.setState({
      disabled: true,
    });
    this.componentDidMount().then(() => {
      this.setState({todosLoaded: true})
    });
    ;
  };

  componentDidMount = async () => {
    const BASE_URL = 'https://jsonplaceholder.typicode.com';
    const responseTodos = await fetch(`${BASE_URL}/todos`);
    const todos = await responseTodos.json();

    const responseUsers = await fetch(`${BASE_URL}/users`);
    const users = await responseUsers.json();

    const todosData = todos.map(todo => {
      return {
        ...todo,
        status: todo.completed ? 'completed' : 'in progress',
        name: users.find(user => user.id === todo.userId).name,
      }
    });

    this.setState({
      todos: todosData,
      users
    })
  };

  sortBy = (e) => {
    const value = e.target.textContent.toLowerCase();
    this.setState((prevState) => ({
      todos: prevState.todos.sort((a, b) =>
        a[value].localeCompare(b[value])
      )
    }));
  }

  render() {
    return (
      <div className="section">
        {
          this.state.todosLoaded ?
            <TodoList
              todos={this.state.todos}
              sortBy={this.sortBy}
            /> :
            <button
              className="btn-load"
              disabled={this.state.disabled}
              onClick={this.onLoad}>
                {this.state.disabled ? 'Loading' : 'Load'}
            </button>
        }
      </div>
    );
  }
}

export default App;
