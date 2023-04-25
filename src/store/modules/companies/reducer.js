import { ADD_COMPANIES } from "./actionsTypes";

export const companiesReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_COMPANIES:
      const { newCompanies } = action;

      const newState = [...state, ...newCompanies];

      const unique = [...new Map(newState.map((e) => [e.id, e])).values()];

      return unique;

    default:
      return state;
  }
};
