$(function(){
    $('#login-form').on('submit',function(){
        var sendData = $(this).serializeObject()
        $.ajax({
            url : '/api/login'
            ,type : 'POST'
            ,dataType : "JSON"
            ,data : sendData
        }).done(function(dt){
            if(dt['status'] === 0){
                window.location = '/'
            }else{
                alert('账号或者密码错误')
            }
        })
    })
    $('#register-form').on('submit',function() {
        var sendData = $(this).serializeObject()
        $.ajax({
            url: '/api/register'
            , type: 'POST'
            , dataType: "JSON"
            , data: sendData
        }).done(function (dt) {
            console.log(dt)
        })
    })
	var socket = io();
	$('#sio-btn').on('click',function(){
		socket.emit('chat message','hello world');
	})
	socket.on('chat message',function(msg){
		$('#sio-btn').after(msg)
	})
})
