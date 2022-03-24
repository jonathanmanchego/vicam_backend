const express = require('express');
const router = express.Router();
const resources = require('./resources');
const clientes = require('./clientes');
router.use('/resources', resources);
router.use('/clientes', clientes);
router.get('/', (req, res) => {
  res.send('api inicio');
});

module.exports = router;
