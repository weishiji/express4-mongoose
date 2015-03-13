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

router.post('/register',function(req,res,next){
    var _uname = req.body.username
        ,_pass = req.body.password
    if(_uname === ''){
        res.send('用户名不能为空')
    }else if(_pass === ''){
        res.send('密码不能为空')
    }else{
        var user = req.db.User({
            username : req.body.username
            ,password : req.body.password
        })
        user.save(function(err,dt){
            if(err){
                res.send('用户名已经被占用')
                return
            }else{
                req.session.user_id = dt['_id']

                res.send('注册成功')
            }
        })
    }

})

module.exports = router;
