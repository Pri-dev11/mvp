import { legacy_createStore as createStore, applyMiddleware, combineReducers } from "redux";
import { thunk } from "redux-thunk";
import NewsReducer from "../Reducer/NewsReducer";
import FaqReducer from "../Reducer/FaqReducer";
import UpcomingEventReducer from "../Reducer/UpcomingEventReducer";
import PastEventReducer from "../Reducer/PastEventsReducer";
import EventsCalendarReducer from "../Reducer/EventsCalendar";

const rootReducer = combineReducers({
  news: NewsReducer,
  faq: FaqReducer,
  upcomingEvent: UpcomingEventReducer,
  pastEvents: PastEventReducer,
  eventsCalendar: EventsCalendarReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
