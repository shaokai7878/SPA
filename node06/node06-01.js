$(function(){
    var $wid= $("#wid");
    var $hei = $('#hei');
    var $cal = $('#cal');
    function perimeter(x,y){
        
        var lenX = (x.split('.').length === 2) ? x.split('.')[1].length : 0;
        var lenY = (y.split('.').length === 2) ? y.split('.')[1].length : 0;

        var max = Math.max(lenX, lenY);
        return (x * (10 ** max) + y * (10 ** max)) * 2 / (10 ** max);
    }

    function area(x,y){
        var lenX = (x.split('.').length === 2) ? x.split('.')[1].length : 0;
        var lenY = (y.split('.').length === 2) ? y.split('.')[1].length : 0;

        var max = Math.max(lenX, lenY);
        return (x * (10 ** max)) * (y * (10 ** max)) / (10 ** (2 * max));
    }

    $('.rectangle form').submit(function(e){
        e.preventDefault();

        var width = $wid.val();
        var height = $hei.val();
        $('#z').val(perimeter(width,height));
        $('#area').val(area(width,height));
    });
});