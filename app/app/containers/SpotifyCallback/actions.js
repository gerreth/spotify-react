/*
 *
 * Test actions
 *
 */
import { SET_BANDS, SET_FESTIVALS, SET_SIMILAR_BANDS, SET_TOKEN, LOGOUT } from './constants';

export function setBands(bands) {
  return {
    type: SET_BANDS,
    bands,
  };
}

export function setFestivals(festivals) {
  return {
    type: SET_FESTIVALS,
    festivals,
  };
}

export function setSimilarBands(bands) {
  return {
    type: SET_SIMILAR_BANDS,
    bands,
  };
}

export function setToken(token) {
  return {
    type: SET_TOKEN,
    token,
  };
}

export function logout() {
  console.log('logout action')
  return {
    type: LOGOUT,
  };
}
