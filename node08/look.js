
$(function(){
	
	var $add=$('.add');
	var $get=$('.get');
	var pswdTextboxs=[];

	$add.on('click',function(){
		var pswd = new lookPswd({'container':'div.main'});
		pswdTextboxs.push(pswd);
		$get.removeAttr('disabled');
	});

	$get.on('click',function(){
		pswdTextboxs.forEach(function(pswd){
			alert(pswd.get());
		})
	})

});