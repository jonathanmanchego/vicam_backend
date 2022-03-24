const router = require('express').Router();
const api = require('./api');

module.exports = app => {
  app.use('/api/v1', api)
  router.get('***', (req, res) => {
    res.send('Fin')
  })
}
