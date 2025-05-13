import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counter.js';
import authReducer from './auth.js';


const store = configureStore({
  reducer: {
    counter: counterReducer,
    auth: authReducer
  },
});

export default store;

// export const INCREMENT = 'increment';
// export const DECREMENT = 'decrement';
// export const INCREASE = 'increase';
// export const TOGGLE = 'toggle';

// const counterReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case INCREMENT:
//       return { ...state, counter: state.counter + 1 };
//     case DECREMENT:
//       return { ...state, counter: state.counter - 1 };
//     case INCREASE:
//       return { ...state, counter: state.counter + action.amount };
//     case TOGGLE:
//       console.log(state.visible);
//       return { ...state, visible: !state.visible };
//     default:
//       return state;
//   }
// };