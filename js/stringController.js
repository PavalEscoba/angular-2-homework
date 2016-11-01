var app = angular.module("myApp");

app.controller("stringController", function($scope){
	function isNumeric(n){
  		return !isNaN(parseFloat(n)) && isFinite(n);//праверка на лічбу
	};
	$scope.cuting = function(){
		$scope.result ="";
		if(!isNumeric($scope.number) || $scope.number<0){
			alert("Enter positive number")
		}
		else{
		$scope.result = $scope.string.slice(0,$scope.number);
		}
	}

});

