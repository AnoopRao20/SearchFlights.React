import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the flightBookingSearchPage state domain
 */

const selectFlightBookingSearchPageDomain = state =>
  state.flightBookingSearchPage || initialState;

/**
 * Other specific selectors
 */

const makeSelectLoading = () =>
  createSelector(
    selectFlightBookingSearchPageDomain,
    state => state.loading,
  );

const makeSelectError = () =>
  createSelector(
    selectFlightBookingSearchPageDomain,
    state => state.error,
  );

const makeSelectTableData = () =>
  createSelector(
    selectFlightBookingSearchPageDomain,
    state => state.tableData,
  );

/**
 * Default selector used by FlightBookingSearchPage
 */

const makeSelectFlightBookingSearchPage = () =>
  createSelector(
    selectFlightBookingSearchPageDomain,
    substate => substate,
  );

export default makeSelectFlightBookingSearchPage;
export {
  selectFlightBookingSearchPageDomain,
  makeSelectLoading,
  makeSelectError,
  makeSelectTableData,
};
