import { EVENT_CALENDAR, EVENT_CALENDAR_SUCCESS, EVENT_CALENDAR_FAILURE } from "../constants";

const initialState = {
  data: [],
  loading: false,
  error: null,
}

const EventsCalendarReducer = (state = initialState, action) => {
  switch (action.type) {
    case EVENT_CALENDAR:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case EVENT_CALENDAR_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload.data,
        error: null,
      };
    case EVENT_CALENDAR_FAILURE:
      return {
        ...state,
        loading: false,
        data: [],
        error: action.payload,
      };
    default:
      return state;
  }
}

export default EventsCalendarReducer;