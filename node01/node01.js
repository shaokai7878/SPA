window.onload=function(){
    var wid = document.getElementById('wid');
    var hei = document.getElementById('hei');
    var btn = document.getElementById('btn');
    var z = document.getElementById('z');
    var area = document.getElementById('area');
    btn.onclick=function(){
        var width=wid.value;
        var height=hei.value;
        z.value=width*2+height*2;
        area.value = width*height;
    }
}