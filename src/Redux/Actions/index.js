

import axios from "axios";
import { BASE_URL, NEWS_LIST, NEWS_LIST_SUCCESS, NEWS_LIST_FAILURE, FAQ_LIST, FAQ_SUCCESS, FAQ_FAILURE } from "../constants";

export const fetchNewsList = () => {
  return async (dispatch) => {
    dispatch({ type: NEWS_LIST });
    try {
      const response = await axios.get(BASE_URL + "nenews?page=1&limit=200ws");
      dispatch({ type: NEWS_LIST_SUCCESS, payload: response.data.data });
    } catch (error) {
      dispatch({ type: NEWS_LIST_FAILURE, payload: error.message });
    }
  }
}

export const fetchFaqList = () => {
  return async (dispatch) => {
    dispatch({ type: FAQ_LIST });
    try {
      const response = await axios.get(BASE_URL + "faq?language=en");
      dispatch({ type: FAQ_SUCCESS, payload: response.data });
    } catch (error) {
      dispatch({ type: FAQ_FAILURE, payload: error.message });
    }
  }
}



