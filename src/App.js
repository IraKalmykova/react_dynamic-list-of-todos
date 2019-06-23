import React from 'react';
import './App.css';
import TodoList from './components/TodoList'

class App extends React.Component {
  state = {
    selectedButton: false,
  }

  pressButton = () => {
    this.setState({selectedButton: true})
  };

  render() {
    return (
      <div>
        {
          !this.state.selectedButton ?
            <button onClick={this.pressButton}>Enter</button> :
            (<TodoList />)
        }
      </div>

    );
  }
}

export default App;
