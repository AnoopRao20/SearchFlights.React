/**
 *
 * Asynchronously loads the component for ColorBox
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
