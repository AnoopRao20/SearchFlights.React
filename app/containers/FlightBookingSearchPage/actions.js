/*
 *
 * FlightBookingSearchPage actions
 *
 */

import {
  RESET_STATE,
  LOAD_DATA,
  LOAD_DATA_SUCCESS,
  LOAD_DATA_FAIL,
} from './constants';

export function resetState() {
  return {
    type: RESET_STATE,
  };
}

export function loadData() {
  return {
    type: LOAD_DATA,
  };
}

export function loadDataSuccess(tableData) {
  return {
    type: LOAD_DATA_SUCCESS,
    tableData,
  };
}

export function loadDataFail() {
  return {
    type: LOAD_DATA_FAIL,
  };
}
