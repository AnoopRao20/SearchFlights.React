/**
 *
 * FlightBookingSearchBox
 *
 */

import React, { memo, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { debounce } from 'lodash';
import styled from 'styled-components';
import CircularProgress from '@material-ui/core/CircularProgress';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';

import { Paper, Grid, Button } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';

import {
  makeSelectSourceCities,
  makeSelectDestinationCities,
  makeSelectSourceCityLoading,
  makeSelectDestinationCityLoading,
  makeSelectSourceCity,
  makeSelectDestinationCity,
  makeSelectTravelDate,
  makeSelectReturnDate,
  makeSelectFormValid,
  makeSelectShowSourceCityError,
  makeSelectShowDestinationCityError,
  makeSelectShowTravelDateError,
} from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import * as actions from './actions';

const PaddedPaper = styled(Paper)`
  && {
    padding: 20px;
  }
`;

const FlexGrid = styled(Grid)`
  && {
    display: flex;
  }
`;

const StyledButton = styled(Button)`
  && {
    flex-grow: 1;
  }
`;

export function FlightBookingSearchBox({
  resetState,
  loadSourceCities,
  loadDestinationCities,
  onSourceCityChange,
  onDestinationCityChange,
  onTravelDateChange,
  onReturnDateChange,
  onSearchClick,
  sourceCities,
  destinationCities,
  sourceCityLoading,
  destinationCityLoading,
  sourceCity,
  destinationCity,
  travelDate,
  returnDate,
  formValid,
  showSourceCityError,
  showDestinationCityError,
  showTravelDateError,
}) {
  useInjectReducer({ key: 'flightBookingSearchBox', reducer });
  useInjectSaga({ key: 'flightBookingSearchBox', saga });

  useEffect(() => {
    loadSourceCities();
    loadDestinationCities();
    return () => {
      resetState();
    };
  }, []);

  return (
    <React.Fragment>
      <PaddedPaper square>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={3}>
              <Autocomplete
                id="flightBookingSourceCity"
                getOptionSelected={(option, value) =>
                  option.name === value.name
                }
                getOptionLabel={option => option.name}
                options={sourceCities}
                value={sourceCity}
                loading={sourceCityLoading}
                onChange={(_event, newValue) => {
                  onSourceCityChange(newValue);
                }}
                onInputChange={(event, value) => {
                  if (event && event.type === 'change') {
                    loadSourceCities(value);
                  }
                  return value;
                }}
                renderInput={params => (
                  <TextField
                    {...params}
                    required
                    error={showSourceCityError}
                    label={
                      <FormattedMessage {...messages.sourceCityPlaceholder} />
                    }
                    variant="outlined"
                    InputProps={{
                      ...params.InputProps,
                      endAdornment: (
                        <React.Fragment>
                          {sourceCityLoading ? (
                            <CircularProgress color="inherit" size={20} />
                          ) : null}
                          {params.InputProps.endAdornment}
                        </React.Fragment>
                      ),
                    }}
                  />
                )}
              />
            </Grid>
            <Grid item xs={12} sm={3}>
              <Autocomplete
                id="flightBookingDestinationCity"
                getOptionSelected={(option, value) =>
                  option.name === value.name
                }
                getOptionLabel={option => option.name}
                options={destinationCities}
                value={destinationCity}
                loading={destinationCityLoading}
                onChange={(_event, newValue) => {
                  onDestinationCityChange(newValue);
                }}
                onInputChange={(event, value) => {
                  if (event && event.type === 'change') {
                    loadDestinationCities(value);
                  }
                  return value;
                }}
                renderInput={params => (
                  <TextField
                    {...params}
                    required
                    error={showDestinationCityError}
                    label={
                      <FormattedMessage
                        {...messages.destinationCityPlaceholder}
                      />
                    }
                    variant="outlined"
                    InputProps={{
                      ...params.InputProps,
                      endAdornment: (
                        <React.Fragment>
                          {sourceCityLoading ? (
                            <CircularProgress color="inherit" size={20} />
                          ) : null}
                          {params.InputProps.endAdornment}
                        </React.Fragment>
                      ),
                    }}
                  />
                )}
              />
            </Grid>
            <Grid item xs={6} sm={2}>
              <KeyboardDatePicker
                disableToolbar
                required
                error={showTravelDateError}
                variant="inline"
                format="dd/MM/yyyy"
                margin="normal"
                id="date-picker-travel-date"
                label={<FormattedMessage {...messages.travelDate} />}
                value={travelDate}
                onChange={onTravelDateChange}
                KeyboardButtonProps={{
                  'aria-label': 'change date',
                }}
              />
            </Grid>
            <Grid item xs={6} sm={2}>
              <KeyboardDatePicker
                disableToolbar
                variant="inline"
                format="dd/MM/yyyy"
                margin="normal"
                id="date-picker-return-date"
                label={<FormattedMessage {...messages.returnDate} />}
                value={returnDate}
                onChange={onReturnDateChange}
                KeyboardButtonProps={{
                  'aria-label': 'change date',
                }}
              />
            </Grid>
            <FlexGrid item xs={12} sm={2}>
              <StyledButton
                id="button-search"
                type="submit"
                variant="contained"
                color="primary"
                disabled={!formValid}
                onClick={() => onSearchClick()}
              >
                <FormattedMessage {...messages.search} />
              </StyledButton>
            </FlexGrid>
          </Grid>
        </MuiPickersUtilsProvider>
      </PaddedPaper>
    </React.Fragment>
  );
}

FlightBookingSearchBox.propTypes = {
  dispatch: PropTypes.func.isRequired,
  resetState: PropTypes.func,
  loadSourceCities: PropTypes.func,
  loadDestinationCities: PropTypes.func,
  onSourceCityChange: PropTypes.func,
  onDestinationCityChange: PropTypes.func,
  onTravelDateChange: PropTypes.func,
  onReturnDateChange: PropTypes.func,
  onSearchClick: PropTypes.func,
  sourceCities: PropTypes.array,
  destinationCities: PropTypes.array,
  sourceCityLoading: PropTypes.bool,
  destinationCityLoading: PropTypes.bool,
  sourceCity: PropTypes.object,
  destinationCity: PropTypes.object,
  travelDate: PropTypes.object,
  returnDate: PropTypes.object,
  formValid: PropTypes.bool,
  showSourceCityError: PropTypes.bool,
  showDestinationCityError: PropTypes.bool,
  showTravelDateError: PropTypes.bool,
};

const mapStateToProps = createStructuredSelector({
  sourceCities: makeSelectSourceCities(),
  destinationCities: makeSelectDestinationCities(),
  sourceCityLoading: makeSelectSourceCityLoading(),
  destinationCityLoading: makeSelectDestinationCityLoading(),
  sourceCity: makeSelectSourceCity(),
  destinationCity: makeSelectDestinationCity(),
  travelDate: makeSelectTravelDate(),
  returnDate: makeSelectReturnDate(),
  formValid: makeSelectFormValid(),
  showSourceCityError: makeSelectShowSourceCityError(),
  showDestinationCityError: makeSelectShowDestinationCityError(),
  showTravelDateError: makeSelectShowTravelDateError(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    resetState: () => dispatch(actions.resetState()),
    loadSourceCities: debounce(
      name => dispatch(actions.loadSourceCities(name)),
      500,
    ),
    loadDestinationCities: debounce(
      name => dispatch(actions.loadDestinationCities(name)),
      500,
    ),
    onSourceCityChange: sourceCity => {
      dispatch(actions.sourceCityChange(sourceCity));
    },
    onDestinationCityChange: destinationCity =>
      dispatch(actions.destinationCityChange(destinationCity)),
    onTravelDateChange: travelDate =>
      dispatch(actions.travelDateChange(travelDate)),
    onReturnDateChange: returnDate =>
      dispatch(actions.returnDateChange(returnDate)),
    onSearchClick: () => dispatch(actions.performSearch()),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(FlightBookingSearchBox);
