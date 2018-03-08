
window.onload=function(){
    var age =   document.getElementById('age');
    var range = document.getElementById('range');
    age.innerHTML = range.value;
    range.onchange=function(){
        age.innerHTML = range.value;
    }
};
