import { createStore } from "redux";

const defaultState = {
  counter: 0
};
const reduce = (state = defaultState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        counter: state.counter + 1
      };
    case "DECREMENT":
      return {
        counter: state.counter - 1
      };
    default:
      return state;
  }
};

export const store = createStore(reduce);
