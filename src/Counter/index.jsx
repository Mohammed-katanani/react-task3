import React, { Component } from 'react'
import './index.css'
export default class Counter extends Component {
    state = {
        count: 0
    };
    onIncrement = () => this.setState(prevState => ({count: prevState.count + (parseInt(this.props.onIncrement)||1)}))
    onDecrement = () => this.state.count>0&&this.setState(prevState => ({count: prevState.count - (parseInt(this.props.onDecrement)||1)}))
  render() {
    return (
      <div className='counter'>
        <p>{this.state.count>9?this.state.count:`0${this.state.count}`}</p>
        <button onClick={this.onIncrement}>+</button>
        <button onClick={this.onDecrement}>-</button>
      </div>
    )
  }
}
