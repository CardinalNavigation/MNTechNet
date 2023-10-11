import { combineReducers } from "redux";

const peopleReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_PERSON_DATA':
            return action.payload
        default:
            return state;
    }
};

export default combineReducers({
    peopleReducer,
});