angular.module("katmMod",["LocalStorageModule"])
.controller("katmC",function(localStorageService,$http,$scope){
	$scope.imgs = [];
	$scope.actualImgs = [];

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
	$scope.actualImgs = ims.slice(0,29);
});