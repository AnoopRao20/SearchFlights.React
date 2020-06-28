/**
 * Test sagas
 */

/* eslint-disable redux-saga/yield-effects */
import { put, takeLatest } from 'redux-saga/effects';
import { LOAD_SOURCE_CITIES } from '../constants';
import { loadSourceCitiesSuccess, loadSourceCitiesFail } from '../actions';

import flightBookingSearchBoxSaga, { loadSourceCities } from '../saga';

const name = 'Jaipur';

describe('loadSourceCities Saga', () => {
  let getSourceCityGenerator;

  beforeEach(() => {
    getSourceCityGenerator = loadSourceCities(name);

    const callDescriptor = getSourceCityGenerator.next(name).value;
    expect(callDescriptor).toMatchSnapshot();
  });

  it('should dispatch the loadSourceCitiesSuccess action if it requests the data successfully', () => {
    const response = [
      {
        id: '9',
        name: 'Jaipur',
        state: 'Rajasthan',
      },
    ];
    const putDescriptor = getSourceCityGenerator.next(response).value;
    expect(putDescriptor).toEqual(put(loadSourceCitiesSuccess(response)));
  });

  it('should call the loadSourceCitiesFail action if the response errors', () => {
    const response = new Error('Some error');
    const putDescriptor = getSourceCityGenerator.throw(response).value;
    expect(putDescriptor).toEqual(put(loadSourceCitiesFail()));
  });
});

describe('flightBookingSearchBoxSaga Saga', () => {
  const sourceCityDataSaga = flightBookingSearchBoxSaga();

  it('should start task to watch for LOAD_SOURCE_CITIES action', () => {
    const takeLatestDescriptor = sourceCityDataSaga.next().value;
    expect(takeLatestDescriptor).toEqual(
      takeLatest(LOAD_SOURCE_CITIES, loadSourceCities),
    );
  });
});
