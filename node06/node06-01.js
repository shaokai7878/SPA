var $w=$("#wid");
var $h=$("#hei");
$("#cal").onclick=function(){
    var w =$w.val(),h=$h.val();
    $("#area")=w*h;
    $("z")=w*2+h*2;
    $("#area").val($("#area"));
    $("#z").val($("z"));
}