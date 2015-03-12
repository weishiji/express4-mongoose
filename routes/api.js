/**
 * Created by lxg on 15-3-10.
 */
var express = require('express');
var router = express.Router();

/* api listing. */
router.post('/login',function(req,res){
    var user = new req.db.User({
        email : req.body.email || ''
        ,name : req.body.name || ''
        ,password : req.body.password || ''
    })
    user.save()
    res.send('success')
})

router.post('/register',function(req,res){
    var db = req.db
})

module.exports = router;
