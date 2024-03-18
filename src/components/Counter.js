import './Counter.css';
import { React, Component } from 'react';

class Counter extends Component {
  state = {
    value: 0,
  };

  handleIncrement = () => {
    console.log('Клікнули на збільшити');
  };

  handleDecrement = () => {
    console.log('Клікнули на зменшити');
  };

  render() {
    return (
      <div className="Counter">
        <span className="Counter__value">{this.state.value}</span>

        <div className="Counter__controls">
          <button type="button" onClick={this.handleIncrement}>
            Збільшити на 1
          </button>
          <button type="button" onClick={this.handleDecrement}>
            Зменшити на 1
          </button>
        </div>
      </div>
    );
  }
}

export default Counter;
