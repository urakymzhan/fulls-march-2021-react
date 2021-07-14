// my own middleware
export const myLogger = (store) => {
    return (next) => {
      return (action) => {
        // do whatever
        console.log("ACTION TYPE: ", action.type);
        console.log("STORE STATE:", store.getState()); // runs before reducer
        return next(action)
      }
    }
  }