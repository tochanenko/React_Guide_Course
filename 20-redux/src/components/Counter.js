import { useSelector, useDispatch, connect } from 'react-redux';

import classes from './Counter.module.css';
import { Component } from 'react';

import { counterActions  } from '../store/counter.js';

const Counter = () => {
  const counter = useSelector(state => state.counter.counter);
  const visibility = useSelector(state => state.counter.visible);
  const dispatch = useDispatch();

  function toggleCounterHandler() {
    dispatch(counterActions.toggle());
  };

  function incrementHandler() {
    dispatch(counterActions.increment());
  }

  function decrementHandler() {
    dispatch(counterActions.decrement());
  }

  function increaseHandler(amount) {
    dispatch(counterActions.increase(amount));
  }

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {visibility ? <div className={classes.value}>{counter}</div> : null }
      <div>
        <button onClick={decrementHandler}>-</button>
        <button onClick={() => increaseHandler(5)}>+ 5</button>
        <button onClick={incrementHandler}>+</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;

// Counter Class Component
class CounterCC extends Component {
  incrementHandler() {
    this.props.increment();
  }

  decrementHandler() {
    this.props.decrement();
  }

  toggleCounterHandler = () => {};

  render() {
    return (
      <main className={classes.counter}>
        <h1>Redux Counter</h1>
        <div className={classes.value}>{this.props.counter}</div>
        <div>
          <button onClick={this.decrementHandler.bind(this)}>-</button>
          <button onClick={this.incrementHandler.bind(this)}>+</button>
        </div>
        <button onClick={this.toggleCounterHandler}>Toggle Counter</button>
      </main>
    );
  }
}

const mapStateToProps = state => {
  return {
    counter: state.counter
  };
}

const mapDispatchToProps = dispatch => {
  return {
    increment: () => dispatch({ type: 'increment' }),
    decrement: () => dispatch({ type: 'decrement' })
  };
}

//export default connect(mapStateToProps, mapDispatchToProps)(Counter);
