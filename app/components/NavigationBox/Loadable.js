/**
 *
 * Asynchronously loads the component for NavigationBox
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
