import { INCREMENT, DECREMENT } from "./actionTypes";

// initial state
const initalState = {
  count: 0,
};

// reducer: pure function that will take prev state and return new state based on action type
export const reducer = (state = initalState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state, // copy prev state values
        count: action.payload + 1, // update state count value
      };
    case DECREMENT:
      return {
        ...state, // copy prev state values
        count: action.payload - 1, // update state count value
      };
    default:
      return state;
  }
};
