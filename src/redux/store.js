import { combineReducers, createStore } from "redux";
import usersReducer from "./redusers/user-reducer";

const reducers = combineReducers({
  usersReducer,
});

const store = createStore(reducers);

export default store;
