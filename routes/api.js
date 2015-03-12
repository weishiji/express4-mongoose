/**
 * Created by lxg on 15-3-10.
 */
var express = require('express');
var router = express.Router();

/* api listing. */
router.post('/login',function(req,res){
    console.log(req.body.email)
    var user = new req.db.User({
        email : req.body.email
        ,password : req.body.password
    })
    user.save()
    res.send('success')
})

router.post('/register',function(req,res){
    var user = req.db.User
    console.log(user({
        username : req.body.username
        ,password : req.body.password
    }))
    user.save()

})

module.exports = router;
