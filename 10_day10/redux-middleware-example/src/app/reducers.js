import {GET_PETS_FROM_SERVER} from './actions'

// reducer
const initialState = {
    pets: [],
  };
  
  export const reducer = (state = initialState, action) => {
    //   const { type, payload } = action;
    switch (action.type) {
      case GET_PETS_FROM_SERVER:
        return {
          ...state,
          pets: action.payload,
        };
      default:
        return state;
    }
  };