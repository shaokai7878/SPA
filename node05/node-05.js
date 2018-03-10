window.onload=function(){
    var timer = 0,i=0;
    var progress = document.getElementById('progress');
    var begin = this.document.getElementById('begin');
    var pause = document.getElementById('pause');
    var re = document.getElementById('re');
    begin.onclick=function(){
        timer = window.setInterval(function(){
            progress.value = i;
            i++;
        },100)};
    pause.onclick=function(){
        window.clearInterval(timer);
        timer=0;
    };
    re.onclick=function(){
        i=0;
        progress.value = i;
    };
}