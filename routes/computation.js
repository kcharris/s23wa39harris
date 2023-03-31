var express = require('express');
var router = express.Router();

/* GET mydata page. */
router.get('/', function(req, res, next) {
  let num = Math.floor(Math.random() * 1000) - 500
  //let fake_url = "http://aa.com/blah" + req.url
  //search_params = fake_url.search_params
  //if ('x' in search_params){
    //num = parseInt(x);
  //}
  res.render('computation', {result: `abs() applied to ${num} is ${Math.abs(num)}`});
});

module.exports = router;
