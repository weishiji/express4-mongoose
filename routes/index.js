var express = require('express');
var router = express.Router();
var db = require('../server/db');
var async = require('async');

var request = require('request');
var cookieRequest = function (userRequest, userResponse, url, callback) {
    var options = {
        url: url,
        headers: {}
    };
    options.headers.Cookie = userRequest.header('Cookie'); // 将用户的 Cookie 传递给后台服务器
    request(options, function (error, response, body) {
        userResponse.setHeader('Cookie', response.headers.cookie);
        callback.apply(null, arguments);
    });
};


/* GET home page. */
router.get('/', function(req, res, next) {
    var sess = req.session;
    var user = db.User;
    var chatRoom = db.ChatRoom;
    var resData = {
        'title' : '首页'
        ,'loginStatus' : sess.user_id ? true : false
    }
    async.parallel({
        'user' : function(cb){
            if(sess.user_id){
                user.findOne({'_id' : sess.user_id}).exec(cb);
            }else{
                cb();
            }
        }
        ,'rooms' : function(cb){
            chatRoom.find({}).exec(cb)
        }
    },function(errs,results){
        if(resData.loginStatus){
            resData.title = results.user.username;
            resData['user'] = results.user
            resData['user']['password'] = null
            sess.user_id = results.user['_id']
        }
        resData.rooms = results.rooms;
        
        res.render('index/index',resData)
    })
});

router.get('/about',function(req,res,next){
    //var session = req.session
    req.session.user_id = Math.random()
    cookieRequest(req,res,'http://localhost/test.php',function(err,response,body){
        res.render('index/about')
    })

})

module.exports = router;
