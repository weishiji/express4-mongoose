$(function(){
    $('#login-form').on('submit',function(){
        var sendData = $(this).serializeObject()
        console.log(sendData)
        $.ajax({
            url : '/api/login'
            ,type : 'POST'
            ,dataType : "JSON"
            ,data : sendData
        }).done(function(dt){
            console.log(dt)
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
})
