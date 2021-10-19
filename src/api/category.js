const express = require('express');
const router = express.Router();
const fs = require('fs');

router.get('/:category', (req, res, next) => {
  var category = req.params;
  res.json(
    JSON.parse(
      fs.readFileSync(`./public/data/${category.category}.json`, 'utf8')
    )
  );
});

module.exports = router;
