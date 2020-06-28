import { createSelector } from 'reselect';
import DateFnsAdapter from '@date-io/date-fns';

import { initialState } from './reducer';

const dateFns = new DateFnsAdapter();

/**
 * Direct selector to the flightBookingSearchBox state domain
 */

const selectFlightBookingSearchBoxDomain = state =>
  state.flightBookingSearchBox || initialState;

/**
 * Other specific selectors
 */

const makeSelectSourceCityLoading = () =>
  createSelector(
    selectFlightBookingSearchBoxDomain,
    state => state.sourceCities.loading,
  );

const makeSelectDestinationCityLoading = () =>
  createSelector(
    selectFlightBookingSearchBoxDomain,
    state => state.destinationCities.loading,
  );

const makeSelectError = () =>
  createSelector(
    selectFlightBookingSearchBoxDomain,
    state => state.sourceCities.error || state.destinationCities.error,
  );

const makeSelectFormValid = () =>
  createSelector(
    makeSelectSourceCity(),
    makeSelectDestinationCity(),
    makeSelectTravelDate(),
    (sourceCity, destinationCity, travelDate) =>
      !!(
        sourceCity &&
        destinationCity &&
        travelDate &&
        dateFns.isValid(travelDate)
      ),
  );

const makeSelectShowSourceCityError = () =>
  createSelector(
    selectFlightBookingSearchBoxDomain,
    makeSelectSourceCity(),
    (state, sourceCity) => !!(state.sourceCityTouched && !sourceCity),
  );

const makeSelectShowDestinationCityError = () =>
  createSelector(
    selectFlightBookingSearchBoxDomain,
    makeSelectDestinationCity(),
    (state, destinationCity) =>
      !!(state.destinationCityTouched && !destinationCity),
  );

const makeSelectShowTravelDateError = () =>
  createSelector(
    selectFlightBookingSearchBoxDomain,
    makeSelectTravelDate(),
    (state, travelDate) =>
      !!(
        state.travelDateTouched &&
        (!travelDate || !dateFns.isValid(travelDate))
      ),
  );

const makeSelectSourceCities = () =>
  createSelector(
    selectFlightBookingSearchBoxDomain,
    state => state.sourceCities.list,
  );

const makeSelectDestinationCities = () =>
  createSelector(
    selectFlightBookingSearchBoxDomain,
    state => state.destinationCities.list,
  );

const makeSelectSourceCity = () =>
  createSelector(
    selectFlightBookingSearchBoxDomain,
    state => state.filters.sourceCity,
  );

const makeSelectDestinationCity = () =>
  createSelector(
    selectFlightBookingSearchBoxDomain,
    state => state.filters.destinationCity,
  );

const makeSelectTravelDate = () =>
  createSelector(
    selectFlightBookingSearchBoxDomain,
    state => state.filters.travelDate,
  );

const makeSelectReturnDate = () =>
  createSelector(
    selectFlightBookingSearchBoxDomain,
    state => state.filters.returnDate,
  );

/**
 * Default selector used by FlightBookingSearchBox
 */

const makeSelectFlightBookingSearchBox = () =>
  createSelector(
    selectFlightBookingSearchBoxDomain,
    substate => substate,
  );

export default makeSelectFlightBookingSearchBox;
export {
  selectFlightBookingSearchBoxDomain,
  makeSelectSourceCities,
  makeSelectDestinationCities,
  makeSelectSourceCityLoading,
  makeSelectDestinationCityLoading,
  makeSelectError,
  makeSelectSourceCity,
  makeSelectDestinationCity,
  makeSelectTravelDate,
  makeSelectReturnDate,
  makeSelectFormValid,
  makeSelectShowSourceCityError,
  makeSelectShowDestinationCityError,
  makeSelectShowTravelDateError,
};
