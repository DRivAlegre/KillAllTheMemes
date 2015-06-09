angular.module("katmMod",["LocalStorageModule"])
.controller("katmC",function(localStorageService,$http,$scope){
	$scope.imgs = [];
	$scope.actualImgs = [];
	$scope.initial = 0;
	$scope.finale = 29;

	// A comment
	if(localStorageService.get("imgs")){
		$scope.imgs = localStorageService.get("imgs");
	}
	else{
		$http.get("http://drivalegre.github.io/KillAllTheMemes/js/jsondata.json")
		.success(function(data){
			$scope.imgs = data;
			localStorageService.set("imgs",$scope.imgs);
		})
		.error(function(err){
			console.log(err);
		});
	}

	var ims = $scope.imgs;
	$scope.actualImgs = ims.slice($scope.initial,$scope.finale);
	$scope.initial += 30;
	$scope.finale += 30;

	$scope.getMorePages = function(){
		var ims = $scope.imgs;
		$scope.actualImgs = ims.slice($scope.initial,$scope.finale);
		$scope.initial += 30;
		$scope.finale += 30;
	}

	//

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
});
