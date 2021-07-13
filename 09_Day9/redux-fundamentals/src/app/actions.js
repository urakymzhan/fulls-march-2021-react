import { INCREMENT, DECREMENT } from "./actionTypes";

// action creator: function that will return action
export const increment = (count) => {
  // return an action
  return {
    type: INCREMENT,
    payload: count,
  };
};
export const decrement = (count) => {
  // return an action
  return {
    type: DECREMENT,
    payload: count,
  };
};

// action: simple object
// {
//     type: "INCREMENT",
//     payload: 1
// }
