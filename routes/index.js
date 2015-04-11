var express = require('express');
var router = express.Router();
/* GET home page. */
router.get('/', function(req, res, next) {
    var sess = req.session;
    req.request.get('http://feixue.com/api/cs_category?with_child=1',function(err,response,body){
        console.log(body)
        res.render('index', { title: 'Express' });
    })
	var user = req.db.User
	user.find(function(err,doc){
		//console.log(doc,'doc')
	})

});

module.exports = router;
