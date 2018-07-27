import express from 'express'

import spotifyService from '../services/spotifyService'

const router = express.Router()

/*
 * Home route
 */
router.get('/', (req, res, next) => {
  res.send('respond with a resource')
})

/*
 * Get related bands
 */
router.get('/similar-bands', (req, res, next) => {
  const ids = req.query.ids.split('___')
  const token = req.query.token

  new spotifyService(token).getSimilarBands(ids).then(similarBands => {
    return res.send(similarBands)
  })
})

/*
 * Get top bands for user (new)
 */
router.get('/top-bands', (req, res, next) => {
  const token = req.query.token

  new spotifyService(token).getTopBands().then(topBands => {
    return res.send(topBands)
  })
})

module.exports = router
