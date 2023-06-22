//  Yael Zvadviker - id:208418384
//  Ofek Avigdor  - id:307837807
//  Ayal Moran - id:311148522 
//
const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
