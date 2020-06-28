/*
 * FlightBookingSearchPage Messages
 *
 * This contains all the text for the FlightBookingSearchPage container.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.containers.FlightBookingSearchPage';

export default defineMessages({
  title: {
    id: `${scope}.title`,
    defaultMessage: 'Flight Booking',
  },
  description: {
    id: `${scope}.description`,
    defaultMessage: 'Flight Booking',
  },
  flightNumber: {
    id: `${scope}.flightNumber`,
    defaultMessage: 'Flight Number',
  },
  airlineName: {
    id: `${scope}.airlineName`,
    defaultMessage: 'Airline Name',
  },
  departureTime: {
    id: `${scope}.departureTime`,
    defaultMessage: 'Departure Time',
  },
  arrivalTime: {
    id: `${scope}.arrivalTime`,
    defaultMessage: 'Arrival Time',
  },
  duration: {
    id: `${scope}.duration`,
    defaultMessage: 'Duration',
  },
  noOfStops: {
    id: `${scope}.noOfStops`,
    defaultMessage: 'No. Of Stops',
  },
  price: {
    id: `${scope}.price`,
    defaultMessage: 'Price',
  },
  errorTitle: {
    id: `${scope}.errorTitle`,
    defaultMessage: 'An error has occurred',
  },
  errorBody: {
    id: `${scope}.errorBody`,
    defaultMessage:
      'There was an issue with loading your flights, please try again in a few moments.',
  },
  retry: {
    id: `${scope}.retry`,
    defaultMessage: 'Retry',
  },
});
