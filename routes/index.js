var express = require('express');
var router = express.Router();
var db = require('../server/db')
/* GET home page. */
router.get('/', function(req, res, next) {
    var sess = req.session;
    /*req.request.get('http://feixue.com/api/cs_category?with_child=1',function(err,response,body){
        console.log(body)
        res.render('index', { title: 'Express' });
    })*/
    //user_id = 55029454b8c172431ba2e16f
    var user = db.User;
    var chatRoom = db.ChatRoom;
    var resData = {
        'title' : 'welcome to my website'
        ,'loginStatus' : false
    }
	user.find({'_id' : sess.user_id},function(err,doc){
        if(doc.length !== 0){
            resData.title = doc[0].username
            resData.loginStatus = true
        }
        chatRoom.find({},function(err,doc){
            if(err) throw new Error(err);
            resData.rooms = doc;
            console.log(resData,'===================')
            res.render('index',resData)
        })
	});

});

module.exports = router;
