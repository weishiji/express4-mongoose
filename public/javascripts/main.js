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
})
