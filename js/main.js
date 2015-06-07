var m = angular.module("katmMod",[]);
m.controller("katmC",function($scope,$http){
	$scope.imgs = [];

	$http.get("http://drivalegre.github.io/KillAllTheMemes/js/jsondata.json")
	.success(function(data){
		$scope.imgs = data;
	})
	.error(function(err){
		console.log(err);
	});
});

m.controller("katmG",function($scope,$http){
	$scope.douplets = [];
	// Comment
	$http.get("http://drivalegre.github.io/KillAllTheMemes/js/jsondata.json")
	.success(function(data){
		var a = data;
		var douplet = [];

		for (var i = 0; i < a.length; i++) {
			if(douplet.length == 2)
			{
				$scope.douplets.push(douplet);
				douplet = [];
			}
			if(a[i].url.indexOf("opt") != -1)
			{
				var img = {"url":a[i].url};
				douplet.push(img);
			}
		}
	})
	.error(function(err){
		console.log(err);
	});
});