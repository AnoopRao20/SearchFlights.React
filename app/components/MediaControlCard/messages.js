/*
 * MediaControlCard Messages
 *
 * This contains all the text for the MediaControlCard component.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.components.MediaControlCard';

export default defineMessages({
  albumTitle: {
    id: `${scope}.albumTitle`,
    defaultMessage: 'Live From Space',
  },
  artistTitle: {
    id: `${scope}.artistTitle`,
    defaultMessage: 'Mac Miller',
  },
  albumCover: {
    id: `${scope}.albumCover`,
    defaultMessage: 'Live from space album cover',
  },
  joinMessage: {
    id: `${scope}.joinMessage`,
    defaultMessage: 'To view this content, please join our channel!',
  },
});
