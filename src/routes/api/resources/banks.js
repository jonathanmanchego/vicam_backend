const express = require('express');
const router = express.Router();
const db = require('../../../../models');

router.get('/', async (req, res) => {
  try {
    const data = await db.Bank.findAll();
    res.json({
      data,
      error: false,
    });
  } catch (error) {
    res.json({
      error: true,
    });
  }
});

router.post('/create', async (req, res) => {
  try {
    const data = await db.Bank.findAll();
    res.json({
      data,
      error: false,
    });
  } catch (error) {
    res.json({
      error: true,
    });
  }
});

router.get('/show/:id', (req, res) => {
  res.json([
    {
      id: 1,
      number: 101,
    },
  ]);
});
module.exports = router;
