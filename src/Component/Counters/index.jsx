import React, { Component } from "react";
import Counter from "../Counter";

const counters = [
  { id: 1, count: 0, steps: 1 },
  { id: 2, count: 0, steps: 3 },
  { id: 3, count: 0, steps: 5 },
  { id: 4, count: 0, steps: 5 },
];
export default class Counters extends Component {
  state = {
    counters,
    total:0,
  };
  onIncrement = (id, steps = 1) => {
    this.setState(prevState => ({total: prevState.total + steps}))
    this.setState((prevState) => {
      return {
        counters: prevState.counters.map((item) => {
          if (item.id === id) {
            return { ...item, count: item.count + steps };
          }
          return item;
        }),
      };
    });
  };

  onDecrement = (id, steps = 1) => {
    let isDec=false
    this.setState((prevState) => {
      return {
        counters: prevState.counters.map((item) => {
          if (item.id === id && item.count >= steps) {
            isDec=true
            console.log(isDec);
            return { ...item, count: item.count - steps };
          }
          return item;
        }),
      };
      
    });
    setTimeout(()=>isDec===true&&this.setState(prevState => ({total: prevState.total - steps})))
  };


  render() {
    return (
      <div>
        {this.state.counters.map((item) => (
          <Counter key={item.id} {...item} onIncrement={this.onIncrement} onDecrement={this.onDecrement} />
        ))}
        <div>{this.state.total}</div>
      </div>
    );
  }
}

