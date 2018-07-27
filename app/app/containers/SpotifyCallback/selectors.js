import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the test state domain
 */

// const selectSpotifyCallbackDomain = state => state.get('data', initialState);

const selectSpotifyCallbackDomain = state => state.get('data', initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by SpotifyCallback
 */

const makeSelectSpotifyCallback = () =>
  createSelector(selectSpotifyCallbackDomain, substate => substate.toJS());

const spotifySimilarBands = () =>
  createSelector(selectSpotifyCallbackDomain, substate => substate.getIn(['spotify','similarBands']));

const spotifyTopBands = () =>
  createSelector(selectSpotifyCallbackDomain, substate => substate.getIn(['spotify','topBands']));

const songkickFestivals = () =>
  createSelector(selectSpotifyCallbackDomain, substate => substate.getIn(['songkick','festivals']));


export default makeSelectSpotifyCallback;
export {
  selectSpotifyCallbackDomain,
  songkickFestivals,
  spotifySimilarBands,
  spotifyTopBands
};
