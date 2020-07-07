/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React from 'react';
import { Switch, Route } from 'react-router-dom';

import FlightBookingSearchPage from 'containers/FlightBookingSearchPage/Loadable';
import NavigationBox from 'components/NavigationBox';
import MediaControlCard from 'components/MediaControlCard';
import ColorBox from 'components/ColorBox';
import NotFoundPage from 'containers/NotFoundPage/Loadable';

import GlobalStyle from '../../global-styles';

export default function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={NavigationBox} />
        <Route path="/Flights" component={FlightBookingSearchPage} />
        <Route path="/Media" component={MediaControlCard} />
        <Route path="/Colorbox" component={ColorBox} />
        <Route component={NotFoundPage} />
      </Switch>
      <GlobalStyle />
    </div>
  );
}
