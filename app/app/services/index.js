import 'whatwg-fetch';
import querystring from 'querystring'

const options = {
  json: true,
  method: 'GET',
}

// Get top bands from spotify
export function getBands(token) {
  const url = `http://localhost:8001/spotify/top-bands?${querystring.stringify({ token })}`

  return fetch(url, options).then(response => {
    return response.json()
  }).catch(error => {
    console.log(error.body)
  });
}

// Get simmilar bands from spotify
export function getSimilarBands(token, bands) {
  const ids = bands.reduce((carry, band) => {
    return (carry === '') ? band.id : `${carry}___${band.id}`
  }, '')

  const url = `http://localhost:8001/spotify/similar-bands?${querystring.stringify({ ids, token })}`

  return fetch(url, options).then(response => {
    return response.json()
  }).catch(error => {
    console.log(error.body)
  })
}

// Play band
export function playBand(token, uri) {
  console.log(uri)
  const url = `http://localhost:8001/spotify/play?${querystring.stringify({ token, uri })}`

  return fetch(url, options).then(response => {
    console.log('play')
  }).catch(error => {
    console.log(error.body)
  });
}

// Get festivals from songkick
export function getFestivals(topBands, similarBands) {
  topBands = topBands.reduce((carry, band) => {
    return (carry === '') ? band.name : `${carry}___${band.name}`
  }, '')

  similarBands = similarBands.reduce((carry, band) => {
    return (carry === '') ? band.name : `${carry}___${band.name}`
  }, '')

  const url = `http://localhost:8001/songkick/festivals?${querystring.stringify({ topBands, similarBands })}`

  return fetch(url, options).then(response => {
    return response.json()
  }).catch(error => {
    console.log(error)
  })
}

//
function getHashParams() {
  let hashParams = {};
  let e, r = /([^&;=]+)=?([^&;]*)/g
  let q = window.location.hash.substring(1);
  while ( e = r.exec(q)) {
    hashParams[e[1]] = decodeURIComponent(e[2]);
  }
  return hashParams
}

export function getToken() {
  const hashParams = getHashParams()

  return hashParams.access_token
}
