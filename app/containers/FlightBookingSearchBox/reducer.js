/*
 *
 * FlightBookingSearchBox reducer
 *
 */
import produce from 'immer';
import {
  RESET_STATE,
  LOAD_SOURCE_CITIES,
  LOAD_SOURCE_CITIES_SUCCESS,
  LOAD_SOURCE_CITIES_FAIL,
  LOAD_DESTINATION_CITIES,
  LOAD_DESTINATION_CITIES_SUCCESS,
  LOAD_DESTINATION_CITIES_FAIL,
  SOURCE_CITY_CHANGE,
  DESTINATION_CITY_CHANGE,
  TRAVEL_DATE_CHANGE,
  RETURN_DATE_CHANGE,
} from './constants';

export const initialState = {
  sourceCities: {
    list: [],
    loading: false,
    error: false,
  },
  destinationCities: {
    list: [],
    loading: false,
    error: false,
  },
  filters: {
    sourceCity: null,
    destinationCity: null,
    travelDate: new Date(),
    returnDate: null,
  },
  sourceCityTouched: false,
  destinationCityTouched: false,
  travelDateTouched: false,
};

/* eslint-disable default-case, no-param-reassign */
const flightBookingSearchBoxReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case RESET_STATE:
        draft = undefined;
        break;

      case LOAD_SOURCE_CITIES:
        draft.sourceCities.loading = true;
        draft.sourceCities.error = false;
        draft.sourceCities.list = [];
        break;

      case LOAD_SOURCE_CITIES_SUCCESS:
        draft.sourceCities.loading = false;
        draft.sourceCities.list = action.cities;
        break;

      case LOAD_SOURCE_CITIES_FAIL:
        draft.sourceCities.loading = false;
        draft.sourceCities.error = true;
        break;

      case LOAD_DESTINATION_CITIES:
        draft.destinationCities.loading = true;
        draft.destinationCities.error = false;
        draft.destinationCities.list = [];
        break;

      case LOAD_DESTINATION_CITIES_SUCCESS:
        draft.destinationCities.loading = false;
        draft.destinationCities.list = action.cities;
        break;

      case LOAD_DESTINATION_CITIES_FAIL:
        draft.destinationCities.loading = false;
        draft.destinationCities.error = true;
        break;

      case SOURCE_CITY_CHANGE:
        draft.filters.sourceCity = action.sourceCity;
        draft.sourceCityTouched = true;
        break;

      case DESTINATION_CITY_CHANGE:
        draft.filters.destinationCity = action.destinationCity;
        draft.destinationCityTouched = true;
        break;

      case TRAVEL_DATE_CHANGE:
        draft.filters.travelDate = action.travelDate;
        draft.travelDateTouched = true;
        break;

      case RETURN_DATE_CHANGE:
        draft.filters.returnDate = action.returnDate;
        break;
    }
  });

export default flightBookingSearchBoxReducer;
