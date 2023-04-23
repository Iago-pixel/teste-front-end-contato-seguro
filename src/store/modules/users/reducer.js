import { ADD_USERS } from "./actionsTypes";

export const usersReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_USERS:
      const { newUsers } = action;
      return [...state, ...newUsers];

    default:
      return state;
  }
};
