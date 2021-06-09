/**
 * Reducer:
 * an arrow function that receives the state and the action
 * must return a state/new state
 *
 */

const cartReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD TO CART":
      //do something
      state.push(action.payload);
      return state;

    case "REMOVE FROM CART":
      //do something
      return state;

    default:
      return state;
  }
};

export default cartReducer;
