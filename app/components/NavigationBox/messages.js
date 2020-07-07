import { defineMessages } from 'react-intl';

const scope = 'app.component.NavigationBox';

export default defineMessages({
  welcomeHeader: {
    id: `${scope}.welcomeHeader`,
    defaultMessage: 'Welcome to demo application!',
  },
  searchFlights: {
    id: `${scope}.searchFlights`,
    defaultMessage: 'Search Flights',
  },
  media: {
    id: `${scope}.media`,
    defaultMessage: 'Media',
  },
});
