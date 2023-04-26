import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware,
} from "redux";
import { usersReducer } from "./modules/users/reducer";
import { companiesReducer } from "./modules/companies/reducer";
import ReduxThunk from "redux-thunk";
import { countReducer } from "./modules/count/reducer";

const reducers = combineReducers({
  users: usersReducer,
  companies: companiesReducer,
  count: countReducer,
});

const store = createStore(reducers, applyMiddleware(ReduxThunk));

export default store;
