

import axios from "axios";
import { BASE_URL, NEWS_LIST, NEWS_LIST_SUCCESS, NEWS_LIST_FAILURE, FAQ_LIST, FAQ_SUCCESS, FAQ_FAILURE, UPCOMING_EVENT, UPCOMING_EVENT_SUCCESS, UPCOMING_EVENT_FAILURE, PAST_EVENTS, PAST_EVENTS_SUCCESS, PAST_EVENTS_FAILURE, EVENT_CALENDAR, EVENT_CALENDAR_SUCCESS, EVENT_CALENDAR_FAILURE } from "../constants";

export const fetchNewsList = () => {
  return async (dispatch) => {
    dispatch({ type: NEWS_LIST });
    try {
      const response = await axios.get(BASE_URL + "news?page=1&limit=200ws");
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

export const fetchUpcomingEvents = () => {
  return async (dispatch) => {
    dispatch({ type: UPCOMING_EVENT });
    try {
      const response = await axios.get(BASE_URL + "events/upcoming-events");
      dispatch({ type: UPCOMING_EVENT_SUCCESS, payload: response.data });
    } catch (error) {
      dispatch({ type: UPCOMING_EVENT_FAILURE, payload: error.message });
    }
  }
}

export const fetchPastEvents = () => {
  return async (dispatch) => {
    dispatch({ type: PAST_EVENTS });
    try {
      const response = await axios.get(BASE_URL + "events/past-events-with-winners");
      dispatch({ type: PAST_EVENTS_SUCCESS, payload: response.data });
    } catch (error) {
      dispatch({ type: PAST_EVENTS_FAILURE, payload: error.message });
    }
  }
}

// export const fetchEventsCalendar = (params) => {
//   console.log("action")
//   return async (dispatch) => {
//     console.log("here")
//     dispatch({ type: EVENT_CALENDAR });
//     try {
//       console.log("try")
//       const response = await axios.get(BASE_URL + "events/public?month=3&year=2026");
//       dispatch({ type: EVENT_CALENDAR_SUCCESS, payload: response.data });
//     } catch (error) {
//       dispatch({ type: EVENT_CALENDAR_FAILURE, payload: error.message });
//     }
//   }
// }

const monthToNumber = (monthName) => {
  const months = {
    'January': 1, 'February': 2, 'March': 3, 'April': 4, 'May': 5, 'June': 6,
    'July': 7, 'August': 8, 'September': 9, 'October': 10, 'November': 11, 'December': 12
  };
  return months[monthName] || 1;
}

export const fetchEventsCalendar = (params) => {
  return async (dispatch) => {
    dispatch({ type: EVENT_CALENDAR });
    try {
      const { month, year } = params || { month: 'March', year: '2026' };
      const monthNum = typeof month === 'string' ? monthToNumber(month) : month;
      const response = await axios.get(`${BASE_URL}events/public?month=${monthNum}&year=${year}`);
      dispatch({ type: EVENT_CALENDAR_SUCCESS, payload: response.data });
    } catch (error) {
      dispatch({ type: EVENT_CALENDAR_FAILURE, payload: error.message });
    }
  }
}
