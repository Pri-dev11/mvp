import { legacy_createStore as createStore, applyMiddleware, combineReducers } from "redux";
import { thunk } from "redux-thunk";
import NewsReducer from "../Reducer/NewsReducer";
import FaqReducer from "../Reducer/FaqReducer";

const rootReducer = combineReducers({
  news: NewsReducer,
  faq: FaqReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
