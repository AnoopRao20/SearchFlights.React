/**
 *
 * MediaControlCard
 *
 */

import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import { FormattedMessage } from 'react-intl';
import albumImage from 'images/live-from-space.jpg';
import messages from './messages';
import OverlayHoc from '../OverlayHoc';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: 151,
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  playIcon: {
    height: 38,
    width: 38,
  },
}));

export function MediaControlCard(props) {
  const classes = useStyles();
  const theme = useTheme();
  const { setOpen } = props;

  useEffect(() => {
    setOpen(true);
  }, []);

  return (
    <Card className={classes.root}>
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="h5" variant="h5">
            <FormattedMessage {...messages.albumTitle} />
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            <FormattedMessage {...messages.artistTitle} />
          </Typography>
        </CardContent>
        <div className={classes.controls}>
          <IconButton aria-label="previous">
            {theme.direction === 'rtl' ? (
              <SkipNextIcon />
            ) : (
              <SkipPreviousIcon />
            )}
          </IconButton>
          <IconButton aria-label="play/pause">
            <PlayArrowIcon className={classes.playIcon} />
          </IconButton>
          <IconButton aria-label="next">
            {theme.direction === 'rtl' ? (
              <SkipPreviousIcon />
            ) : (
              <SkipNextIcon />
            )}
          </IconButton>
        </div>
      </div>
      <CardMedia
        className={classes.cover}
        image={albumImage}
        title="Live from space album cover"
      />
    </Card>
  );
}

MediaControlCard.propTypes = {
  setOpen: PropTypes.func,
};

export default OverlayHoc(
  MediaControlCard,
  <FormattedMessage {...messages.joinMessage} />,
);
