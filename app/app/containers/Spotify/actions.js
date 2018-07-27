/*
 *
 * Spotify actions
 *
 */

import { GET_TOKEN, GET_TOKEN_SUCCESS } from './constants';

export function getToken() {
  return {
    type: GET_TOKEN
  };
}

export function getTokenSuccess(token) {
  return {
    type: GET_TOKEN_SUCCESS,
    token,
  };
}
