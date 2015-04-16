/**
 * Created by lxg on 15-3-10.
 */
var express = require('express');
var router = express.Router();
var db = require('../server/db');

/*
*  login
*  param: username password
* */
router.post('/login',function(req,res){
    var user = db.User
    user.find({'username' : req.body.username,'password' : req.body.password},function(err,dt){
        if(err) throw new Error(err)
        if(dt.length !== 0){
            req.session.user_id = dt[0]['_id']
            res.json({
                status : 0
                ,message : 'success'
            })
        }else{
            res.json({
                'status' : 1
                ,message : 'we don\'t have this user'
            })
        }
    })
})
/*
* register
* param: username password
* */
router.post('/register',function(req,res,next){
    var _uname = req.body.username
        ,_pass = req.body.password
    if(_uname === ''){
        res.json({
            status : 1
            ,message : '用户名不能为空'
        })
    }else if(_pass === ''){
        res.json({
            status : 2
            ,message : '密码不能为空'
        })
    }else{
        var user = db.User({
            username : req.body.username
            ,password : req.body.password
        })
        user.save(function(err,dt){
            if(err){
                res.json({
                    status : 3
                    ,message : '用户名已经被占用'
                })
                return
            }else{
                req.session.user_id = dt['_id']

                res.json({
                    status : 0
                    ,message : '注册成功'
                })
            }
        })
    }
});
/*
* create room
* param : owner_id   owner_name   name
* */
router.post('/create_room',function(req,res){
    var session = req.session
    if(!session.user_id){
        res.json({
            status : 1
            ,message : '用户需要登录'
        })
    }
    var room_new = db.ChatRoom({
        'owner_id' : req.body.owner_id
        ,'owner_name' : req.body.owner_name
        ,'name' : req.body.name
    })
    room_new.save(function(err,dt){
        if(err){
            res.json({
                status : 2
                ,message : '创建失败'
            })
        }else{
            res.json({
                status : 0
                ,message : '创建成功'
            })
        }
    })
})


module.exports = router;
