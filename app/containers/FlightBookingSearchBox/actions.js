/*
 *
 * FlightBookingSearchBox actions
 *
 */

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
  PERFORM_SEARCH,
} from './constants';

export function resetState() {
  return {
    type: RESET_STATE,
  };
}

export function loadSourceCities(name) {
  return {
    type: LOAD_SOURCE_CITIES,
    name,
  };
}

export function loadSourceCitiesSuccess(cities) {
  return {
    type: LOAD_SOURCE_CITIES_SUCCESS,
    cities,
  };
}

export function loadSourceCitiesFail() {
  return {
    type: LOAD_SOURCE_CITIES_FAIL,
  };
}

export function loadDestinationCities(name) {
  return {
    type: LOAD_DESTINATION_CITIES,
    name,
  };
}

export function loadDestinationCitiesSuccess(cities) {
  return {
    type: LOAD_DESTINATION_CITIES_SUCCESS,
    cities,
  };
}

export function loadDestinationCitiesFail() {
  return {
    type: LOAD_DESTINATION_CITIES_FAIL,
  };
}

export function sourceCityChange(sourceCity) {
  return {
    type: SOURCE_CITY_CHANGE,
    sourceCity,
  };
}

export function destinationCityChange(destinationCity) {
  return {
    type: DESTINATION_CITY_CHANGE,
    destinationCity,
  };
}

export function travelDateChange(travelDate) {
  return {
    type: TRAVEL_DATE_CHANGE,
    travelDate,
  };
}

export function returnDateChange(returnDate) {
  return {
    type: RETURN_DATE_CHANGE,
    returnDate,
  };
}

export function performSearch() {
  return {
    type: PERFORM_SEARCH,
  };
}
