const express = require('express');
const router = express.Router();
const fs = require('fs');
const best = JSON.parse(
  fs.readFileSync('./public/data/best.json', 'utf8')
);

router.get('/', (req, res, next) => {
  res.json(best);
});

module.exports = router;
