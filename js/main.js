angular.module("katmMod",["LocalStorageModule"])
.controller("katmC",function(localStorageService, $http, $scope, $window){
	$scope.imgs = [];
	$scope.actualImgs = [];

	var AMOUNT_IMAGES = 29;
	var pageImages = 1;
	var currentScroll = scroller();
	var maxScroll = scrollSize();

	// A comment
	if (localStorageService.get("imgs")) {
		$scope.imgs = localStorageService.get("imgs");
	}
	else {
		$http.get("http://david-rivero.github.io/KillAllTheMemes/js/jsondata.json")
		.success(function (data) {
			$scope.imgs = data;
			localStorageService.set("imgs", $scope.imgs);
		})
		.error(function (err) {
			console.log(err);
		});
	}
	updateImages();

	$window.addEventListener('scroll', function () {
		currentScroll = scroller();
		if (currentScroll >= maxScroll) {
			pageImages++;
			updateImages();

			if (currentScroll > maxScroll) {
				maxScroll = scrollSize();
			}
		}
	});

	function updateImages () {
		var ims = $scope.imgs;
		$scope.actualImgs = ims.slice(0, pageImages * AMOUNT_IMAGES);
		// FIXME: Update in 'angular' way
		if (pageImages > 1) {
			$scope.$apply();
		}
	}

	function scroller () {
		var scrollT = document.documentElement.scrollTop || document.body.scrollTop;
		return scrollT;
	}

	function scrollSize () {
	    var element = document.getElementsByTagName("body")[0];
	    var scroll_size = element.offsetHeight || element.style.pixelHeight;
	    return scroll_size;
	}
});
