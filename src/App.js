import React, { Component } from 'react';

// import ColorPicker from 'components/ColorPicker';
// import Counter from './components/Counter';
// import Dropdown from 'components/Dropdown';
import TodoList from 'components/TodoList';
import initialTodos from './todos.json';

// const colorPickerOptions = [
//   { label: 'red', color: '#F44336' },
//   { label: 'green', color: '#4CAF50' },
//   { label: 'blue', color: '#2196F3' },
//   { label: 'grey', color: '#607D8B' },
//   { label: 'pink', color: '#E91E63' },
//   { label: 'indigo', color: '#3F51B5' },
// ];

class App extends Component {
  state = {
    todos: initialTodos,
  };
  render() {
    const { todos } = this.state;
    return (
      <div>
        <h1>Стан компонента</h1>
        {/* <Counter initialValue={10} />
          <Dropdown /> */}
        {/* <ColorPicker options={colorPickerOptions} /> */}
        <TodoList todos={todos} />
      </div>
    );
  }
}

export default App;
