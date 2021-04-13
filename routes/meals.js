var express = require('express');
var router = express.Router();

/* GET meals listing */
router.get('/', function(req, res, next) {
    res.send("Respond with meals");
});

module.exports = router;