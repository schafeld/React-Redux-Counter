import React from 'react';
import { connect } from 'react-redux';

function mapStateToProps(state) {
  return {
    count: state.count
  };
}

class Counter extends React.Component {
  state = { count: 0 }

  increment = () => {
    // tbd
  }

  decrement = () => {
    // tbd
  }

  render() {
    return (
      <div className="counter">
        <h2>Counter</h2>
        <div>
          <button onClick={this.decrement}>-</button>
          <span>{this.props.count}</span>
          <button onClick={this.increment}>+</button>
        </div>
      </div>
    )
  }
}

export default connect(mapStateToProps)(Counter);