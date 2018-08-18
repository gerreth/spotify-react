import express from 'express'

import songkickService from '../services/songkickService'
import songkick from '../controllers/songkick'

const router = express.Router()

/*
 * Home route
 */
router.get('/', (req, res) => {
  res.send('respond with a resource')
})

/*
 * Get festivals
 */
router.post('/festivals-new', songkick.get_festivals)
// router.post('/festivals-new', (req, res) => {
//   const topBands = req.body.topBands
//   const similarBands = req.body.similarBands
//
//   console.log('topBands', topBands)
//   console.log('similarBands', similarBands
// )
//   const festivals = songkick.get_festivals()
//   console.log('festivals')
//
//   console.log(festivals)
// })

/*
 * Get festivals
 */
router.get('/festivals', (req, res) => {
  const topBands = req.query.topBands.split('___')
  const similarBands = req.query.similarBands.split('___')

  new songkickService(similarBands, topBands).getFestivals().then(festivals => {
    return res.send(festivals)
  }).catch(error => {
    res.send({})
  })
})

module.exports = router
