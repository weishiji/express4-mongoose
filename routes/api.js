/**
 * Created by lxg on 15-3-10.
 */
var express = require('express');
var router = express.Router();

/* api listing. */
router.post('/login', function(req, res, next) {
    res.send('respond with a resource');
});
router.post('/register',function(req,res){
    var db = req.db

})
module.exports = router;
