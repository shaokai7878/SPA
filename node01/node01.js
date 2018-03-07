window.onload=function(){
    var wid = document.getElementById('wid');
    var hei = document.getElementById('hei');
    var btn = document.getElementById('btn');
    btn.onclick=function(){
        var width=wid.value;
        var height=hei.value;
        z=width*2+height*2;
        area = width*height;
        alert(z);
        alert(area);
    }
}