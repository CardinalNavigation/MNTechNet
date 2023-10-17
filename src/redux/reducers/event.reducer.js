import { combineReducers } from "redux";

// This was a solution JD proposed for us, to use dummy data so that the function does not 
// interfere with the rendering of the page. 
// const initialState = [
//   {
//     address: "",
//     event_complete: true,
//     event_name: "",
//     formatted_date: "",
//     id: -1,
//     notes: "",
//     time: "",
//   },
// ];

const eventReducer = (state = [], action) => {
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
