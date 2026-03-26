import { UPCOMING_EVENT, UPCOMING_EVENT_SUCCESS, UPCOMING_EVENT_FAILURE } from "../constants";

const initialState = {
  data: [],
  loading: false,
  error: null,
}

const UpcomingEventReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPCOMING_EVENT:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case UPCOMING_EVENT_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload.data,
        error: null,
      };
    case UPCOMING_EVENT_FAILURE:
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

export default UpcomingEventReducer;