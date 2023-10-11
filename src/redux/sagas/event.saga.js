import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* postEvent(action) {
    console.log('this is our event POST:', action.payload);
    try {
        yield axios.post('/api/events', action.payload);
        yield put({ type: 'FETCH_EVENT_DATA' })
    } catch (error) {
        console.log('Error with Event Post:', error);
    }
}

function* fetchEvents(action) {
    try {
        const eventList = yield axios.get('/api/events');
        console.log('this is eventList.data', eventList.data);
        yield put({ type: 'SET_EVENT_DATA', payload: eventList.data });
    } catch (error) {
        console.log('Error with Events FETCH:', error);
    }
}

function* deleteEvent(action) {
    try {
      const deleteFavorite = yield axios.delete(`/api/events/${action.payload.id}`);
      console.log(deleteFavorite)
      yield put({ type: 'FETCH_EVENT_DATA'});
    } catch (error) {
      console.log("error DELETING images", error);
    }
  }

function* eventSaga() {
    yield takeLatest('SET_EVENT_POST', postEvent);
    yield takeLatest('FETCH_EVENT_DATA', fetchEvents);
    yield takeLatest('DELETE_EVENT_DATA', deleteEvent);
}

export default eventSaga;
