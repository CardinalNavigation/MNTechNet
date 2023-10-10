import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* postEvent(action) {
    console.log('this is our event POST:', action.payload);
    try {
        yield axios.post('/api/events', action.payload);
    } catch (error) {
        console.log('Error with Event Post:', error);
    }
}

function* eventSaga() {
    yield takeLatest('SET_EVENT_POST', postEvent);
}

export default eventSaga;
