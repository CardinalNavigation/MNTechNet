import { combineReducers } from "redux";

const eventReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_EVENT_DATA':
            return action.payload
        default:
            return state;
    }
};

export default combineReducers({
    eventReducer,
});