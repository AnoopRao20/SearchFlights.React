/*
 *
 * FlightBookingSearchPage reducer
 *
 */
import produce from 'immer';
import {
  RESET_STATE,
  LOAD_DATA,
  LOAD_DATA_SUCCESS,
  LOAD_DATA_FAIL,
} from './constants';

export const initialState = {
  loading: false,
  error: false,
  tableData: [],
};

/* eslint-disable default-case, no-param-reassign */
const flightBookingSearchPageReducer = (state = initialState, action) =>
  // eslint-disable-next-line consistent-return
  produce(state, draft => {
    switch (action.type) {
      case RESET_STATE:
        return initialState;

      case LOAD_DATA:
        draft.loading = true;
        draft.error = false;
        draft.tableData = [];
        break;

      case LOAD_DATA_SUCCESS:
        draft.loading = false;
        draft.tableData = action.tableData;
        break;

      case LOAD_DATA_FAIL:
        draft.loading = false;
        draft.error = true;
        break;
    }
  });

export default flightBookingSearchPageReducer;
