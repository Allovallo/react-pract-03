import React, { Component } from 'react';
import ColorPicker from 'components/ColorPicker';
// import Counter from './components/Counter';
// import Dropdown from 'components/Dropdown';
import TodoList from 'components/TodoList';
import initialTodos from './todos.json';
import Form from 'components/Form';

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

  deleteTodo = todoId => {
    this.setState(prevState => ({ todos: prevState.todos.filter(todo => todo.id !== todoId) }));
  };

  toggleCompleted = todoId => {
    console.log(todoId);

    this.setState(prevState => ({
      todos: prevState.todos.map(todo => {
        if (todo.id === todoId) {
          console.log('Знайшли потрібний id!');
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      }),
    }));
  };

  // handleNameChange = event => {
  //   this.setState({ name: event.currentTarget.value });
  // };

  // handleTagChange = event => {
  //   this.setState({ tag: event.currentTarget.value });
  // };

  // formSubmitHandler = data => {
  //   console.log(data);
  // };

  render() {
    const { todos } = this.state;

    const totalTodoCount = todos.length;
    const completedTodosCount = todos.reduce(
      (total, todo) => (todo.completed ? total + 1 : total),
      0
    );

    return (
      <div>
        {/* <input type="text" value={this.state.inputValue} onChange={this.handleInputChange}></input> */}

        {/* <Form onSubmit={this.formSubmitHandler} /> */}

        <h1>Стан компонента</h1>
        {/* <Counter initialValue={10} />
          <Dropdown /> */}
        {/* <ColorPicker options={colorPickerOptions} /> */}

        {/* <div>
          <p>Загальна кількість todo`шек: {totalTodoCount}</p>
          <p>Кількість виконаних todo`шек: {completedTodosCount}</p>
        </div> */}

        <TodoList
          todos={todos}
          onDeleteTodo={this.deleteTodo}
          onToggleCompleted={this.toggleCompleted}
        />
      </div>
    );
  }
}

export default App;
