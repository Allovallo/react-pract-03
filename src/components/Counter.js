import './Counter.css';
import { React, Component } from 'react';

class Counter extends Component {
  static defaultProps = {
    initialValue: 0,
  };

  static propTypes = {
    // описуємо пропТайпи
  };

  state = {
    value: this.props.initialValue,
  };

  handleIncrement = () => {
    this.setState(prevState => ({
      value: prevState.value + 1,
    }));
  };

  handleDecrement = () => {
    this.setState(prevState => ({
      value: prevState.value - 1,
    }));
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
