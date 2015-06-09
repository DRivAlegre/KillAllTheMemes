window.addEventListener("scroll",function(){
	var scroll = getData.scroll();
	var scroll_size = getData.scrollSize();

    if(scroll > scroll_size){
        // Linkea el evento scroll con $scope.getMorePages() y dibujalo en la pagina con append
    	$scope.getMorePages();
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