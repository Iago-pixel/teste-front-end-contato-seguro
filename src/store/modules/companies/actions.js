import { ADD_COMPANIES } from "./actionsTypes.js";

export const addCompanies = (newCompanies) => ({
  type: ADD_COMPANIES,
  newCompanies,
});
