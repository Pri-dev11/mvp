import { legacy_createStore as createStore, applyMiddleware, combineReducers } from "redux";
import { thunk } from "redux-thunk";
import { newsReducer } from "../Reducer/NewsReducer";

const rootReducer = combineReducers({
  news: newsReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
