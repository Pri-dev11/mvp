import { NEWS_LIST, NEWS_LIST_SUCCESS, NEWS_LIST_FAILURE } from "../constants";

const initialState = {
  newsList: {},
  loading: false,
  error: null,
}

export const newsReducer = (state = initialState, action) => {
  switch (action.type) {
    case NEWS_LIST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case NEWS_LIST_SUCCESS:
      return {
        ...state,
        loading: false,
        newsList: action.payload,
        error: null,
      };
    case NEWS_LIST_FAILURE:
      return {
        ...state,
        loading: false,
        newsList: [],
        error: action.payload,
      };
    default:
      return state;
  }
}