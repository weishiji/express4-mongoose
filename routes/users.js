var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/login',function(req,res,next){
    var user_id = req.session.user_id
    if(user_id){
        res.redirect('/')
    }
    res.render('login',{title : 'Login'})
})
router.get('/register',function(req,res,next){
    res.render('register',{title : 'Register'})
})
module.exports = router;
