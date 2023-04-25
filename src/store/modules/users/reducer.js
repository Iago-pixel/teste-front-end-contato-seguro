import { ADD_USERS, REMOVE_USER } from "./actionsTypes";

export const usersReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_USERS:
      const { newUsers } = action;

      const newState = [...state, ...newUsers];

      const unique = [...new Map(newState.map((e) => [e.id, e])).values()];

      return unique;

    case REMOVE_USER:
      const { user } = action;

      const newState2 = state.filter(({ id }) => id !== user.id);

      return newState2;

    default:
      return state;
  }
};
