import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* postEvent(action) {
  console.log('this is our event POST:', action.payload);
  try {
    yield axios.post('/api/events', action.payload);
    // yield put({ type: 'FETCH_EVENT_DATA' })
  } catch (error) {
    console.log('Error with Event Post:', error);
  }
}

function* fetchEvents(action) {
  console.log("Action Payload:", action.payload)
  try {
    const eventList = yield axios.get(`/api/events/${action.payload}`);
    // console.log('this is eventList.data', eventList.data);
    yield put({ type: 'SET_EVENT_DATA', payload: eventList.data });
  } catch (error) {
    console.log('Error with Events FETCH:', error);
  }
}

function* deleteEvent(action) {
  try {
    const deleteEvent = yield axios.delete(`/api/events/${action.payload.id}`);
    console.log("Delete Success:", deleteEvent)
    yield put({ type: 'FETCH_EVENT_DATA', payload: action.payload.userId });
  } catch (error) {
    console.log("error DELETING Event", error);
  }
}

function* updateEvent(action) {
  console.log(action.payload)
  try {
    const updateEvent = yield axios.put(`/api/events/update-data/${action.payload.id}`, action.payload);
    console.log("Update Success:", updateEvent)
    yield put({ type: 'FETCH_EVENT_DATA', payload: action.payload.userId });
  } catch (error) {
    console.log("error Updating Event", error);
  }
}

function* updateEventComplete(action) {
  console.log("Update Event Complete Looks like", action.payload)
  try {
    const updateEvent = yield axios.put(`/api/events/update-completion/${action.payload.id}`, action.payload);
    console.log("Update Success:", updateEvent)
    yield put({ type: 'FETCH_EVENT_DATA', payload: action.payload.userId });
  } catch (error) {
    console.log("error Updating Event", error);
  }
}

function* eventSaga() {
  yield takeLatest('SET_EVENT_POST', postEvent);
  yield takeLatest('FETCH_EVENT_DATA', fetchEvents);
  yield takeLatest('DELETE_EVENT_DATA', deleteEvent);
  yield takeLatest('UPDATE_EVENT_DATA', updateEvent);
  yield takeLatest('UPDATE_EVENT_COMPLETE_DATA', updateEventComplete);
}

export default eventSaga;
