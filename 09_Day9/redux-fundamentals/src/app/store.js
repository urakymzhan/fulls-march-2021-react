import { createStore } from "redux";

// action: simple object
// {
//     type: "INCREMENT",
//     payload: 1
// }
// action creator: function that will return action
export const increment = (count) => {
  // return an action
  return {
    type: "INCREMENT",
    payload: count,
  };
};
export const decrement = (count) => {
  // return an action
  return {
    type: "DECREMENT",
    payload: count,
  };
};

// initial state
const initalState = {
  count: 0,
};

// reducer: pure function that will take prev state and return new state based on action type
const reducer = (state = initalState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        ...state, // copy prev state values
        count: action.payload + 1, // update state count value
      };
    case "DECREMENT":
      return {
        ...state, // copy prev state values
        count: action.payload - 1, // update state count value
      };
    default:
      return state;
  }
};

// create a store
// we pass reducer to store
const store = createStore(reducer);
export default store;
