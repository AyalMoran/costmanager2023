//  Yael Zvadviker - id:208418384
//  Ofek Avigdor  - id:307837807
//  Ayal Moran - id:311148522 
//
const express = require('express');
const router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
