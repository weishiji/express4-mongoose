var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/mydb')

var Schema = mongoose.Schema;

var db = mongoose.connection;

db.on('error',console.error.bind(console,'connection error:'))

var _User = new Schema({
	'email' : String
	,'name' : String
	,'password' : String
},{collection:'user'})
exports.User = mongoose.model('user',_User)
