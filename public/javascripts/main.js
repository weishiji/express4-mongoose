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
                alert(dt.message)
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
            if(dt['status'] === 0){
                window.location = '/'
            }else{
                alert(dt.message)
            }
        })
    })
	var socket = io();
	$('#sio-btn').on('click',function(){
		socket.emit('chat message','hello world');
	})
	socket.on('chat message',function(msg){
		$('#sio-btn').after(msg)
	})

    $('#create_room').on('click',function(){
        if(!EM4.user){
            window.location.href = '/users/login'
        }
        var sendData = {
            'name' : Math.random()+'ROOMS'
            ,'owner_id' : EM4.user._id
            ,'owner_name' : EM4.user.username
        }
        $.ajax({
            url : '/api/create_room'
            ,type : 'POST'
            ,'dataType' : 'JSON'
            ,data : sendData
        }).done(function(dt){
            console.log(dt)
        })
    })
})
