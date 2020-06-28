/*
 * FlightBookingSearchBox Messages
 *
 * This contains all the text for the FlightBookingSearchBox container.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.containers.FlightBookingSearchBox';

export default defineMessages({
  sourceCityPlaceholder: {
    id: `${scope}.sourceCityPlaceholder`,
    defaultMessage: 'Source City',
  },
  destinationCityPlaceholder: {
    id: `${scope}.destinationCityPlaceholder`,
    defaultMessage: 'Destination City',
  },
  travelDate: {
    id: `${scope}.travelDate`,
    defaultMessage: 'Travel Date',
  },
  returnDate: {
    id: `${scope}.returnDate`,
    defaultMessage: 'Return Date',
  },
  search: {
    id: `${scope}.search`,
    defaultMessage: 'Search',
  },
});
