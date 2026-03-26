import { PAST_EVENTS, PAST_EVENTS_SUCCESS, PAST_EVENTS_FAILURE } from "../constants";

const initialState = {
  data: [],
  loading: false,
  error: null,
}

const PastEventReducer = (state = initialState, action) => {
  switch (action.type) {
    case PAST_EVENTS:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case PAST_EVENTS_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload.data,
        error: null,
      };
    case PAST_EVENTS_FAILURE:
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

export default PastEventReducer;