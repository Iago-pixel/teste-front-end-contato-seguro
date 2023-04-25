import { ADD_USERS, REMOVE_USER } from "./actionsTypes.js";

export const addUsers = (newUsers) => ({
  type: ADD_USERS,
  newUsers,
});

export const removeUser = (user) => ({
  type: REMOVE_USER,
  user,
});
