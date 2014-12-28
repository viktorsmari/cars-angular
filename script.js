var app = angular.module('myApp', []);

app.controller("carsController",['$scope', '$http',
function($scope, $http){
	$scope.carnumber = "aa031"

	$scope.fetch = function() {


		$scope.url = 'http://apis.is/car/?number=' + $scope.carnumber;
		$http({
			method: 'GET',
			url: $scope.url,
		}).success(function(data, status) {
			$scope.status = status;
			$scope.data = data.results[0];
			
			$scope.addSearch();
			// console.log($scope.data)
		}).
		error(function(data, status) {
			$scope.data = data || "Request failed";
			$scope.status = status;
		});
	};
	
	//Start with one default search
	$scope.fetch();

	// Add searched plates to list

	$scope.searched = []
	$scope.counter = 0;

	$scope.addSearch = function(){
		// Dont get duplicate items in array
		if($scope.searched.indexOf($scope.carnumber) == -1){
			$scope.searched.push($scope.carnumber)
			$scope.counter++;
		}
	}

}])
 