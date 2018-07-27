/*
 *
 * Spotify reducer
 *
 */

import { fromJS } from 'immutable';
import { GET_TOKEN, GET_TOKEN_SUCCESS } from './constants';

export const initialState = fromJS({
  loading: false,
  error: false,
});

function spotifyReducer(state = initialState, action) {
  switch (action.type) {
    case GET_TOKEN:
      return state
        .set('loading', true)
        .set('error', false)
    case GET_TOKEN_SUCCESS:
      return state
        .set('error', false)
        .set('loading', false);
    default:
      return state;
  }
}

export default spotifyReducer;
