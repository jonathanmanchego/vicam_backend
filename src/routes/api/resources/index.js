const express = require('express')
const banks = require('./banks')
const router = express.Router();
router.use('/banks', banks);
router.get('/', (req, res) => {
  res.send('api inicio');
});

module.exports = router;
