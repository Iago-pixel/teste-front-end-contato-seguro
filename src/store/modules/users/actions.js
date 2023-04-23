import { ADD_USERS } from "./actionsTypes.js";

export const addUsers = (newUsers) => ({
  type: ADD_USERS,
  newUsers,
});
