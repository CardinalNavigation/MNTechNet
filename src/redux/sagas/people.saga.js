import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* postPerson(action) {
    console.log('this is our people POST:', action.payload);
    try {
        yield axios.post('/api/people', action.payload);
        yield put({ type: 'FETCH_EVENT_DATA' })
    } catch (error) {
        console.log('Error with People Post:', error);
    }
}

function* fetchPeople(action) {
    try {
        const personList = yield axios.get('/api/people');
        console.log('this is personList.data', personList.data);
        yield put({ type: 'SET_PERSON_DATA', payload: personList.data });
    } catch (error) {
        console.log('Error with Person Table FETCH:', error);
    }
}

function* personSaga() {
    yield takeLatest('SET_PERSON_POST', postPerson);
    yield takeLatest('FETCH_PERSON_DATA', fetchPeople);
}

export default personSaga;
