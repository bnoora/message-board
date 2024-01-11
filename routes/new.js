var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.render('newmsg', { title: "Messageboard Newe Message" })
});

module.exports = router;