/**
 * Created by lxg on 15-4-12.
 * server socket io
 */

function Sio(server){
    this.io = require('socket.io').listen(server);
    this.init();
}
Sio.prototype.init = function(){
    var io = this.io;
    io.sockets.on('connection', function (socket) {
        console.log('a user connected');
        socket.on('chat message', function(msg){
            console.log('message: ' + msg);
            io.emit('chat message', msg);
        });
        socket.on('disconnect', function(){
            console.log('user disconnected');
        });

    });
};

exports = module.exports = function (server){
    new Sio(server);
};
