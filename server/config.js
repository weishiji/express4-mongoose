var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/mydb')

var Schema = mongoose.Schema;

var db = mongoose.connection;

db.on('error',console.error.bind(console,'connection error:'))

var _User = new Schema({
	'username' : {type : String,unique : true, index : true}
	,'password' : String
},{collection:'user'})

exports.User = mongoose.model('User',_User)
