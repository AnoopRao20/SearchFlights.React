import { call, put, select, takeLatest, all } from 'redux-saga/effects';
import DateFnsAdapter from '@date-io/date-fns';

import { getFlights } from 'api/flights';

import { PERFORM_SEARCH } from 'containers/FlightBookingSearchBox/constants';
import {
  makeSelectSourceCity,
  makeSelectDestinationCity,
  makeSelectTravelDate,
  makeSelectReturnDate,
} from 'containers/FlightBookingSearchBox/selectors';

import { LOAD_DATA } from './constants';
import { loadData, loadDataSuccess, loadDataFail } from './actions';

const dateFns = new DateFnsAdapter();

export function* reloadData() {
  yield put(loadData());
}

export function* loadFlights() {
  try {
    const sourceCity = yield select(makeSelectSourceCity());
    const destinationCity = yield select(makeSelectDestinationCity());
    const travelDate = yield select(makeSelectTravelDate());
    const returnDate = yield select(makeSelectReturnDate());

    const params = {
      sourceCity: sourceCity.name,
      destinationCity: destinationCity.name,
      travelDate: dateFns.format(travelDate, 'yyyy-MM-dd'),
      returnDate: returnDate ? dateFns.format(returnDate, 'yyyy-MM-dd') : null,
    };

    const res = yield call(getFlights, params);

    if (res) {
      yield put(loadDataSuccess(res));
    } else {
      throw new Error('Request timeout');
    }
  } catch (err) {
    yield put(loadDataFail());
  }
}

// Individual exports for testing
export default function* flightBookingSearchPageSaga() {
  yield all([
    yield takeLatest(PERFORM_SEARCH, reloadData),
    yield takeLatest(LOAD_DATA, loadFlights),
  ]);
}
