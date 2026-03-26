

import axios from "axios";
import { BASE_URL, NEWS_LIST, NEWS_LIST_SUCCESS, NEWS_LIST_FAILURE } from "../constants";

export const fetchNewsList = () => {
  return async (dispatch) => {
    dispatch({ type: NEWS_LIST });
    try {
      const response = await axios.get(BASE_URL + "news");
      dispatch({ type: NEWS_LIST_SUCCESS, payload: response.data.data });
    } catch (error) {
      dispatch({ type: NEWS_LIST_FAILURE, payload: error.message });
    }
  }
}

