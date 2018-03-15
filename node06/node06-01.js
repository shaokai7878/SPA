$(function(){
    var $wid= $("#wid");
    var $hei = $('#hei');
    var $cal = $('#cal');
    // function perimeter(x,y){
        
    //     var lenX = (x.split('.').length === 2) ? x.split('.')[1].length : 0;
    //     var lenY = (y.split('.').length === 2) ? y.split('.')[1].length : 0;

    //     var max = Math.max(lenX, lenY);
    //     return (x * (10 ** max) + y * (10 ** max)) * 2 / (10 ** max);
    // }

    // function area(x,y){
    //     var lenX = (x.split('.').length === 2) ? x.split('.')[1].length : 0;
    //     var lenY = (y.split('.').length === 2) ? y.split('.')[1].length : 0;

    //     var max = Math.max(lenX, lenY);
    //     return (x * (10 ** max)) * (y * (10 ** max)) / (10 ** (2 * max));
    // }
    function round(x,n){
        return Math.round(x*Math.pow(10,n))/Math.pow(10,n);
    }
    $('.rectangle form').submit(function(e){  
        e.preventDefault();//阻止页面提交;
        var width = $wid.val();
        var height = $hei.val();
        var p = round(width*2+height*2,2);
        var a = round(width*height,2);
        $('#z').val(p);
        $('#area').val(a);
        // $('#z').val(perimeter(width,height));
        // $('#area').val(area(width,height));
    });
});