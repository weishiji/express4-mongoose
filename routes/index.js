var express = require('express');
var router = express.Router();
/* GET home page. */
router.get('/', function(req, res, next) {
	var user = req.db.User
	user.find(function(err,doc){
		console.log(doc,'doc')
	})
	res.render('index', { title: 'Express' });
});
router.get('/login',function(req,res,next){
    res.render('login',{title : 'Login'})
})
router.get('/register',function(req,res,next){
    res.render('register',{title : 'Register'})
})
router.post('/user',function(req,res){
	var user = new req.db.User({
		email : req.body.email || ''
		,name : req.body.name || ''
		,password : req.body.password || ''
	})
	user.save()
	res.send('success')
})

module.exports = router;
