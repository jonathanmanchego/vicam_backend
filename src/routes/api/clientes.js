const express = require('express');
const router = express.Router();
const { dropbox } = require('../../common/services/index');

router.get('/', (req, res) => {
  dropbox
    .filesListFolder({ path: '' })
    .then((response) => {
      if (res.result.entries) {
        res.json(res.result.entries);
      }
    })
    .catch((error) => {
      res.json(error);
    });
});

router.post('/create', (req, res) => {});

router.get('/show/:id', (req, res) => {
  res.json([
    {
      id: 1,
      number: 101,
    },
  ]);
});
module.exports = router;
