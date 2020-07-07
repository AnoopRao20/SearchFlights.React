import React, { useState } from 'react';
import { Backdrop, Button, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';
import messages from './messages';

// set styles
const useStyles = makeStyles(theme => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
}));

const StyledDiv = styled.div`
  display: 'flex';
  flex-flow: 'row wrap';
  align-items: 'center';
  justify-content: 'center';
`;

const StyledButton = styled(Button)`
  && {
    flex-grow: 1;
    margin: 20px;
    font-size: 1.2em;
  }
`;

const Text = styled(Typography)`
  width: 100% !important;
`;

const Content = styled.div`
  text-align: center;
`;

export const OverlayHoc = (WrappedComponent, loadingMessage) => {
  function Hoc(props) {
    const classess = useStyles();
    const [isOpen, setOpen] = useState(false);

    const handleClose = () => {
      setOpen(false);
    };

    const setOpenState = isComponentOpen => {
      setOpen(isComponentOpen);
    };

    return (
      <StyledDiv>
        <Backdrop className={classess.backdrop} open={isOpen}>
          <Content>
            <Text variant="h4">{loadingMessage}</Text>
            <StyledButton
              variant="contained"
              color="primary"
              onClick={handleClose}
            >
              <FormattedMessage {...messages.buttonJoin} />
            </StyledButton>
          </Content>
        </Backdrop>
        <WrappedComponent {...props} setOpen={setOpenState} />
      </StyledDiv>
    );
  }

  return Hoc;
};

export default OverlayHoc;
