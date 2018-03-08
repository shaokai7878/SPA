window.onload=function(){
    var img = this.document.getElementById('img');
    img.onmouseover=function(){
        img.src="browse 1.jpg";
        pwd.type="text";
    }
    img.onmouseout=function(){
        img.src="browse.jpg"
        pwd.type="password";
    }
}