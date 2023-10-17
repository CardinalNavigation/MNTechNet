import { combineReducers } from "redux";

const initialState = [
  {
    address: "",
    event_complete: true,
    event_name: "",
    formatted_date: "",
    id: -1,
    notes: "",
    time: "",
  },
];

const eventReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_EVENT_DATA":
      return action.payload;
    default:
      return state;
  }
};

export default combineReducers({
  eventReducer,
});
