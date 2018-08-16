var app = angular.module('myApp', []);
app.controller('crudctrl', function($scope) {
	$scope.form = [];
	$scope.onSubmit = function() {
		$scope.form.push($scope.userName);
		// $scope.form.push($scope.userName,$scope.addressName);
	}
	$scope.edit = function(){
		$scope.editable = true;
		$scope.showEditButton = !$scope.showEditButton;
		$scope.showDeltButton = !$scope.showDeltButton;
	}
	$scope.update = function() {
		$scope.editable = false;
		$scope.div = !$scope.div;
	}

	$scope.delete = function() {
		$scope.form.pop($scope.userName);
	}
});