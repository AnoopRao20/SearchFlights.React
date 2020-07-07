import React from 'react';
import { Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import styled from 'styled-components';
import { Paper, Typography } from '@material-ui/core';
import messages from './messages';

const PaddedPaper = styled(Paper)`
  && {
    padding: 20px;
  }
`;

const Content = styled.div`
  text-align: center;
  display: 'flex';
  flex-flow: 'row wrap';
  align-items: 'center';
  justify-content: 'center';
`;

const StyledLink = styled(Link)`
  && {
    flex-grow: 1;
    margin: 20px;
    font-size: 1.2em;
  }
`;

export function NavigationBox() {
  return (
    <>
      <PaddedPaper square>
        <Content>
          <Typography variant="h2">
            <FormattedMessage {...messages.welcomeHeader} />
          </Typography>
          <StyledLink to="/Flights">
            <FormattedMessage {...messages.searchFlights} />
          </StyledLink>
          <StyledLink to="/Media">
            <FormattedMessage {...messages.media} />
          </StyledLink>
        </Content>
      </PaddedPaper>
    </>
  );
}

export default NavigationBox;
