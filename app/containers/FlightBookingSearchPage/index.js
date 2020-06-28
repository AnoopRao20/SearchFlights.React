/**
 *
 * FlightBookingSearchPage
 *
 */

import React, { memo, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage, injectIntl } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import MaterialTable from 'material-table';
import { Paper, Button } from '@material-ui/core';
import styled from 'styled-components';
import ErrorOutline from '@material-ui/icons/ErrorOutline';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';

import ErrorMessage from 'components/ErrorMessage';
import FlightBookingSearchBox from '../FlightBookingSearchBox/Loadable';

import {
  makeSelectLoading,
  makeSelectError,
  makeSelectTableData,
} from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import * as actions from './actions';

const PaddedPaper = styled(Paper)`
  && {
    margin-top: 20px;
    min-height: 100px;
    position: relative;
    overflow-x: auto;
    z-index: 0;
  }
`;

const StyledError = styled.div`
  && {
    min-height: 500px;
    position: relative;
  }
`;

export function FlightBookingSearchPage({
  intl,
  loading,
  error,
  tableData,
  resetState,
  loadData,
}) {
  useInjectReducer({ key: 'flightBookingSearchPage', reducer });
  useInjectSaga({ key: 'flightBookingSearchPage', saga });

  useEffect(
    () => () => {
      resetState();
    },
    [],
  );

  return (
    <React.Fragment>
      <Helmet>
        <title>Flight Booking</title>
        <meta
          name="description"
          content={<FormattedMessage {...messages.description} />}
        />
      </Helmet>
      <FlightBookingSearchBox />
      <PaddedPaper>
        {error && (
          <StyledError>
            <ErrorMessage
              icon={<ErrorOutline />}
              title={<FormattedMessage {...messages.errorTitle} />}
              body={<FormattedMessage {...messages.errorBody} />}
            >
              <Button variant="contained" color="primary" onClick={loadData}>
                <FormattedMessage {...messages.retry} />
              </Button>
            </ErrorMessage>
          </StyledError>
        )}
        {!error && (
          <MaterialTable
            columns={[
              {
                title: intl.formatMessage({
                  ...messages.flightNumber,
                }),
                field: 'flightNumber',
              },
              {
                title: intl.formatMessage({ ...messages.airlineName }),
                field: 'airlineName',
              },
              {
                title: intl.formatMessage({ ...messages.departureTime }),
                field: 'departureDateTime',
                type: 'datetime',
              },
              {
                title: intl.formatMessage({ ...messages.arrivalTime }),
                field: 'arrivalDateTime',
                type: 'datetime',
              },
              {
                title: intl.formatMessage({ ...messages.duration }),
                field: 'duration',
                type: 'time',
              },
              {
                title: intl.formatMessage({ ...messages.noOfStops }),
                field: 'numberOfStops',
                type: 'numeric',
              },
              {
                title: intl.formatMessage({
                  ...messages.price,
                }),
                field: 'price',
                type: 'currency',
              },
            ]}
            data={tableData}
            isLoading={loading}
            options={{
              padding: 'dense',
              showTitle: false,
              toolbar: false,
              selection: false,
              search: false,
              emptyRowsWhenPaging: false,
              pageSizeOptions: [5, 20, 50, 100],
              pageSize: 5,
              rowStyle: rowData => {
                if (rowData.tableData.id % 2 === 1) {
                  return { backgroundColor: '#f2fafd' };
                }
                return {};
              },
            }}
          />
        )}
      </PaddedPaper>
    </React.Fragment>
  );
}

FlightBookingSearchPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
  intl: PropTypes.object,
  loading: PropTypes.bool,
  error: PropTypes.bool,
  tableData: PropTypes.array,
  resetState: PropTypes.func,
  loadData: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  loading: makeSelectLoading(),
  error: makeSelectError(),
  tableData: makeSelectTableData(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    resetState: () => dispatch(actions.resetState()),
    loadData: () => dispatch(actions.loadData()),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
  injectIntl,
)(FlightBookingSearchPage);
