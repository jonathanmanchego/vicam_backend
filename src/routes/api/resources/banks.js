const express = require('express')
const router = express.Router();

router.get('/', (req, res) => {
  res.json([{
    id: 1,
    number: 101
  }]);
});

router.post('/create', (req, res) => {

});

router.get('/show/:id', (req, res) => {
  res.json([{
    id: 1,
    number: 101
  }]);
});
module.exports = router;
