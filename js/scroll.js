window.addEventListener("scroll",function(){
	var scroll = document.documentElement.scrollTop || document.body.scrollTop;
    // Obtenemos el alto del header
    var element = document.getElementByTagName("body");
    var scroll_size = element.offsetHeight || element.style.pixelHeight;
});