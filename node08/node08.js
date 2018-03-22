var timerBtn= function(config){
    var cfg=config, 
    enabled = cfg.enabled,
    timer,
    i = cfg.duration,//duration获取时长
    $btn = $('<input class="timer-button" type="button">');
    
    $(cfg.container).append($btn);//container是div.main;

    if(cfg.enabled){
        enableBtn();
    }else{
        disableBtn();
    }
    function disableBtn(){
        enabled=false;
        $btn.attr('disabled','disabled');
        setBtnText();

        timer=window.setInterval(function(){
            i--;
            setBtnText();
            if(i===0)
            enableBtn();
        },1000);
    }

    function enableBtn(){
        enabled=true;
        i=cfg.duration;
        clearInterval(timer);
        setBtnText();
        $btn.removeAttr('disabled');//移除enabled属性
    }

    function setBtnText(){
        var txt = enabled?cfg.text:cfg.text+'('+i+'s)';
        $btn.val(txt);
    }

    $btn.click(function(){
        $btn.trigger('timer-button-click');//标注不太懂
        if(cfg.enabled)
        disableBtn();
    });
    return $btn;
};