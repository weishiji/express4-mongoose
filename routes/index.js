var express = require('express');
var router = express.Router();
var db = require('../server/db');
var async = require('async');
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
        }
        resData.rooms = results.rooms;

        res.render('index/index',resData)
    })
});
router.get('/about',function(req,res,next){
    var session = req.session
    console.log(req.header('Cookie'),'cccccccccccccccccccccccccccccc')
    req.request.get('http://localhost/test.php',function(err,response,body){
        console.log(session,'-------------------------')
        console.log(body,'++++++++++++++++++')
        res.render('index/about')
    })
})

module.exports = router;
