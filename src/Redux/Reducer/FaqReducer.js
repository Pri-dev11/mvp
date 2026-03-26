import { FAQ_LIST, FAQ_SUCCESS, FAQ_FAILURE } from "../constants";

const initialData = {
  data: [],
  loading: false,
  error: null,
}

const FaqReducer = (state = initialData, action) => {
  switch (action.type) {
    case FAQ_LIST:
      return {
        ...state,
        loading: true,
        error: null,
      }
    case FAQ_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload.data,
      }
    case FAQ_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      }
    default:
      return state
  }
}

export default FaqReducer;