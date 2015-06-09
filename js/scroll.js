window.addEventListener("scroll",function(){
	

    if(scroll > scroll_size){
        // Codigo para mostrar menu
    } else {
        // Codigo para ocultar el menu
    }
});

var getData = {
	"scroll":function(){
		var scrollT = document.documentElement.scrollTop || document.body.scrollTop;
		return scrollT;
	},
	"scrollSize":function(){
	    var element = document.getElementByTagName("body");
	    var scroll_size = element.offsetHeight || element.style.pixelHeight;
	    return scroll_size;
	}
}