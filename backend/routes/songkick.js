import express from 'express'

import songkickService from '../services/songkickService'

const router = express.Router()
// GET home page
router.get('/', (req, res) => {
  res.send('respond with a resource')
})

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
