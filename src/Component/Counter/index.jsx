import React, { Component } from 'react';
import './index.css'

class Counter extends Component {
  render() {
    return (
      <div className='counter'>
        <p>{this.props.count}</p>
        <button onClick={() =>{this.props.onDecrement(this.props.id, this.props.steps)}}>-</button>
        <button onClick={() =>{this.props.onIncrement(this.props.id, this.props.steps)}}>+</button>
      </div>
    );
  }
}
export default Counter;
