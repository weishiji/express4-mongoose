$(function(){
	$('button').on('click',function(){
		/*$.ajax({
			url : '/user'
			,type : "POST"
			,dataType : "JSON"
			,data : {'name' : 'liu'+ Math.random(),'email' : 'lxg@gmail.com','password' : '123456'}
		})
		.done(function(dt){
			console.log(dt)
		})*/
        $.ajax({
            url : '/api/login'
            ,type : "POST"
            ,'dataType' : "JSON"
            ,data : {}
        })
        .done(function(dt){
            console.log(dt)
        })
	})	
})
