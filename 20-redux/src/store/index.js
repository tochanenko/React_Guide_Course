import { createSlice, configureStore } from '@reduxjs/toolkit';

const initialState = { counter: 0, visible: true };

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter = state.counter + action.payload;
    },
    toggle(state) {
      state.visible = !state.visible;
    }
  }
});

export const INCREMENT = 'increment';
export const DECREMENT = 'decrement';
export const INCREASE = 'increase';
export const TOGGLE = 'toggle';

const store = configureStore({
  reducer: counterSlice.reducer,

});

export const counterActions = counterSlice.actions

export default store;

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