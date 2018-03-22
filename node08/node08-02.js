var lookPswd = function(config){
    var container = config.container;

    var $label = $('#label');
    var $pswd = $("#pswd");
    var $br = $('<br>');
    var $img = $("#img1");
    $(container).append($label,$pswd,$img,$br);
    $img.mouseover(function(){
        $img.attr('src','browse 1.jpg');
        $pswd.attr('type','text');
    });
    $img.mouseout(function(){
        $img.attr('src','browse.jpg');
        $pswd.attr('type','password');
    });
}