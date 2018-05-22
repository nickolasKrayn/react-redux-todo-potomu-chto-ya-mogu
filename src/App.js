import React, { Component } from 'react';

import TodoInput from './Components/TodoInput/TodoInput';
import TodoList from './Components/TodoList/TodoList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TodoInput />
        <TodoList />
      </div>
    );
  }
}

export default App;
