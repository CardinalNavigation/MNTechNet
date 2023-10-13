import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* postPerson(action) {
    // console.log('this is our people POST:', action.payload);
    try {
        yield axios.post('/api/people', action.payload);
        yield put({ type: 'FETCH_PERSON_DATA' })
    } catch (error) {
        console.log('Error with People Post:', error);
    }
}

function* fetchPeople(action) {
    try {
        const personList = yield axios.get('/api/people');
        // console.log('this is personList.data', personList.data);
        yield put({ type: 'SET_PERSON_DATA', payload: personList.data });
    } catch (error) {
        console.log('Error with Person Table FETCH:', error);
    }
}

function* deletePerson(action) {
    try {
      const deletePerson = yield axios.delete(`/api/people/${action.payload.id}`);
    //   console.log("Delete Success:",deletePerson)
      yield put({ type: 'FETCH_PERSON_DATA'});
    } catch (error) {
      console.log("error DELETING images", error);
    }
  }

function* updatePerson(action) {
    try {
      const updatePerson = yield axios.put(`/api/people/${action.payload.id}`, action.payload);
      console.log("Update Success:",updatePerson)
      yield put({ type: 'FETCH_PERSON_DATA'});
    } catch (error) {
      console.log("error DELETING images", error);
    }
  }

function* personSaga() {
    yield takeLatest('SET_PERSON_POST', postPerson);
    yield takeLatest('FETCH_PERSON_DATA', fetchPeople);
    yield takeLatest('DELETE_PERSON_DATA', deletePerson);
    yield takeLatest('UPDATE_PERSON_DATA', updatePerson);
}

export default personSaga;
