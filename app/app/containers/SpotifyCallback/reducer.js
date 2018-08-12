/*
 *
 * Test reducer
 *
 */

import { fromJS } from 'immutable';
import { SET_BANDS, SET_FESTIVALS, SET_SIMILAR_BANDS, SET_TOKEN, LOGOUT } from './constants';

export const initialState = fromJS({
  loading: true,
  error: false,
  auth: {
    loggedIn: false
  },
  songkick: {
    festivals: []
  },
  spotify: {
    similarBands: [],
    token: '',
    topBands: []
  },
});

function spotifyCallbackReducer(state = initialState, action) {
  switch (action.type) {
    case SET_BANDS:
      return state
        // .set('loading', false)
        .set('error', false)
        .setIn(['spotify','topBands'], action.bands);
    case SET_FESTIVALS:
      return state
        .set('loading', false)
        .set('error', false)
        .setIn(['songkick','festivals'], action.festivals);
    case SET_SIMILAR_BANDS:
      return state
        // .set('loading', false)
        .set('error', false)
        .setIn(['spotify','similarBands'], action.bands);
    case SET_TOKEN:
      return state
        // .set('loading', false)
        .set('error', false)
        .setIn(['auth','loggedIn'], true)
        .setIn(['spotify','token'], action.token);
    case LOGOUT:
      return initialState;
    default:
      return state;
  }
}

export default spotifyCallbackReducer;
