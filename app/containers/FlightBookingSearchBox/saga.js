import { all, takeLatest, call, put } from 'redux-saga/effects';

import { getCities } from 'api/cities';

import { LOAD_SOURCE_CITIES, LOAD_DESTINATION_CITIES } from './constants';
import {
  loadSourceCitiesSuccess,
  loadSourceCitiesFail,
  loadDestinationCitiesSuccess,
  loadDestinationCitiesFail,
} from './actions';

export function* loadSourceCities({ name }) {
  try {
    const res = yield call(getCities, name);

    if (res) {
      yield put(loadSourceCitiesSuccess(res));
    } else {
      throw new Error('Request timeout');
    }
  } catch (err) {
    yield put(loadSourceCitiesFail());
  }
}

export function* loadDestinationCities({ name }) {
  try {
    const res = yield call(getCities, name);
    if (res) {
      yield put(loadDestinationCitiesSuccess(res));
    } else {
      throw new Error('Request timeout');
    }
  } catch (err) {
    yield put(loadDestinationCitiesFail());
  }
}

// Individual exports for testing
export default function* flightBookingSearchBoxSaga() {
  yield all([
    yield takeLatest(LOAD_SOURCE_CITIES, loadSourceCities),
    yield takeLatest(LOAD_DESTINATION_CITIES, loadDestinationCities),
  ]);
}
