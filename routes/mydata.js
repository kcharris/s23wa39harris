var express = require('express');
var router = express.Router();

/* GET mydata page. */
router.get('/', function(req, res, next) {
  res.render('mydata', { title: 'Kevin Harris', fact: 'I like to roast veggies' });
});

module.exports = router;
