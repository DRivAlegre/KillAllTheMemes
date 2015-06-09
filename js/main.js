angular.module("katmMod",["localStorageModule"])
.controller("katmC",function(localStorageService,$http,$scope){
	$scope.imgs = [];
	$scope.actualImgs = [];
	$scope.initial = 0;
	$scope.finale = 35;

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

	// Va a tener un comportamiento rarisimo
	$scope.actualImgs = $scope.imgs.slice($scope.initial,$scope.finale);
	$scope.initial += 30;
	$scope.finale += 30;
});
