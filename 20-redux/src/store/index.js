import { createStore } from 'redux';

export const INCREMENT = 'increment';
export const DECREMENT = 'decrement';
export const INCREASE = 'increase';
export const TOGGLE = 'toggle';

const counterReducer = (state = { counter: 0, visible: true }, action) => {
  switch (action.type) {
    case INCREMENT:
      return { ...state, counter: state.counter + 1 };
    case DECREMENT:
      return { ...state, counter: state.counter - 1 };
    case INCREASE:
      return { ...state, counter: state.counter + action.amount };
    case TOGGLE:
      console.log(state.visible);
      return { ...state, visible: !state.visible };
    default:
      return state;
  }
};

const store = createStore(counterReducer);

export default store;