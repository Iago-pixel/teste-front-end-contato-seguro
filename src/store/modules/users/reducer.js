import { ADD_USERS } from "./actionsTypes";

export const usersReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_USERS:
      const { newUsers } = action;

      const newState = [...state, ...newUsers];

      const unique = [...new Map(newState.map((e) => [e.id, e])).values()];

      return unique;

    default:
      return state;
  }
};
