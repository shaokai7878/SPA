window.onload=function(){
    var btn = document.getElementById('btn');
    btn.onclick=function(){
        alert('2s后恢复');
        App();
    }
    function App(){
        btn.disabled=true;
        var set= setInterval(function(){
                btn.disabled=false;
                clearInterval(set);             
        },2000)
    }
};