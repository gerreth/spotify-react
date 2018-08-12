/**
 * Asynchronously loads the component for FestivalDetails
 */
import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});
