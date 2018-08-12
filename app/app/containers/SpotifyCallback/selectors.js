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

const spotifyToken = () =>
  createSelector(selectSpotifyCallbackDomain, substate => substate.getIn(['spotify','token']));

const songkickFestival = () =>
  createSelector(selectSpotifyCallbackDomain, substate => substate.getIn(['songkick','festivals']));

const songkickFestivals = () =>
  createSelector(selectSpotifyCallbackDomain, substate => {
    const festivals = substate.getIn(['songkick','festivals'])
    console.log(substate.toJS())
    console.log(festivals)
    return festivals
  });

export default makeSelectSpotifyCallback;
export {
  selectSpotifyCallbackDomain,
  songkickFestival,
  songkickFestivals,
  spotifySimilarBands,
  spotifyToken,
  spotifyTopBands
};
