window.onload=function(){
    var btn = document.getElementById('btn');
    btn.onclick=function(){
        alert('你点击了按钮');
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