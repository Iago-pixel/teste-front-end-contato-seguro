import { ADD_COUNT } from "./actionsTypes";

export const countReducer = (state = 0, action) => {
  switch (action.type) {
    case ADD_COUNT:
      const newState = state + 1;

      return newState;

    default:
      return state;
  }
};
