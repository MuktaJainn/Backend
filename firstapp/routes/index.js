var express = require('express');
var router = express.Router();
//didn't need to use app.set to here just create the routes.

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render("index");
});

module.exports = router;
