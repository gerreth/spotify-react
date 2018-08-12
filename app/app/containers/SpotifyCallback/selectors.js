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

const loading = () =>
  createSelector(selectSpotifyCallbackDomain, substate => substate.get('loading'));

const spotifySimilarBands = () =>
  createSelector(selectSpotifyCallbackDomain, substate => substate.getIn(['spotify','similarBands']));

const spotifyTopBands = () =>
  createSelector(selectSpotifyCallbackDomain, substate => substate.getIn(['spotify','topBands']));

const spotifyToken = () =>
  createSelector(selectSpotifyCallbackDomain, substate => substate.getIn(['spotify','token']));

const songkickFestivals = () =>
  createSelector(selectSpotifyCallbackDomain, substate => substate.getIn(['songkick','festivals']));

const songkickFestival = () =>
  createSelector(selectSpotifyCallbackDomain, substate => {
    const festivals = substate.getIn(['songkick','festivals'])
    return festivals
  });

export default makeSelectSpotifyCallback;
export {
  loading,
  selectSpotifyCallbackDomain,
  songkickFestival,
  songkickFestivals,
  spotifySimilarBands,
  spotifyToken,
  spotifyTopBands
};
