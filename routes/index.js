var express = require('express');
var router = express.Router();
/* GET home page. */
router.get('/', function(req, res, next) {
    var sess = req.session
    console.log(sess)
	var user = req.db.User
	user.find(function(err,doc){
		//console.log(doc,'doc')
	})
	res.render('index', { title: 'Express' });
});

module.exports = router;
