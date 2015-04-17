var express = require('express');
var router = express.Router();
var db = require('../server/db');

/* GET users listing. */
router.get('/login',function(req,res,next){
    var user_id = req.session.user_id;
    if(user_id){
        res.redirect('/')
        return
    }
    res.render('users/login',{title : 'Login'})
});
router.get('/register',function(req,res,next){
    res.render('users/register',{title : 'Register'})
});
router.get('/logout',function(req,res,next){
    delete req.session.user_id;
    res.redirect('/')
});

module.exports = router;
