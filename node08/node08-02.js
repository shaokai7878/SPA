var lookPswd = function(config){
    var container = config.container;
    var $label = $('<label for=name>密码：</label>');
    var $pswd = $("<input type='password'class='pswd' autofocus>");
    var $pswdText = $("<input type='text'class='text'>");
    var $br = $('<br>');
	var $img = $("<div class='eye'>");
    

    $(container).append($label,$pswd,$br,$img);
    
    $pswd.on('input',function(){
        $pswd.val($pswdText.val());
    })

    $img.mouseover(function(){
        $pswd.attr('type','text');
    });

    $img.mouseout(function(){
        $pswd.attr('type','password');
    });

    this.get=function(){
        return $pswdText.val();
    }
}