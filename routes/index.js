var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    var sess = req.session;
    /*req.request.get('http://feixue.com/api/cs_category?with_child=1',function(err,response,body){
        console.log(body)
        res.render('index', { title: 'Express' });
    })*/

    var user = req.db.User
	user.find({'_id' : sess.user_id},function(err,doc){
        if(doc.length !== 0){
            res.render('index',{
                title : doc[0].username
                ,loginStatus : true
            })
        }else{
            res.render('index',{
                title : 'welcome'
                ,loginStatus : false
            })
        }
	})

});

module.exports = router;
