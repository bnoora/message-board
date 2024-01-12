var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    const error = req.query.error;
    res.render('newmsg', { title: "Messageboard" , error: error})
});

module.exports = router;