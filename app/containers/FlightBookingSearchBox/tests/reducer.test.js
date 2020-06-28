import produce from 'immer';
import flightBookingSearchBoxReducer, { initialState } from '../reducer';
import {
  loadSourceCities,
  loadSourceCitiesSuccess,
  loadSourceCitiesFail,
  loadDestinationCities,
  loadDestinationCitiesSuccess,
  loadDestinationCitiesFail,
} from '../actions';

/* eslint-disable default-case, no-param-reassign */
describe('flightBookingSearchBoxReducer', () => {
  let state;
  beforeEach(() => {
    state = initialState;
  });

  it('returns the initial state', () => {
    const expectedResult = state;
    expect(flightBookingSearchBoxReducer(undefined, {})).toEqual(
      expectedResult,
    );
  });

  it('should handle the loadSourceCities action correctly', () => {
    const expectedResult = produce(state, draft => {
      draft.sourceCities.loading = true;
      draft.sourceCities.error = false;
      draft.sourceCities.list = [];
    });
    expect(flightBookingSearchBoxReducer(state, loadSourceCities())).toEqual(
      expectedResult,
    );
  });

  it('should handle the loadSourceCitiesSuccess action correctly', () => {
    const cities = [
      {
        id: '1',
        name: 'Mumbai',
        state: 'Maharashtra',
      },
      {
        id: '2',
        name: 'Delhi',
        state: 'Delhi',
      },
    ];
    const expectedResult = produce(state, draft => {
      draft.sourceCities.loading = false;
      draft.sourceCities.error = false;
      draft.sourceCities.list = cities;
    });
    expect(
      flightBookingSearchBoxReducer(state, loadSourceCitiesSuccess(cities)),
    ).toEqual(expectedResult);
  });

  it('should handle the loadSourceCitiesFail action correctly', () => {
    const expectedResult = produce(state, draft => {
      draft.sourceCities.loading = false;
      draft.sourceCities.error = true;
      draft.sourceCities.list = [];
    });
    expect(
      flightBookingSearchBoxReducer(state, loadSourceCitiesFail()),
    ).toEqual(expectedResult);
  });

  it('should handle the loadDestinationCities action correctly', () => {
    const expectedResult = produce(state, draft => {
      draft.destinationCities.loading = true;
      draft.destinationCities.error = false;
      draft.destinationCities.list = [];
    });
    expect(
      flightBookingSearchBoxReducer(state, loadDestinationCities()),
    ).toEqual(expectedResult);
  });

  it('should handle the loadDestinationCitiesSuccess action correctly', () => {
    const cities = [
      {
        id: '1',
        name: 'Mumbai',
        state: 'Maharashtra',
      },
      {
        id: '2',
        name: 'Delhi',
        state: 'Delhi',
      },
    ];
    const expectedResult = produce(state, draft => {
      draft.destinationCities.loading = false;
      draft.destinationCities.error = false;
      draft.destinationCities.list = cities;
    });
    expect(
      flightBookingSearchBoxReducer(
        state,
        loadDestinationCitiesSuccess(cities),
      ),
    ).toEqual(expectedResult);
  });

  it('should handle the loadDestinationCitiesFail action correctly', () => {
    const expectedResult = produce(state, draft => {
      draft.destinationCities.loading = false;
      draft.destinationCities.error = true;
      draft.destinationCities.list = [];
    });
    expect(
      flightBookingSearchBoxReducer(state, loadDestinationCitiesFail()),
    ).toEqual(expectedResult);
  });
});
